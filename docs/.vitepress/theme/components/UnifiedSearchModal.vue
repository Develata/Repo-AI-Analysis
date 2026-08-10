<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRouter, withBase } from 'vitepress';
import {
  loadPagefind,
  sitePageKey,
  type PagefindResultData,
} from '../search/pagefindClient';
import {
  loadQuickSearchIndex,
  searchQuickIndex,
  type PreparedQuickSearchItem,
  type QuickSearchHit,
} from '../search/quickSearch';
import modalStyles from '../styles/unified-search.css?inline';

const MODAL_STYLE_ID = 'raia-unified-search-styles';
if (typeof document !== 'undefined' && !document.getElementById(MODAL_STYLE_ID)) {
  const style = document.createElement('style');
  style.id = MODAL_STYLE_ID;
  style.textContent = modalStyles;
  document.head.append(style);
}

const emit = defineEmits<{ close: [] }>();
const router = useRouter();
const suggestions = ['Agent memory', 'Rust', '形式化验证', '安全'];
const dialog = ref<HTMLDialogElement>();
const input = ref<HTMLInputElement>();
const query = ref('');
const quickItems = ref<PreparedQuickSearchItem[]>([]);
const quickState = ref<'loading' | 'ready' | 'error'>('loading');
const fullState = ref<'idle' | 'waiting' | 'searching' | 'ready' | 'error'>('idle');
const fullHits = ref<UnifiedResult[]>([]);
const fullCount = ref(0);
const selectedIndex = ref(0);
let searchRun = 0;

type UnifiedResult = {
  href: string;
  pageKey: string;
  title: string;
  context: string;
  excerpt: string;
  source: '仓库' | '正文' | '仓库 · 正文';
};

const quickHits = computed(() => searchQuickIndex(quickItems.value, query.value));
const results = computed<UnifiedResult[]>(() => {
  const merged: UnifiedResult[] = quickHits.value.map(toUnifiedQuickHit);
  const quickByPage = new Map(merged.map((item, index) => [item.pageKey, index]));
  for (const hit of fullHits.value) {
    const existingIndex = quickByPage.get(hit.pageKey);
    if (existingIndex === undefined) {
      merged.push(hit);
    } else {
      const quick = merged[existingIndex];
      merged[existingIndex] = {
        ...quick,
        href: hit.href,
        context: hit.context || quick.context,
        excerpt: hit.excerpt || quick.excerpt,
        source: '仓库 · 正文',
      };
    }
  }
  return merged.slice(0, 14);
});
const hasQuery = computed(() => Boolean(query.value.trim()));
const fullBusy = computed(() => ['waiting', 'searching'].includes(fullState.value));
const noResults = computed(() => hasQuery.value
  && quickState.value !== 'loading'
  && !fullBusy.value
  && results.value.length === 0);
const resultSummary = computed(() => {
  if (!hasQuery.value) return '';
  const quickCount = quickHits.value.length;
  if (fullState.value === 'ready') return `仓库匹配 ${quickCount} · 正文匹配 ${fullCount.value}`;
  return `仓库匹配 ${quickCount}`;
});

function toUnifiedQuickHit(hit: QuickSearchHit): UnifiedResult {
  return hit;
}

function safeSiteHref(rawHref: string): string | null {
  try {
    const url = new URL(rawHref, window.location.origin);
    if (url.origin !== window.location.origin || url.pathname.startsWith('/file:')) return null;
    const base = withBase('/');
    const cleanPath = url.pathname.replace(/\/index\.html$/u, '/').replace(/\.html$/u, '');
    const pathname = cleanPath.startsWith(base) ? cleanPath : withBase(cleanPath);
    return `${pathname}${url.search}${url.hash}`;
  } catch {
    return null;
  }
}

function pagefindHit(data: PagefindResultData): UnifiedResult | null {
  const section = data.sub_results?.[0];
  const href = safeSiteHref(section?.url || data.url || '');
  if (!href) return null;
  const title = data.meta?.title || section?.title || href;
  const sectionTitle = section?.title?.replace(/\s*​\s*/gu, ' ').trim() ?? '';
  return {
    href,
    pageKey: sitePageKey(href),
    title,
    context: sectionTitle && sectionTitle !== title ? sectionTitle : '全文正文',
    excerpt: section?.plain_excerpt || data.plain_excerpt || '',
    source: '正文',
  };
}

async function runFullText(rawQuery: string, run: number) {
  fullState.value = 'searching';
  try {
    const pagefind = await loadPagefind();
    const response = await pagefind.search(rawQuery);
    const data = await Promise.all(response.results.slice(0, 10).map((result) => result.data()));
    if (run !== searchRun) return;
    fullCount.value = response.results.length;
    fullHits.value = data.map(pagefindHit).filter((item): item is UnifiedResult => Boolean(item));
    fullState.value = 'ready';
  } catch {
    if (run !== searchRun) return;
    fullHits.value = [];
    fullCount.value = 0;
    fullState.value = 'error';
  }
}

function close() {
  if (dialog.value?.open) dialog.value.close();
  emit('close');
}

function chooseSuggestion(value: string) {
  query.value = value;
  void nextTick(() => input.value?.focus());
}

function moveSelection(delta: number) {
  if (!results.value.length) return;
  selectedIndex.value = (selectedIndex.value + delta + results.value.length) % results.value.length;
  void nextTick(() => document.getElementById(`raia-search-result-${selectedIndex.value}`)?.scrollIntoView({ block: 'nearest' }));
}

async function navigateTo(href: string) {
  close();
  await router.go(href);
}

function openSelected() {
  const selected = results.value[selectedIndex.value];
  if (selected) void navigateTo(selected.href);
}

function selectResult(event: MouseEvent, href: string) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  void navigateTo(href);
}

watch(results, () => {
  selectedIndex.value = 0;
});

watch(query, (value, _oldValue, onCleanup) => {
  searchRun += 1;
  const run = searchRun;
  fullHits.value = [];
  fullCount.value = 0;
  const normalized = value.trim();
  if (!normalized) {
    fullState.value = 'idle';
    return;
  }
  if (!import.meta.env.PROD) {
    fullState.value = 'error';
    return;
  }
  fullState.value = 'waiting';
  const timer = window.setTimeout(() => void runFullText(normalized, run), 160);
  onCleanup(() => window.clearTimeout(timer));
});

onMounted(() => {
  if (typeof dialog.value?.showModal === 'function') dialog.value.showModal();
  else dialog.value?.setAttribute('open', '');
  void nextTick(() => input.value?.focus());

  void loadQuickSearchIndex()
    .then((items) => {
      quickItems.value = items;
      quickState.value = 'ready';
    })
    .catch(() => {
      quickState.value = 'error';
    });
});

onBeforeUnmount(() => {
  searchRun += 1;
  if (dialog.value?.open) dialog.value.close();
});
</script>

<template>
  <Teleport to="body">
    <dialog ref="dialog" class="raia-search-dialog" aria-labelledby="raia-search-title" @cancel.prevent="close" @click.self="close">
      <section class="raia-search-shell">
        <header class="raia-search-bar">
          <span class="raia-modal-search-icon" aria-hidden="true" />
          <label id="raia-search-title" class="visually-hidden" for="raia-search-input">搜索仓库与全文</label>
          <input
            id="raia-search-input"
            ref="input"
            v-model="query"
            type="search"
            role="combobox"
            aria-controls="raia-search-results"
            aria-autocomplete="list"
            :aria-expanded="results.length > 0"
            :aria-activedescendant="results.length ? `raia-search-result-${selectedIndex}` : undefined"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            placeholder="搜索仓库或全文…"
            @keydown.down.prevent="moveSelection(1)"
            @keydown.up.prevent="moveSelection(-1)"
            @keydown.enter.prevent="openSelected"
            @keydown.esc.prevent="close"
          >
          <button class="raia-search-close" type="button" aria-label="关闭搜索" @click="close">
            <span class="raia-close-desktop">Esc</span>
            <span class="raia-close-mobile">关闭</span>
          </button>
        </header>

        <div v-if="!hasQuery" class="raia-search-start">
          <p>轻量索引即时匹配仓库；全文分片按需加载。</p>
          <strong>试试这些关键词</strong>
          <div class="raia-search-suggestions" aria-label="搜索建议">
            <button v-for="suggestion in suggestions" :key="suggestion" type="button" @click="chooseSuggestion(suggestion)">
              {{ suggestion }}
            </button>
          </div>
        </div>

        <div v-else class="raia-search-meta" role="status" aria-live="polite">
          <span>{{ resultSummary }}</span>
          <span v-if="quickState === 'loading'">正在读取快速索引…</span>
          <span v-else-if="quickState === 'error'" class="is-warning">快速索引暂不可用。</span>
          <span v-if="fullBusy">正在检索正文…</span>
          <span v-else-if="fullState === 'error'" class="is-warning">全文索引暂不可用，快速搜索仍可使用。</span>
        </div>

        <ul id="raia-search-results" class="raia-search-results" role="listbox">
          <li v-for="(result, index) in results" :key="`${result.source}:${result.href}`" role="presentation">
            <a
              :id="`raia-search-result-${index}`"
              :href="result.href"
              class="raia-search-result"
              :class="{ 'is-selected': selectedIndex === index }"
              role="option"
              :aria-selected="selectedIndex === index"
              @mouseenter="selectedIndex = index"
              @focus="selectedIndex = index"
              @click="selectResult($event, result.href)"
            >
              <span class="raia-result-source">{{ result.source }}</span>
              <span class="raia-result-copy">
                <strong>{{ result.title }}</strong>
                <small>{{ result.context }}</small>
                <span>{{ result.excerpt }}</span>
              </span>
              <span class="raia-result-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>

        <div v-if="noResults" class="raia-search-empty" role="status">
          没有找到“{{ query.trim() }}”。可以尝试仓库名、技术名词或更短的关键词。
        </div>

        <footer class="raia-search-footer" aria-hidden="true">
          <span><kbd>↑</kbd><kbd>↓</kbd> 导航</span>
          <span><kbd>Enter</kbd> 打开</span>
          <span><kbd>Esc</kbd> 关闭</span>
        </footer>
      </section>
    </dialog>
  </Teleport>
</template>
