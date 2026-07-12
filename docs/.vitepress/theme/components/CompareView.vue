<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import DimensionsRadar from './DimensionsRadar.vue';
import ReportDataState from './ReportDataState.vue';
import { useReports } from '../composables/useReports';
import { dimensionKeys, dimensionLabels, formatScore, type Report } from './reportData';

const MAX_SELECTED = 5;
const { reports, loading, started, error, ensureReports } = useReports();
const selected = ref<string[]>([]);
const expandedFolders = ref<Set<string>>(new Set());
const repositoryQuery = ref('');
const showSelectedOnly = ref(false);
const selectionMessage = ref('');
let hydratingUrl = true;

type CompareTreeItem =
  | {
    type: 'folder';
    path: string;
    label: string;
    depth: number;
    count: number;
    selectedCount: number;
    expanded: boolean;
  }
  | {
    type: 'report';
    report: Report;
    depth: number;
  };

const reportBySlug = computed(() => new Map(reports.value.map((report) => [report.slug, report])));
const selectedReports = computed(() => selected.value
  .map((slug) => reportBySlug.value.get(slug))
  .filter((report): report is Report => Boolean(report)));
const crossCategory = computed(() => new Set(selectedReports.value.map(reportDirectory)).size > 1);
const normalizedRepositoryQuery = computed(() => repositoryQuery.value.trim().normalize('NFKC').toLowerCase());

const compareTreeItems = computed<CompareTreeItem[]>(() => {
  const reportsByDirectory = new Map<string, Report[]>();
  const folderPaths = new Set<string>();
  const selectedSlugs = new Set(selected.value);

  for (const report of reports.value) {
    const directory = reportDirectory(report);
    const parts = directory.split('/').filter(Boolean);
    for (let index = 1; index <= parts.length; index += 1) folderPaths.add(parts.slice(0, index).join('/'));
    const bucket = reportsByDirectory.get(directory) ?? [];
    bucket.push(report);
    reportsByDirectory.set(directory, bucket);
  }

  const items: CompareTreeItem[] = [];
  for (const path of [...folderPaths].sort((left, right) => left.localeCompare(right, 'en'))) {
    if (!isFolderVisible(path)) continue;
    const parts = path.split('/').filter(Boolean);
    const descendantReports = reportsInFolder(path);
    const visibleDescendants = descendantReports.filter(matchesRepositoryFilter);
    if (visibleDescendants.length === 0) continue;

    const expanded = isFolderExpanded(path);
    items.push({
      type: 'folder',
      path,
      label: parts.at(-1) ?? path,
      depth: Math.max(0, parts.length - 1),
      count: descendantReports.length,
      selectedCount: descendantReports.filter((report) => selectedSlugs.has(report.slug)).length,
      expanded,
    });

    if (!expanded) continue;
    const directReports = (reportsByDirectory.get(path) ?? [])
      .filter(matchesRepositoryFilter)
      .sort((left, right) => left.title.localeCompare(right.title, 'en'));
    for (const report of directReports) items.push({ type: 'report', report, depth: parts.length });
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

function matchesRepositoryFilter(report: Report): boolean {
  if (showSelectedOnly.value && !selected.value.includes(report.slug)) return false;
  const needle = normalizedRepositoryQuery.value;
  if (!needle) return true;
  return `${report.title} ${reportDirectory(report)}`.normalize('NFKC').toLowerCase().includes(needle);
}

function isFolderExpanded(path: string): boolean {
  return expandedFolders.value.has(path);
}

function isFolderVisible(path: string): boolean {
  const parts = path.split('/').filter(Boolean);
  for (let index = 1; index < parts.length; index += 1) {
    if (!isFolderExpanded(parts.slice(0, index).join('/'))) return false;
  }
  return true;
}

function toggleFolderExpanded(path: string) {
  const next = new Set(expandedFolders.value);
  if (next.has(path)) next.delete(path);
  else next.add(path);
  expandedFolders.value = next;
}

function selectFolder(path: string) {
  selectionMessage.value = '';
  const folderSlugs = reportsInFolder(path).map((report) => report.slug);
  const folderSet = new Set(folderSlugs);
  const selectedSet = new Set(selected.value);
  const allSelected = folderSlugs.length > 0 && folderSlugs.every((slug) => selectedSet.has(slug));
  if (allSelected) {
    selected.value = selected.value.filter((slug) => !folderSet.has(slug));
    return;
  }

  const next = [...new Set([...selected.value, ...folderSlugs])];
  if (next.length > MAX_SELECTED) {
    selectionMessage.value = `该目录包含 ${folderSlugs.length} 个仓库；一次最多比较 ${MAX_SELECTED} 个，请展开后逐项选择。`;
    return;
  }
  selected.value = next;
}

function toggle(slug: string, checked: boolean) {
  selectionMessage.value = '';
  if (!checked) {
    selected.value = selected.value.filter((item) => item !== slug);
    return;
  }
  if (selected.value.includes(slug)) return;
  if (selected.value.length >= MAX_SELECTED) {
    selectionMessage.value = `一次最多比较 ${MAX_SELECTED} 个仓库。`;
    return;
  }
  selected.value = [...selected.value, slug];
}

function onToggle(slug: string, event: Event) {
  const checkbox = event.target as HTMLInputElement;
  toggle(slug, checkbox.checked);
  checkbox.checked = selected.value.includes(slug);
}

function removeSelected(slug: string) {
  selected.value = selected.value.filter((item) => item !== slug);
}

function clearSelected() {
  selected.value = [];
  selectionMessage.value = '';
}

function resetRepositoryFilter() {
  repositoryQuery.value = '';
  showSelectedOnly.value = false;
}

function folderStateLabel(item: Extract<CompareTreeItem, { type: 'folder' }>): string {
  if (item.selectedCount === 0) return '未选择';
  if (item.selectedCount === item.count) return '已全选';
  return `已选 ${item.selectedCount}/${item.count}`;
}

function expandSelectedAncestors() {
  const next = new Set(expandedFolders.value);
  for (const report of selectedReports.value) {
    const parts = reportDirectory(report).split('/').filter(Boolean);
    for (let index = 1; index <= parts.length; index += 1) next.add(parts.slice(0, index).join('/'));
  }
  expandedFolders.value = next;
}

function readUrlState() {
  if (typeof window === 'undefined') return;
  const requested = (new URL(window.location.href).searchParams.get('repos') ?? '').split(',').filter(Boolean);
  selected.value = [...new Set(requested)].filter((slug) => reportBySlug.value.has(slug)).slice(0, MAX_SELECTED);
  expandSelectedAncestors();
}

function syncUrlState() {
  if (typeof window === 'undefined' || hydratingUrl) return;
  const url = new URL(window.location.href);
  if (selected.value.length > 0) url.searchParams.set('repos', selected.value.join(','));
  else url.searchParams.delete('repos');
  window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
}

function load() {
  void ensureReports()
    .then(() => {
      if (hydratingUrl) {
        readUrlState();
        hydratingUrl = false;
      }
    })
    .catch(() => undefined);
}

function restoreUrlState() {
  if (reports.value.length === 0) return;
  hydratingUrl = true;
  readUrlState();
  hydratingUrl = false;
}

watch(selected, syncUrlState, { deep: true, flush: 'sync' });
onMounted(() => {
  window.addEventListener('popstate', restoreUrlState);
  load();
});
onUnmounted(() => window.removeEventListener('popstate', restoreUrlState));
</script>

<template>
  <ReportDataState
    :loading="loading || !started"
    :error="error"
    :empty="started && !loading && !error && reports.length === 0"
    @retry="load"
  />

  <template v-if="reports.length > 0 && !error">
    <section class="raia-compare">
      <aside class="raia-panel raia-compare-selector">
        <div class="raia-panel-head">
          <h2>选择仓库</h2>
          <span aria-live="polite">{{ selectedReports.length }}/{{ MAX_SELECTED }} selected</span>
        </div>

        <div v-if="selectedReports.length" class="raia-selected-list" aria-label="已选仓库">
          <button v-for="report in selectedReports" :key="report.slug" type="button" @click="removeSelected(report.slug)">
            {{ report.title }} <span aria-hidden="true">×</span><span class="raia-sr-only">从比较中移除</span>
          </button>
          <button type="button" class="is-clear" @click="clearSelected">清空</button>
        </div>

        <div class="raia-compare-filter">
          <input v-model="repositoryQuery" type="search" aria-label="搜索可比较的仓库" placeholder="搜索仓库或目录">
          <label><input v-model="showSelectedOnly" type="checkbox"> 仅看已选</label>
        </div>

        <p v-if="selectionMessage" class="raia-inline-alert" role="alert">{{ selectionMessage }}</p>

        <div class="raia-compare-options">
          <template v-for="item in compareTreeItems" :key="item.type === 'folder' ? item.path : item.report.slug">
            <div
              v-if="item.type === 'folder'"
              class="raia-compare-folder"
              :class="{ 'is-selected': item.selectedCount === item.count && item.count > 0 }"
              :style="{ '--raia-tree-indent': `${item.depth * 18}px` }"
            >
              <button
                type="button"
                class="raia-compare-folder-toggle"
                :class="{ 'is-expanded': item.expanded }"
                :aria-expanded="item.expanded"
                :aria-label="`${item.expanded ? '收起' : '展开'} ${item.path}`"
                @click="toggleFolderExpanded(item.path)"
              >
                ▸
              </button>
              <button
                type="button"
                class="raia-compare-folder-select"
                :aria-pressed="item.selectedCount === item.count && item.count > 0"
                :aria-label="`选择目录 ${item.path} 下的全部仓库`"
                @click="selectFolder(item.path)"
              >
                <span class="raia-compare-folder-name">{{ item.label }}</span>
                <small>{{ item.count }} repos · {{ folderStateLabel(item) }}</small>
              </button>
            </div>
            <label
              v-else
              class="raia-compare-option"
              :style="{ '--raia-tree-indent': `${item.depth * 18}px` }"
            >
              <input
                type="checkbox"
                :checked="selected.includes(item.report.slug)"
                :disabled="!selected.includes(item.report.slug) && selected.length >= MAX_SELECTED"
                @change="onToggle(item.report.slug, $event)"
              >
              <span>{{ item.report.title }}</span>
              <small>{{ formatScore(item.report.overall_score) }}</small>
            </label>
          </template>
        </div>
        <div v-if="compareTreeItems.length === 0" class="raia-data-state raia-compare-list-empty" role="status">
          <span>{{ showSelectedOnly && selected.length === 0 ? '尚未选择任何仓库。' : '没有匹配当前关键词的仓库。' }}</span>
          <button type="button" class="raia-button-ghost" @click="resetRepositoryFilter">重置仓库列表</button>
        </div>
      </aside>

      <div class="raia-panel raia-compare-stage">
        <div v-if="selectedReports.length === 0" class="raia-data-state raia-compare-empty" role="status">
          <strong>请选择 2–5 个同类仓库进行比较。</strong>
          <span>选择会写入 URL；刷新或分享链接后仍可恢复。跨目录比较允许，但评分口径可能不完全同构。</span>
        </div>
        <template v-else>
          <p v-if="selectedReports.length === 1" class="raia-inline-note">再选择至少一个仓库即可形成比较。</p>
          <p v-if="crossCategory" class="raia-inline-alert" role="note">当前包含不同末级目录的仓库；请把结果视为探索性对照，而非严格排名。</p>
          <div class="raia-radar-card">
            <DimensionsRadar
              :series="selectedReports.map((report) => ({ label: report.title, ratings: report.ratings }))"
              title="仓库维度比较"
            />
          </div>
        </template>
      </div>
    </section>

    <div v-if="selectedReports.length > 0" class="raia-compare-table">
      <table>
        <caption class="raia-sr-only">所选仓库的综合评分与各维度评分</caption>
        <thead>
          <tr>
            <th scope="col">维度</th>
            <th v-for="report in selectedReports" :key="report.slug" scope="col">{{ report.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">综合评分</th>
            <td v-for="report in selectedReports" :key="report.slug">{{ formatScore(report.overall_score) }}</td>
          </tr>
          <tr v-for="key in dimensionKeys" :key="key">
            <th scope="row">{{ dimensionLabels[key] }}</th>
            <td v-for="report in selectedReports" :key="report.slug">{{ formatScore(report.ratings?.[key]) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
</template>
