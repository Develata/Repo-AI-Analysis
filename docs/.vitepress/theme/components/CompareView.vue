<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import DimensionsRadar from './DimensionsRadar.vue';
import { useReports } from '../composables/useReports';
import { dimensionKeys, dimensionLabels, formatScore, type Report } from './reportData';

const { reports, ensureReports } = useReports();
const selected = ref<string[]>([]);

const selectedReports = computed(() => selected.value
  .map((slug) => reports.value.find((report) => report.slug === slug))
  .filter((report): report is Report => Boolean(report)));

function toggle(slug: string, checked: boolean) {
  if (checked) {
    if (selected.value.length >= 5) return;
    selected.value = [...selected.value, slug];
  } else {
    selected.value = selected.value.filter((item) => item !== slug);
  }
}

function onToggle(slug: string, event: Event) {
  toggle(slug, (event.target as HTMLInputElement).checked);
}

onMounted(async () => {
  await ensureReports();
  selected.value = reports.value
    .slice()
    .sort((a, b) => Number(b.overall_score) - Number(a.overall_score))
    .slice(0, 3)
    .map((report) => report.slug);
});
</script>

<template>
  <section class="raia-compare">
    <div class="raia-panel raia-compare-stage">
      <div class="raia-radar-card">
        <DimensionsRadar
          :series="selectedReports.map((report) => ({ label: report.title, ratings: report.ratings }))"
          title="COMPARE"
        />
      </div>
    </div>

    <aside class="raia-panel">
      <div class="raia-panel-head">
        <h2>Repositories</h2>
        <span>{{ selectedReports.length }} selected</span>
      </div>
      <div class="raia-compare-options">
        <label v-for="report in reports" :key="report.slug" class="raia-compare-option">
          <input
            type="checkbox"
            :checked="selected.includes(report.slug)"
            :disabled="!selected.includes(report.slug) && selected.length >= 5"
            @change="onToggle(report.slug, $event)"
          >
          <span>{{ report.title }}</span>
          <small>{{ formatScore(report.overall_score) }}</small>
        </label>
      </div>
    </aside>
  </section>

  <div class="raia-compare-table">
    <table>
      <thead>
        <tr>
          <th>Dimension</th>
          <th v-for="report in selectedReports" :key="report.slug">{{ report.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Overall</td>
          <td v-for="report in selectedReports" :key="report.slug">{{ formatScore(report.overall_score) }}</td>
        </tr>
        <tr v-for="key in dimensionKeys" :key="key">
          <td>{{ dimensionLabels[key] }}</td>
          <td v-for="report in selectedReports" :key="report.slug">{{ formatScore(report.ratings?.[key]) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
