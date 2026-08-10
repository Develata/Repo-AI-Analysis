<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { withBase } from 'vitepress';
import { data as homeData, type HomeReport } from '../../data/home.data';
import DimensionsRadar from './DimensionsRadar.vue';
import {
  dimensionKeys,
  dimensionLabels,
  excerpt,
  formatScore,
  reportDate,
  reportLink,
} from './reportData';

const selectedSlug = ref('');
const latestPage = ref(1);

const latestPageCount = computed(() => Math.ceil(homeData.latest.length / homeData.page_size));
const latestPages = computed(() => Array.from({ length: latestPageCount.value }, (_, index) => index + 1));
const latest = computed(() => {
  const start = (latestPage.value - 1) * homeData.page_size;
  return homeData.latest.slice(start, start + homeData.page_size);
});
const selectedReport = computed(() => latest.value.find((report) => report.slug === selectedSlug.value) ?? latest.value[0]);
const radarSeries = computed(() => [{
  label: selectedReport.value?.title ?? '平均值',
  ratings: selectedReport.value?.ratings ?? {},
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
const categorySummaries = homeData.categories;

function selectReport(report: HomeReport) {
  selectedSlug.value = report.slug;
}

function setLatestPage(page: number) {
  latestPage.value = Math.min(Math.max(1, page), latestPageCount.value || 1);
}

function categoryLink(path: string): string {
  return withBase(`/analysis/?category=${encodeURIComponent(path)}`);
}

watch(latestPageCount, (count) => {
  if (latestPage.value > count) latestPage.value = Math.max(1, count);
});

watch(latest, (items) => {
  if (!items.length) return;
  if (!items.some((report) => report.slug === selectedSlug.value)) selectedSlug.value = items[0].slug;
}, { immediate: true });
</script>

<template>
  <section v-if="homeData.count > 0" class="raia-home raia-home-v2">
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
          <a class="raia-liquid-cta raia-lens-cta" :href="reportLink(selectedReport)">阅读完整报告 →</a>
        </div>
      </div>
    </div>

    <aside class="raia-panel raia-home-latest-panel">
      <div class="raia-panel-head">
        <h2>最近更新</h2>
        <span>{{ latest.length }} / {{ homeData.latest.length }} reports</span>
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
      <nav
        v-if="latestPageCount > 1"
        class="raia-latest-pagination"
        :aria-label="`最近更新，共 ${latestPageCount} 页`"
      >
        <button
          type="button"
          aria-label="上一页"
          :disabled="latestPage === 1"
          @click="setLatestPage(latestPage - 1)"
        >
          ‹
        </button>
        <button
          v-for="page in latestPages"
          :key="page"
          type="button"
          :aria-label="`第 ${page} 页`"
          :aria-current="page === latestPage ? 'page' : undefined"
          @click="setLatestPage(page)"
        >
          {{ page }}
        </button>
        <button
          type="button"
          aria-label="下一页"
          :disabled="latestPage === latestPageCount"
          @click="setLatestPage(latestPage + 1)"
        >
          ›
        </button>
      </nav>
    </aside>

    <section class="raia-panel raia-home-taxonomy-panel">
      <div class="raia-panel-head">
        <h2>分类地图</h2>
        <span>按顶层目录浏览 · 附各分类代表作</span>
      </div>
      <div class="raia-home-category-grid">
        <article v-for="category in categorySummaries" :key="category.path" class="raia-home-category-card">
          <a class="raia-category-main" :href="categoryLink(category.path)">
            <span>{{ category.label }}</span>
            <strong>{{ category.count }}</strong>
            <small>均分 {{ formatScore(category.averageScore) }} · 最近 {{ category.latestDate }}</small>
          </a>
          <a class="raia-category-top" :href="reportLink(category.top)">
            {{ category.top.title }} · {{ formatScore(category.top.overall_score) }}/5
          </a>
        </article>
      </div>
    </section>
  </section>
  <div v-else class="raia-data-state" role="status">
    <strong>暂无报告。</strong>
  </div>
</template>
