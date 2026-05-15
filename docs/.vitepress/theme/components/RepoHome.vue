<script setup lang="ts">
import { computed, onMounted } from 'vue';
import DimensionsRadar from './DimensionsRadar.vue';
import { useReports } from '../composables/useReports';
import { averageRatings, excerpt, formatScore, reportDate, reportLink, type Report } from './reportData';

const { reports, ensureReports } = useReports();
const latest = computed(() => reports.value
  .slice()
  .sort((a, b) => Date.parse(reportDate(b)) - Date.parse(reportDate(a)) || Number(b.overall_score) - Number(a.overall_score))
  .slice(0, 5));
const average = computed(() => averageRatings(reports.value));

onMounted(async () => {
  await ensureReports();
});
</script>

<template>
  <section class="raia-home">
    <div class="raia-hero">
      <div>
        <h1>Repo-AI-Analysis</h1>
        <p>结构化 GitHub repository intelligence：能力、质量、安全、成熟度、生态与推荐度。</p>
      </div>
      <div class="raia-radar-card">
        <DimensionsRadar :series="[{ ratings: average }]" title="DIMENSIONS" />
      </div>
    </div>

    <aside class="raia-panel">
      <div class="raia-panel-head">
        <h2>Latest</h2>
        <span>{{ reports.length }} analyses</span>
      </div>
      <div class="raia-latest-list">
        <a v-for="report in latest" :key="report.slug" class="raia-latest-item" :href="reportLink(report)">
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
