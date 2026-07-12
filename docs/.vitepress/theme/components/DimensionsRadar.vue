<script setup lang="ts">
import { computed, useId } from 'vue';
import { dimensionKeys, dimensionLabels } from './reportData';

const props = withDefaults(defineProps<{
  series: Array<{ label?: string; ratings: Record<string, number>; color?: string }>;
  title?: string;
}>(), {
  title: '维度评分',
});

const colors = ['#1677a8', '#1f9d7a', '#b54708', '#7c3aed', '#d97706'];
const cx = 160;
const cy = 160;
const maxRadius = 94;
const titleId = `radar-title-${useId().replace(/:/gu, '')}`;
const descriptionId = `radar-description-${useId().replace(/:/gu, '')}`;

function polarPoint(index: number, radius: number) {
  const angle = -Math.PI / 2 + (Math.PI * 2 * index) / dimensionKeys.length;
  return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius];
}

function pointString(points: number[][]) {
  return points.map(([x, y]) => `${x},${y}`).join(' ');
}

const gridPolygons = computed(() => [1, 2, 3, 4, 5].map((level) => {
  return pointString(dimensionKeys.map((_, index) => polarPoint(index, (level / 5) * maxRadius)));
}));
const axes = computed(() => dimensionKeys.map((_, index) => {
  const [x, y] = polarPoint(index, maxRadius);
  return { x, y };
}));
const labels = computed(() => dimensionKeys.map((key, index) => {
  const [x, y] = polarPoint(index, 122);
  return { key, text: dimensionLabels[key], x, y };
}));
const shapes = computed(() => props.series.map((item, index) => {
  const points = dimensionKeys.map((key, keyIndex) => {
    const value = Math.max(0, Math.min(5, Number(item.ratings?.[key]) || 0));
    return polarPoint(keyIndex, (value / 5) * maxRadius);
  });
  return {
    id: `${item.label || 'series'}-${index}`,
    label: item.label || `系列 ${index + 1}`,
    points: pointString(points),
    color: item.color || colors[index % colors.length],
  };
}));
const accessibleDescription = computed(() => props.series.map((item, index) => {
  const label = item.label || `系列 ${index + 1}`;
  const values = dimensionKeys.map((key) => `${dimensionLabels[key]} ${Number(item.ratings?.[key] ?? 0).toFixed(1)}/5`).join('，');
  return `${label}：${values}`;
}).join('。'));
</script>

<template>
  <figure class="raia-radar-figure">
    <svg class="raia-radar" viewBox="0 0 320 320" role="img" :aria-labelledby="`${titleId} ${descriptionId}`">
      <title :id="titleId">{{ title }}</title>
      <desc :id="descriptionId">{{ accessibleDescription }}</desc>
      <text x="160" y="18" class="raia-radar-label raia-radar-title">{{ title }}</text>
      <polygon v-for="points in gridPolygons" :key="points" class="raia-radar-grid" :points="points" />
      <line v-for="axis in axes" :key="`${axis.x}-${axis.y}`" class="raia-radar-axis" x1="160" y1="160" :x2="axis.x" :y2="axis.y" />
      <polygon
        v-for="shape in shapes"
        :key="shape.id"
        class="raia-radar-shape"
        :points="shape.points"
        :style="{ fill: `${shape.color}24`, stroke: shape.color }"
      />
      <text v-for="label in labels" :key="label.key" class="raia-radar-label" :x="label.x" :y="label.y">{{ label.text }}</text>
    </svg>
    <ul v-if="shapes.length > 1" class="raia-radar-legend" aria-label="图例">
      <li v-for="shape in shapes" :key="shape.id">
        <span :style="{ backgroundColor: shape.color }" aria-hidden="true"></span>{{ shape.label }}
      </li>
    </ul>
  </figure>
</template>
