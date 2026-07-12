<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import DimensionsRadar from './DimensionsRadar.vue';
import { formatScore } from './reportData';

const { frontmatter } = useData();
const isRepositoryAnalysis = computed(() => frontmatter.value.type === 'repository-analysis');
const ratings = computed(() => frontmatter.value.ratings ?? {});
const checkedDate = computed(() => normalizeDate(frontmatter.value.last_checked || frontmatter.value.updated));
const updatedDate = computed(() => normalizeDate(frontmatter.value.updated));
const exceptionalStatus = computed(() => {
  const status = String(frontmatter.value.status || '').trim();
  return status && status !== 'active' ? status : '';
});
const stars = computed(() => {
  const value = Number(frontmatter.value.stars);
  return Number.isFinite(value) ? value.toLocaleString('en') : '';
});

function normalizeDate(value: unknown): string {
  if (!value) return '';
  const date = new Date(String(value));
  return Number.isNaN(date.getTime()) ? String(value) : date.toISOString().slice(0, 10);
}
</script>

<template>
  <section v-if="isRepositoryAnalysis" class="raia-report-header">
    <div class="raia-report-summary">
      <div class="raia-report-title-row">
        <h1 class="raia-report-title">{{ frontmatter.title }}</h1>
        <span v-if="exceptionalStatus" class="raia-status-badge">{{ exceptionalStatus }}</span>
      </div>

      <div class="raia-score-deck">
        <div class="raia-score-tile">
          <strong>{{ formatScore(frontmatter.overall_score) }}/5</strong>
          <span>综合评分</span>
        </div>
        <div class="raia-score-tile">
          <strong>{{ formatScore(ratings.recommendation) }}/5</strong>
          <span>推荐度</span>
        </div>
      </div>

      <div class="raia-report-facts" aria-label="报告元信息">
        <a v-if="frontmatter.repo_url" :href="frontmatter.repo_url" target="_blank" rel="noreferrer">GitHub ↗</a>
        <span v-if="frontmatter.category">{{ frontmatter.category }}</span>
        <span v-if="frontmatter.primary_language">{{ frontmatter.primary_language }}</span>
        <span v-if="frontmatter.license">{{ frontmatter.license }}</span>
        <span v-if="stars">★ {{ stars }}</span>
        <span v-if="checkedDate">核验 {{ checkedDate }}</span>
        <span v-if="updatedDate && updatedDate !== checkedDate">报告更新 {{ updatedDate }}</span>
      </div>

      <p v-if="frontmatter.evidence" class="raia-report-evidence">证据等级：{{ frontmatter.evidence }}</p>
      <a class="raia-liquid-cta raia-report-read-cta" href="#一句话总结">开始阅读</a>
    </div>

    <div class="raia-radar-card raia-report-radar-card">
      <DimensionsRadar :series="[{ label: frontmatter.title, ratings }]" title="维度评分" />
    </div>
  </section>
</template>
