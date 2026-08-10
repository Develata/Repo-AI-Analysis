<script setup lang="ts">
import { defineAsyncComponent, nextTick, onMounted, onUnmounted, ref } from 'vue';

const loadSearchModal = () => import('./UnifiedSearchModal.vue');
const SearchModal = defineAsyncComponent(loadSearchModal);
const open = ref(false);
const trigger = ref<HTMLButtonElement>();

function isEditingContent(event: KeyboardEvent): boolean {
  const element = event.target as HTMLElement | null;
  return Boolean(element?.isContentEditable || ['INPUT', 'SELECT', 'TEXTAREA'].includes(element?.tagName ?? ''));
}

function openSearch() {
  open.value = true;
}

function closeSearch() {
  open.value = false;
  void nextTick(() => trigger.value?.focus());
}

function handleKeydown(event: KeyboardEvent) {
  const command = event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey);
  const slash = event.key === '/' && !isEditingContent(event);
  if (!command && !slash) return;
  event.preventDefault();
  openSearch();
}

function canPreload(): boolean {
  const connection = (navigator as Navigator & {
    connection?: { effectiveType?: string; saveData?: boolean };
  }).connection;
  return connection?.saveData !== true && !['slow-2g', '2g'].includes(connection?.effectiveType ?? '');
}

function preloadModal() {
  if (canPreload()) void loadSearchModal();
}

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<template>
  <div class="raia-search-nav">
    <button
      ref="trigger"
      class="raia-search-trigger"
      type="button"
      aria-label="搜索仓库与全文"
      @click="openSearch"
      @focus="preloadModal"
      @pointerenter="preloadModal"
    >
      <span class="raia-search-icon" aria-hidden="true" />
      <span class="raia-search-label">搜索</span>
      <span class="raia-search-keys" aria-hidden="true"><kbd>⌘</kbd><kbd>K</kbd></span>
    </button>
    <SearchModal v-if="open" @close="closeSearch" />
  </div>
</template>

<style scoped>
.raia-search-nav {
  display: flex;
  align-items: center;
  padding-left: 16px;
}

.raia-search-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 168px;
  min-height: 40px;
  padding: 0 10px 0 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font: inherit;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
}

.raia-search-trigger:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.raia-search-trigger:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.raia-search-icon {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-radius: 50%;
  position: relative;
  flex: 0 0 auto;
}

.raia-search-icon::after {
  content: '';
  position: absolute;
  right: -5px;
  bottom: -3px;
  width: 6px;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transform: rotate(45deg);
}

.raia-search-label {
  flex: 1;
  text-align: left;
  font-size: 14px;
}

.raia-search-keys {
  display: flex;
  gap: 2px;
}

.raia-search-keys kbd {
  min-width: 20px;
  padding: 2px 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-3);
  font: 11px/1.2 var(--vp-font-family-base);
  text-align: center;
}

@media (max-width: 767px) {
  .raia-search-nav {
    padding-left: 0;
  }

  .raia-search-trigger {
    justify-content: center;
    min-width: 44px;
    width: 44px;
    min-height: 44px;
    padding: 0;
  }

  .raia-search-label,
  .raia-search-keys {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .raia-search-trigger {
    transition: none;
  }
}
</style>
