<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import DimensionsRadar from './DimensionsRadar.vue';
import { useReports } from '../composables/useReports';
import { averageRatings, excerpt, formatScore, reportDate, type Report } from './reportData';

const { reports, ensureReports } = useReports();
const selectedSlug = ref('');

const latest = computed(() => reports.value
  .slice()
  .sort((a, b) => Date.parse(reportDate(b)) - Date.parse(reportDate(a)) || Number(b.overall_score) - Number(a.overall_score))
  .slice(0, 5));
const average = computed(() => averageRatings(reports.value));
const selectedReport = computed(() => latest.value.find((report) => report.slug === selectedSlug.value) ?? latest.value[0]);
const radarSeries = computed(() => [{
  label: selectedReport.value?.title ?? 'Average',
  ratings: selectedReport.value?.ratings ?? average.value,
}]);

function selectReport(report: Report) {
  selectedSlug.value = report.slug;
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
  <section class="raia-home">
    <div class="raia-hero">
      <div class="raia-radar-card raia-home-radar-card">
        <DimensionsRadar :series="radarSeries" :title="selectedReport?.title ?? 'DIMENSIONS'" />
      </div>
    </div>

    <aside class="raia-panel">
      <div class="raia-panel-head">
        <h2>Latest</h2>
        <span>{{ reports.length }} analyses</span>
      </div>
      <div class="raia-latest-list">
        <a
          v-for="report in latest"
          :key="report.slug"
          class="raia-latest-item"
          :class="{ 'is-active': report.slug === selectedReport?.slug }"
          href="#"
          role="button"
          :aria-pressed="report.slug === selectedReport?.slug"
          @click.prevent="selectReport(report)"
        >
          <div class="raia-score-row">
            <span class="raia-score">{{ formatScore(report.overall_score) }}/5</span>
            <span class="raia-chip">{{ reportDate(report) || 'unknown date' }}</span>
            <span class="raia-chip">{{ report.directory || report.category }}</span>
          </div>
          <h3>{{ report.title }}</h3>
          <p>{{ excerpt(report) }}</p>
        </a>
      </div>
    </aside>
  </section>
</template>
