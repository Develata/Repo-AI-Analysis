<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import ReportDataState from './ReportDataState.vue';
import { useReports } from '../composables/useReports';
import { excerpt, formatScore, reportLink, type Report } from './reportData';

const { reports, loading, started, error, ensureReports } = useReports();
const query = ref('');
const category = ref('all');
const language = ref('all');
const freshness = ref('all');
const sort = ref('score');
const page = ref(1);
const pageSize = 24;
let hydratingUrl = true;

const categoryOptions = computed(() => {
  const counts = new Map<string, number>();
  for (const report of reports.value) {
    const parts = String(report.directory || report.category || '').split('/').filter(Boolean);
    for (let index = 1; index <= parts.length; index += 1) {
      const path = parts.slice(0, index).join('/');
      counts.set(path, (counts.get(path) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort(([left], [right]) => left.localeCompare(right, 'en'))
    .map(([value, count]) => {
      const parts = value.split('/');
      const depth = parts.length - 1;
      return {
        value,
        label: `${'\u00A0\u00A0'.repeat(depth)}${depth > 0 ? '↳ ' : ''}${parts[parts.length - 1]} (${count})`,
      };
    });
});
const languages = computed(() => [...new Set(reports.value.flatMap((report) => splitLanguages(report.primary_language)))].sort());

function normalizeText(value: unknown): string {
  return String(value ?? '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[._/\\|:()[\]{}"'`-]+/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim();
}

function normalizePath(value: unknown): string {
  return String(value ?? '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/\\/gu, '/')
    .replace(/\s*\/\s*/gu, '/')
    .replace(/\/+/gu, '/')
    .trim();
}

function splitLanguages(value: unknown): string[] {
  return String(value ?? '')
    .split(/\s*(?:\/|,)\s*/u)
    .map((item) => item.trim())
    .filter(Boolean);
}

function matchesCategoryFilter(reportCategory: string, selectedCategory: string): boolean {
  return selectedCategory === 'all'
    || reportCategory === selectedCategory
    || reportCategory.startsWith(`${selectedCategory}/`);
}

function timestamp(value: string): number {
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function categoryLeaf(report: Report): string {
  const parts = String(report.directory || report.category).split('/').filter(Boolean);
  return parts.at(-1) ?? 'uncategorized';
}

function showStatus(report: Report): boolean {
  return Boolean(report.status && report.status !== 'active');
}

function isStale(report: Report): boolean {
  const checkedAt = timestamp(report.last_checked || report.updated);
  return checkedAt > 0 && Date.now() - checkedAt > 180 * 24 * 60 * 60 * 1000;
}

const searchIndex = computed(() => reports.value.map((report) => {
  const reportCategory = String(report.directory || report.category || '');
  return {
    report,
    category: reportCategory,
    languages: splitLanguages(report.primary_language),
    titleText: normalizeText(report.title),
    categoryText: normalizeText(reportCategory),
    categoryPath: normalizePath(reportCategory),
  };
}));

const filtered = computed(() => {
  const rawQuery = query.value.trim();
  const pathNeedle = normalizePath(rawQuery);
  const textTokens = normalizeText(rawQuery).split(' ').filter(Boolean);
  const matched = searchIndex.value
    .filter((item) => {
      if (!matchesCategoryFilter(item.category, category.value)) return false;
      if (language.value !== 'all' && !item.languages.includes(language.value)) return false;
      if (freshness.value === 'stale' && !isStale(item.report)) return false;
      if (!pathNeedle) return true;
      if (item.categoryPath.includes(pathNeedle)) return true;
      return textTokens.every((token) => item.titleText.includes(token) || item.categoryText.includes(token));
    })
    .map((item) => item.report);

  return matched.sort((left, right) => {
    if (sort.value === 'updated') return timestamp(right.updated || right.last_checked) - timestamp(left.updated || left.last_checked) || left.title.localeCompare(right.title, 'en');
    if (sort.value === 'recommendation') return Number(right.ratings.recommendation) - Number(left.ratings.recommendation) || Number(right.overall_score) - Number(left.overall_score);
    if (sort.value === 'stars') return Number(right.stars) - Number(left.stars) || left.title.localeCompare(right.title, 'en');
    if (sort.value === 'title') return left.title.localeCompare(right.title, 'en');
    return Number(right.overall_score) - Number(left.overall_score) || left.title.localeCompare(right.title, 'en');
  });
});
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)));
const pagedReports = computed(() => filtered.value.slice((page.value - 1) * pageSize, page.value * pageSize));
const hasFilters = computed(() => Boolean(query.value || category.value !== 'all' || language.value !== 'all' || freshness.value !== 'all'));

function syncUrlState() {
  if (typeof window === 'undefined' || hydratingUrl) return;
  const url = new URL(window.location.href);
  const values: Record<string, string> = {
    q: query.value,
    category: category.value === 'all' ? '' : category.value,
    language: language.value === 'all' ? '' : language.value,
    freshness: freshness.value === 'all' ? '' : freshness.value,
    sort: sort.value === 'score' ? '' : sort.value,
    page: page.value === 1 ? '' : String(page.value),
  };
  for (const [key, value] of Object.entries(values)) {
    if (value) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  }
  window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
}

function readUrlState() {
  if (typeof window === 'undefined') return;
  const params = new URL(window.location.href).searchParams;
  query.value = params.get('q') ?? '';
  category.value = params.get('category') ?? 'all';
  language.value = params.get('language') ?? 'all';
  freshness.value = params.get('freshness') === 'stale' ? 'stale' : 'all';
  const requestedSort = params.get('sort') ?? 'score';
  sort.value = ['score', 'updated', 'recommendation', 'stars', 'title'].includes(requestedSort) ? requestedSort : 'score';
  const requestedPage = Number(params.get('page') ?? 1);
  page.value = Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
}

function clearFilters() {
  query.value = '';
  category.value = 'all';
  language.value = 'all';
  freshness.value = 'all';
  page.value = 1;
}

async function load() {
  try {
    await ensureReports();
    page.value = Math.min(totalPages.value, Math.max(1, page.value));
  } catch {
    // The shared composable exposes the error to the visible retry state.
  }
}

function goToPage(nextPage: number) {
  page.value = Math.min(totalPages.value, Math.max(1, nextPage));
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  document.querySelector('.raia-analysis-toolbar')?.scrollIntoView({ behavior, block: 'start' });
}

function restoreUrlState() {
  hydratingUrl = true;
  readUrlState();
  const requestedPage = page.value;
  if (reports.value.length > 0) page.value = Math.min(totalPages.value, Math.max(1, page.value));
  hydratingUrl = false;
  if (page.value !== requestedPage) syncUrlState();
}

watch([query, category, language, freshness, sort], () => {
  if (hydratingUrl) return;
  page.value = 1;
  syncUrlState();
}, { flush: 'sync' });
watch(page, syncUrlState, { flush: 'sync' });
watch(totalPages, (value) => {
  if (page.value > value) page.value = value;
});

onMounted(() => {
  restoreUrlState();
  window.addEventListener('popstate', restoreUrlState);
  void load();
});
onUnmounted(() => window.removeEventListener('popstate', restoreUrlState));
</script>

<template>
  <p class="raia-analysis-copy">
    按目录结构浏览仓库分析；页面筛选状态会写入 URL，便于刷新、返回和分享。
  </p>

  <ReportDataState
    :loading="loading || !started"
    :error="error"
    :empty="started && !loading && !error && reports.length === 0"
    @retry="load"
  />

  <template v-if="reports.length > 0 && !error">
    <div class="raia-analysis-toolbar" role="search" aria-label="筛选报告">
      <input v-model="query" type="search" aria-label="按标题或目录路径搜索报告" placeholder="搜索标题或目录，如 ai-programs/coding-agents">
      <select v-model="category" aria-label="分类筛选">
        <option value="all">全部分类</option>
        <option v-for="item in categoryOptions" :key="item.value" :value="item.value">{{ item.label }}</option>
      </select>
      <select v-model="language" aria-label="语言筛选">
        <option value="all">全部语言</option>
        <option v-for="item in languages" :key="item" :value="item">{{ item }}</option>
      </select>
      <select v-model="freshness" aria-label="核验时效筛选">
        <option value="all">全部时效</option>
        <option value="stale">待复核（超过 180 天）</option>
      </select>
      <select v-model="sort" aria-label="结果排序">
        <option value="score">综合评分</option>
        <option value="updated">最近更新</option>
        <option value="recommendation">推荐度</option>
        <option value="stars">GitHub Stars</option>
        <option value="title">名称</option>
      </select>
      <button v-if="hasFilters" type="button" class="raia-filter-clear" @click="clearFilters">清除筛选</button>
    </div>

    <div class="raia-panel-head">
      <h2>报告目录</h2>
      <span>{{ filtered.length }} 项 · 第 {{ page }}/{{ totalPages }} 页</span>
    </div>

    <div v-if="filtered.length === 0" class="raia-data-state" role="status">
      <strong>没有匹配当前条件的报告。</strong>
      <span>可缩短关键词、改选上级分类，或清除全部筛选。</span>
      <button type="button" @click="clearFilters">显示全部报告</button>
    </div>

    <div v-else class="raia-card-grid">
      <a v-for="report in pagedReports" :key="report.slug" class="raia-card" :href="reportLink(report)">
        <div class="raia-score-row">
          <span class="raia-score">{{ formatScore(report.overall_score) }}/5</span>
          <span class="raia-chip">推荐 {{ formatScore(report.ratings.recommendation) }}</span>
          <span v-if="showStatus(report)" class="raia-chip is-warning">{{ report.status }}</span>
          <span v-if="isStale(report)" class="raia-chip is-warning">待复核</span>
        </div>
        <h3>{{ report.title }}</h3>
        <p>{{ excerpt(report) }}</p>
        <div class="raia-card-meta">
          <span class="raia-chip">{{ report.primary_language || 'mixed' }}</span>
          <span class="raia-chip" :title="report.directory || report.category">{{ categoryLeaf(report) }}</span>
          <span class="raia-chip">★ {{ Number(report.stars || 0).toLocaleString('en') }}</span>
        </div>
        <div class="raia-card-tags">
          <span v-for="tag in report.tags.slice(0, 3)" :key="tag" class="raia-chip">{{ tag }}</span>
          <span v-if="report.tags.length > 3" class="raia-chip">+{{ report.tags.length - 3 }}</span>
        </div>
      </a>
    </div>

    <nav v-if="filtered.length > pageSize" class="raia-pagination" aria-label="报告分页">
      <button type="button" :disabled="page === 1" @click="goToPage(page - 1)">上一页</button>
      <span>第 {{ page }} / {{ totalPages }} 页</span>
      <button type="button" :disabled="page === totalPages" @click="goToPage(page + 1)">下一页</button>
    </nav>
  </template>
</template>
