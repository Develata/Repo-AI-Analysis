<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import DimensionsRadar from './DimensionsRadar.vue';
import { formatScore } from './reportData';

const { frontmatter } = useData();
const isRepositoryAnalysis = computed(() => frontmatter.value.type === 'repository-analysis');
const ratings = computed(() => frontmatter.value.ratings ?? {});
const checkedDate = computed(() => {
  const value = frontmatter.value.last_checked || frontmatter.value.updated;
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? String(value) : date.toISOString().slice(0, 10);
});
</script>

<template>
  <section v-if="isRepositoryAnalysis" class="raia-report-header">
    <h1 class="raia-report-title">{{ frontmatter.title }}</h1>
    <div class="raia-score-deck">
      <div class="raia-score-tile">
        <strong>{{ formatScore(frontmatter.overall_score) }}/5</strong>
        <span>Overall Score</span>
      </div>
      <div class="raia-score-tile">
        <strong>{{ formatScore(ratings.recommendation) }}/5</strong>
        <span>Recommendation</span>
      </div>
      <div class="raia-score-tile">
        <strong>{{ frontmatter.status || 'unknown' }}</strong>
        <span>Status</span>
      </div>
    </div>
    <div class="raia-radar-card">
      <DimensionsRadar :series="[{ ratings }]" title="DIMENSIONS" />
    </div>
    <div class="raia-card-meta" style="margin-top: 14px">
      <a v-if="frontmatter.repo_url" class="raia-chip" :href="frontmatter.repo_url" target="_blank" rel="noreferrer">GitHub</a>
      <span v-if="frontmatter.category" class="raia-chip">{{ frontmatter.category }}</span>
      <span v-if="frontmatter.primary_language" class="raia-chip">{{ frontmatter.primary_language }}</span>
      <span v-if="checkedDate" class="raia-chip">Checked {{ checkedDate }}</span>
    </div>
  </section>
</template>
