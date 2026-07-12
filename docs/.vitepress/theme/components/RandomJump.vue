<script setup lang="ts">
import { useRouter, withBase } from 'vitepress';
import { onMounted, onUnmounted, ref } from 'vue';
import { useReports } from '../composables/useReports';

const router = useRouter();
const { reports, ensureReports } = useReports();
const jumping = ref(false);

async function jumpRandom() {
  if (jumping.value) return;
  jumping.value = true;
  try {
    await ensureReports();
    const currentPath = decodeURI(router.route.path).replace(/\.html$/u, '').replace(/\/$/u, '');
    const available = reports.value.filter((report) => decodeURI(report.route).replace(/\/$/u, '') !== currentPath);
    if (available.length === 0) {
      window.alert('没有其他分析了。');
      return;
    }
    const report = available[Math.floor(Math.random() * available.length)];
    router.go(withBase(report.route));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    window.alert(`无法读取报告索引：${message}`);
  } finally {
    jumping.value = false;
  }
}

function handleGlobalClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const link = target.closest('a');
  const href = link?.getAttribute('href');
  if (!href?.includes('#randomjump')) return;
  event.preventDefault();
  void jumpRandom();
}

onMounted(() => window.addEventListener('click', handleGlobalClick));
onUnmounted(() => window.removeEventListener('click', handleGlobalClick));
</script>

<template>
  <div class="nav-item">
    <button
      class="random-btn"
      type="button"
      title="随机访问一篇分析"
      :disabled="jumping"
      :aria-busy="jumping"
      @click="jumpRandom"
    >
      <span class="icon" aria-hidden="true">🎲</span>
      <span class="text">{{ jumping ? 'Loading' : 'Roll' }}</span>
    </button>
  </div>
</template>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.random-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
}

.random-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
}

.random-btn:disabled {
  opacity: 0.6;
  cursor: wait;
}

.icon {
  font-size: 16px;
}

@media (max-width: 768px) {
  .text {
    display: none;
  }
  .random-btn {
    padding: 0 10px;
  }
}
</style>
