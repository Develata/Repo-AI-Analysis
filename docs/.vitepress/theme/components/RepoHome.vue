<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { withBase } from 'vitepress';
import DimensionsRadar from './DimensionsRadar.vue';
import ReportDataState from './ReportDataState.vue';
import { useReports } from '../composables/useReports';
import {
  averageRatings,
  dimensionKeys,
  dimensionLabels,
  excerpt,
  formatScore,
  reportDate,
  reportLink,
  type Report,
} from './reportData';

const { reports, loading, started, error, ensureReports } = useReports();
const selectedSlug = ref('');

type CategorySummary = {
  path: string;
  label: string;
  count: number;
  averageScore: number;
  latestDate: string;
};

type DomainHighlight = {
  path: string;
  label: string;
  count: number;
  report: Report;
};

const latest = computed(() => reports.value
  .slice()
  .sort((a, b) => reportTimestamp(b) - reportTimestamp(a) || Number(b.overall_score) - Number(a.overall_score))
  .slice(0, 6));
const average = computed(() => averageRatings(reports.value));
const selectedReport = computed(() => latest.value.find((report) => report.slug === selectedSlug.value) ?? latest.value[0]);
const radarSeries = computed(() => [{
  label: selectedReport.value?.title ?? '平均值',
  ratings: selectedReport.value?.ratings ?? average.value,
}]);
const rankedDimensions = computed(() => {
  const report = selectedReport.value;
  if (!report) return [];
  return dimensionKeys
    .map((key) => ({ key, label: dimensionLabels[key], score: Number(report.ratings?.[key] ?? 0) }))
    .sort((left, right) => right.score - left.score || left.label.localeCompare(right.label, 'zh-CN'));
});
const strengths = computed(() => rankedDimensions.value.slice(0, 2));
const risks = computed(() => rankedDimensions.value.slice(-2).reverse());
const categorySummaries = computed<CategorySummary[]>(() => {
  const buckets = new Map<string, Report[]>();

  for (const report of reports.value) {
    const path = topLevelCategory(report);
    const bucket = buckets.get(path) ?? [];
    bucket.push(report);
    buckets.set(path, bucket);
  }

  return [...buckets.entries()]
    .map(([path, items]) => ({
      path,
      label: formatCategoryLabel(path),
      count: items.length,
      averageScore: items.reduce((sum, report) => sum + Number(report.overall_score || 0), 0) / items.length,
      latestDate: items.map(reportDate).sort().at(-1) ?? '',
    }))
    .sort((left, right) => right.count - left.count || left.label.localeCompare(right.label, 'en'));
});
const domainHighlights = computed<DomainHighlight[]>(() => {
  const buckets = new Map<string, Report[]>();

  for (const report of reports.value) {
    const path = topLevelCategory(report);
    const bucket = buckets.get(path) ?? [];
    bucket.push(report);
    buckets.set(path, bucket);
  }

  return [...buckets.entries()]
    .map(([path, items]) => ({
      path,
      label: formatCategoryLabel(path),
      count: items.length,
      report: items
        .slice()
        .sort((left, right) => Number(right.overall_score) - Number(left.overall_score)
          || reportTimestamp(right) - reportTimestamp(left)
          || left.title.localeCompare(right.title, 'en'))[0],
    }))
    .filter((item): item is DomainHighlight => Boolean(item.report))
    .sort((left, right) => left.label.localeCompare(right.label, 'en'));
});

function topLevelCategory(report: Report): string {
  return String(report.directory || report.category || 'uncategorized').split('/').filter(Boolean)[0] ?? 'uncategorized';
}

function formatCategoryLabel(path: string): string {
  return path
    .split('-')
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join(' ');
}

function selectReport(report: Report) {
  selectedSlug.value = report.slug;
}

function reportTimestamp(report: Report): number {
  const timestamp = Date.parse(reportDate(report));
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function categoryLink(path: string): string {
  return withBase(`/analysis/?category=${encodeURIComponent(path)}`);
}

function load() {
  void ensureReports().catch(() => undefined);
}

watch(latest, (items) => {
  if (!items.length) return;
  if (!items.some((report) => report.slug === selectedSlug.value)) selectedSlug.value = items[0].slug;
}, { immediate: true });

onMounted(load);
</script>

<template>
  <ReportDataState
    :loading="loading || !started"
    :error="error"
    :empty="started && !loading && !error && reports.length === 0"
    @retry="load"
  />

  <section v-if="reports.length > 0 && !error" class="raia-home raia-home-v2">
    <div class="raia-home-column">
      <div class="raia-home-radar-panel raia-panel">
        <div class="raia-panel-head">
          <h2>当前报告画像</h2>
          <span>{{ selectedReport?.directory || selectedReport?.category }}</span>
        </div>
        <div class="raia-home-lens-layout">
          <div class="raia-radar-card raia-home-radar-card">
            <DimensionsRadar :series="radarSeries" :title="selectedReport?.title ?? '维度评分'" />
          </div>
          <div v-if="selectedReport" class="raia-home-lens-summary">
            <div>
              <strong>{{ formatScore(selectedReport.overall_score) }}/5</strong>
              <span>综合评分 · 核验于 {{ reportDate(selectedReport) }}</span>
            </div>
            <dl>
              <div>
                <dt>优势</dt>
                <dd>{{ strengths.map((item) => `${item.label} ${formatScore(item.score)}`).join(' · ') }}</dd>
              </div>
              <div>
                <dt>短板</dt>
                <dd>{{ risks.map((item) => `${item.label} ${formatScore(item.score)}`).join(' · ') }}</dd>
              </div>
            </dl>
            <a class="raia-lens-cta" :href="reportLink(selectedReport)">阅读完整报告 →</a>
          </div>
        </div>
      </div>

      <section class="raia-panel raia-home-taxonomy-panel">
        <div class="raia-panel-head">
          <h2>分类地图</h2>
          <span>按顶层目录浏览</span>
        </div>
        <div class="raia-home-category-grid">
          <a
            v-for="category in categorySummaries"
            :key="category.path"
            class="raia-home-category-card"
            :href="categoryLink(category.path)"
          >
            <span>{{ category.label }}</span>
            <strong>{{ category.count }}</strong>
            <small>均分 {{ formatScore(category.averageScore) }} · 最近 {{ category.latestDate }}</small>
          </a>
        </div>
      </section>
    </div>

    <div class="raia-home-column">
      <aside class="raia-panel raia-home-latest-panel">
        <div class="raia-panel-head">
          <h2>最近更新</h2>
          <span>{{ latest.length }} reports</span>
        </div>
        <div class="raia-latest-list">
          <article
            v-for="report in latest"
            :key="report.slug"
            class="raia-latest-item raia-home-latest-item"
            :class="{ 'is-active': report.slug === selectedReport?.slug }"
          >
            <button
              type="button"
              :aria-pressed="report.slug === selectedReport?.slug"
              @click="selectReport(report)"
            >
              <div class="raia-score-row">
                <span class="raia-score">{{ formatScore(report.overall_score) }}/5</span>
                <span class="raia-chip">{{ reportDate(report) }}</span>
              </div>
              <small class="raia-path">{{ report.directory || report.category }}</small>
              <h3>{{ report.title }}</h3>
              <p>{{ excerpt(report) }}</p>
            </button>
            <a :href="reportLink(report)">打开报告 →</a>
          </article>
        </div>
      </aside>

      <section class="raia-panel raia-home-top-panel">
        <div class="raia-panel-head">
          <h2>领域代表</h2>
          <span>仅在各分类内部选取</span>
        </div>
        <div class="raia-home-picks">
          <a v-for="item in domainHighlights" :key="item.path" :href="reportLink(item.report)">
            <span>{{ item.label }}</span>
            <strong>{{ formatScore(item.report.overall_score) }}/5</strong>
            <small>{{ item.report.title }} · {{ item.count }} reports</small>
          </a>
        </div>
      </section>
    </div>
  </section>
</template>
