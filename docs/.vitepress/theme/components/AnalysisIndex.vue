<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useReports } from '../composables/useReports';
import { excerpt, formatScore, reportLink } from './reportData';

const { reports, ensureReports } = useReports();
const query = ref('');
const category = ref('all');
const language = ref('all');

const categories = computed(() => [...new Set(reports.value.map((report) => report.directory || report.category).filter(Boolean))].sort());
const languages = computed(() => [...new Set(reports.value.map((report) => report.primary_language).filter(Boolean))].sort());

function normalizeText(value: unknown): string {
  return String(value ?? '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[._/\\|:+#()[\]{}"'`-]+/gu, ' ')
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

const searchIndex = computed(() => reports.value.map((report) => {
  const reportCategory = report.directory || report.category;
  return {
    report,
    category: reportCategory,
    titleText: normalizeText(report.title),
    categoryText: normalizeText(reportCategory),
    categoryPath: normalizePath(reportCategory),
  };
}));

const filtered = computed(() => {
  const rawQuery = query.value.trim();
  const pathNeedle = normalizePath(rawQuery);
  const textTokens = normalizeText(rawQuery).split(' ').filter(Boolean);

  return searchIndex.value
    .filter((item) => {
      if (category.value !== 'all' && item.category !== category.value) return false;
      if (language.value !== 'all' && item.report.primary_language !== language.value) return false;
      if (!pathNeedle) return true;

      // Prefer literal folder-path matching, then fall back to separator-normalized token matching.
      if (item.categoryPath.includes(pathNeedle)) return true;
      return textTokens.every((token) => item.titleText.includes(token) || item.categoryText.includes(token));
    })
    .map((item) => item.report);
});

onMounted(async () => {
  await ensureReports();
});
</script>

<template>
  <p class="raia-analysis-copy">
    按目录结构组织的仓库分析，支持搜索、分类和语言过滤。具体文章页保留 VitePress 的左侧目录与右侧当页目录。
  </p>

  <div class="raia-analysis-toolbar">
    <input v-model="query" type="search" placeholder="title or folder path, e.g. ai-programs/coding-agents">
    <select v-model="category" aria-label="Category filter">
      <option value="all">All categories</option>
      <option v-for="item in categories" :key="item" :value="item">{{ item }}</option>
    </select>
    <select v-model="language" aria-label="Language filter">
      <option value="all">All languages</option>
      <option v-for="item in languages" :key="item" :value="item">{{ item }}</option>
    </select>
  </div>

  <div class="raia-panel-head">
    <h2>All Reports</h2>
    <span>{{ filtered.length }} items</span>
  </div>

  <div class="raia-card-grid">
    <a v-for="report in filtered" :key="report.slug" class="raia-card" :href="reportLink(report)">
      <div class="raia-score-row">
        <span class="raia-score">{{ formatScore(report.overall_score) }}/5</span>
        <span class="raia-chip">Rec {{ formatScore(report.ratings?.recommendation) }}/5</span>
        <span class="raia-chip">{{ report.status || 'unknown' }}</span>
      </div>
      <h3>{{ report.title }}</h3>
      <p>{{ excerpt(report) }}</p>
      <div class="raia-card-meta">
        <span class="raia-chip">{{ report.primary_language || 'mixed' }}</span>
        <span class="raia-chip">{{ report.directory || report.category }}</span>
        <span class="raia-chip">★ {{ Number(report.stars || 0).toLocaleString('en') }}</span>
      </div>
      <div class="raia-card-tags">
        <span v-for="tag in report.tags.slice(0, 4)" :key="tag" class="raia-chip">{{ tag }}</span>
      </div>
    </a>
  </div>
</template>
