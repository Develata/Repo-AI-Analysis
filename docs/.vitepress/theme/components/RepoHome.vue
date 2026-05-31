<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { withBase } from 'vitepress';
import DimensionsRadar from './DimensionsRadar.vue';
import { useReports } from '../composables/useReports';
import { averageRatings, excerpt, formatScore, reportDate, reportLink, type Report } from './reportData';

const { reports, ensureReports } = useReports();
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
const averageScore = computed(() => {
  if (!reports.value.length) return 0;
  return reports.value.reduce((sum, report) => sum + Number(report.overall_score || 0), 0) / reports.value.length;
});
const selectedReport = computed(() => latest.value.find((report) => report.slug === selectedSlug.value) ?? latest.value[0]);
const radarSeries = computed(() => [{
  label: selectedReport.value?.title ?? 'Average',
  ratings: selectedReport.value?.ratings ?? average.value,
}]);
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

watch(latest, (items) => {
  if (!items.length) return;
  if (!items.some((report) => report.slug === selectedSlug.value)) {
    selectedSlug.value = items[0].slug;
  }
}, { immediate: true });

onMounted(async () => {
  await ensureReports();
});
</script>

<template>
  <section class="raia-home raia-home-v2">
    <div class="raia-home-hero raia-panel">
      <div class="raia-home-hero-copy">
        <div class="raia-home-kicker">REPO INTELLIGENCE / CURATED ANALYSIS</div>
        <h1>Repository maps for tools worth remembering.</h1>
        <p>
          面向 AI agents、coding tools、文档系统与数学工具的结构化仓库分析：不只看 star，
          更看能力边界、工程质量、生态成熟度与是否值得进入长期工具箱。
        </p>
        <div class="raia-home-actions">
          <a class="raia-button-primary" :href="withBase('/analysis/')">Browse Analysis</a>
          <a class="raia-button-ghost" :href="withBase('/compare/')">Compare Repos</a>
        </div>
      </div>

      <div class="raia-home-stats" aria-label="Repository analysis statistics">
        <div class="raia-home-stat">
          <strong>{{ reports.length }}</strong>
          <span>analyses</span>
        </div>
        <div class="raia-home-stat">
          <strong>{{ formatScore(averageScore) }}</strong>
          <span>avg score</span>
        </div>
        <div class="raia-home-stat">
          <strong>{{ categorySummaries.length }}</strong>
          <span>domains</span>
        </div>
      </div>
    </div>

    <div class="raia-home-radar-panel raia-panel">
      <div class="raia-panel-head">
        <h2>Current lens</h2>
        <span>{{ selectedReport?.directory || selectedReport?.category || 'average' }}</span>
      </div>
      <div class="raia-radar-card raia-home-radar-card">
        <DimensionsRadar :series="radarSeries" :title="selectedReport?.title ?? 'DIMENSIONS'" />
      </div>
    </div>

    <aside class="raia-panel raia-home-latest-panel">
      <div class="raia-panel-head">
        <h2>Latest reports</h2>
        <span>{{ latest.length }} recent</span>
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
              <span class="raia-chip">{{ reportDate(report) || 'unknown date' }}</span>
              <span class="raia-chip">{{ report.directory || report.category }}</span>
            </div>
            <h3>{{ report.title }}</h3>
            <p>{{ excerpt(report) }}</p>
          </button>
          <a :href="reportLink(report)">Open report →</a>
        </article>
      </div>
    </aside>

    <section class="raia-panel raia-home-taxonomy-panel">
      <div class="raia-panel-head">
        <h2>Taxonomy map</h2>
        <span>top-level folders</span>
      </div>
      <div class="raia-home-category-grid">
        <a
          v-for="category in categorySummaries"
          :key="category.path"
          class="raia-home-category-card"
          :href="withBase('/analysis/')"
        >
          <span>{{ category.label }}</span>
          <strong>{{ category.count }}</strong>
          <small>avg {{ formatScore(category.averageScore) }} · latest {{ category.latestDate || 'unknown' }}</small>
        </a>
      </div>
    </section>

    <section class="raia-panel raia-home-top-panel">
      <div class="raia-panel-head">
        <h2>Domain representatives</h2>
        <span>best within each folder</span>
      </div>
      <div class="raia-home-picks">
        <a v-for="item in domainHighlights" :key="item.path" :href="reportLink(item.report)">
          <span>{{ item.label }}</span>
          <strong>{{ formatScore(item.report.overall_score) }}/5</strong>
          <small>{{ item.report.title }} · {{ item.count }} reports</small>
        </a>
      </div>
    </section>
  </section>
</template>
