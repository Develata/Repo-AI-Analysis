<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import DimensionsRadar from './DimensionsRadar.vue';
import { useReports } from '../composables/useReports';
import { dimensionKeys, dimensionLabels, formatScore, type Report } from './reportData';

const { reports, ensureReports } = useReports();
const selected = ref<string[]>([]);

type CompareTreeItem =
  | {
    type: 'folder';
    path: string;
    label: string;
    depth: number;
    count: number;
    selectedCount: number;
  }
  | {
    type: 'report';
    report: Report;
    depth: number;
  };

const selectedReports = computed(() => selected.value
  .map((slug) => reports.value.find((report) => report.slug === slug))
  .filter((report): report is Report => Boolean(report)));

const compareTreeItems = computed<CompareTreeItem[]>(() => {
  const reportsByDirectory = new Map<string, Report[]>();
  const folderPaths = new Set<string>();
  const selectedSlugs = new Set(selected.value);

  for (const report of reports.value) {
    const directory = reportDirectory(report);
    const parts = directory.split('/').filter(Boolean);

    for (let index = 1; index <= parts.length; index += 1) {
      folderPaths.add(parts.slice(0, index).join('/'));
    }

    const bucket = reportsByDirectory.get(directory) ?? [];
    bucket.push(report);
    reportsByDirectory.set(directory, bucket);
  }

  const items: CompareTreeItem[] = [];
  for (const path of [...folderPaths].sort((left, right) => left.localeCompare(right, 'en'))) {
    const parts = path.split('/').filter(Boolean);
    const descendantReports = reportsInFolder(path);
    items.push({
      type: 'folder',
      path,
      label: parts[parts.length - 1] ?? path,
      depth: Math.max(0, parts.length - 1),
      count: descendantReports.length,
      selectedCount: descendantReports.filter((report) => selectedSlugs.has(report.slug)).length,
    });

    const directReports = (reportsByDirectory.get(path) ?? [])
      .slice()
      .sort((left, right) => left.title.localeCompare(right.title, 'en'));
    for (const report of directReports) {
      items.push({ type: 'report', report, depth: parts.length });
    }
  }

  return items;
});

function reportDirectory(report: Report): string {
  return String(report.directory || report.category || 'uncategorized');
}

function reportsInFolder(path: string): Report[] {
  return reports.value.filter((report) => {
    const directory = reportDirectory(report);
    return directory === path || directory.startsWith(`${path}/`);
  });
}

function sameSlugSet(left: string[], right: string[]): boolean {
  if (left.length !== right.length) return false;
  if (new Set(left).size !== left.length) return false;
  const rightSet = new Set(right);
  return left.every((slug) => rightSet.has(slug));
}

function selectFolder(path: string) {
  const folderSlugs = reportsInFolder(path).map((report) => report.slug);
  selected.value = sameSlugSet(selected.value, folderSlugs) ? [] : folderSlugs;
}

function toggle(slug: string, checked: boolean) {
  if (checked) {
    selected.value = selected.value.includes(slug) ? selected.value : [...selected.value, slug];
  } else {
    selected.value = selected.value.filter((item) => item !== slug);
  }
}

function onToggle(slug: string, event: Event) {
  toggle(slug, (event.target as HTMLInputElement).checked);
}

function folderStateLabel(item: Extract<CompareTreeItem, { type: 'folder' }>): string {
  if (item.selectedCount === 0) return 'none selected';
  if (item.selectedCount === item.count) return 'all selected';
  return `${item.selectedCount}/${item.count} selected`;
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
        <template v-for="item in compareTreeItems" :key="item.type === 'folder' ? item.path : item.report.slug">
          <button
            v-if="item.type === 'folder'"
            type="button"
            class="raia-compare-folder"
            :class="{ 'is-selected': item.selectedCount === item.count && item.count > 0 }"
            :style="{ '--raia-tree-indent': `${item.depth * 18}px` }"
            :aria-pressed="item.selectedCount === item.count"
            :aria-label="`Select all repositories in ${item.path}`"
            @click="selectFolder(item.path)"
          >
            <span class="raia-compare-folder-name">{{ item.label }}</span>
            <small>{{ item.count }} repos · {{ folderStateLabel(item) }}</small>
          </button>
          <label
            v-else
            class="raia-compare-option"
            :style="{ '--raia-tree-indent': `${item.depth * 18}px` }"
          >
            <input
              type="checkbox"
              :checked="selected.includes(item.report.slug)"
              @change="onToggle(item.report.slug, $event)"
            >
            <span>{{ item.report.title }}</span>
            <small>{{ formatScore(item.report.overall_score) }}</small>
          </label>
        </template>
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
