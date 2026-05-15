<script setup lang="ts">
import { useRouter, withBase } from 'vitepress';
import { onMounted, onUnmounted } from 'vue';

const router = useRouter();

const modules = import.meta.glob([
  '../../../analysis/**/*.md',
  '!../../../analysis/index.md',
]);

const urls = Object.keys(modules)
  .map((filePath) => filePath
    .replace(/^\.\.\/\.\.\/\.\.\/analysis\//u, '/analysis/')
    .replace(/\.md$/u, '')
    .replace(/\/index$/u, '/'))
  .sort();

function jumpRandom() {
  const currentPath = decodeURI(router.route.path).replace(/\.html$/u, '').replace(/\/$/u, '');
  const availableUrls = urls.filter((url) => decodeURI(url).replace(/\/$/u, '') !== currentPath);

  if (availableUrls.length === 0) {
    window.alert('没有其他分析了。');
    return;
  }

  const targetUrl = availableUrls[Math.floor(Math.random() * availableUrls.length)];
  router.go(withBase(targetUrl));
}

function handleGlobalClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const link = target.closest('a');
  const href = link?.getAttribute('href');
  if (!href?.includes('#randomjump')) return;

  event.preventDefault();
  jumpRandom();
}

onMounted(() => {
  window.addEventListener('click', handleGlobalClick);
});

onUnmounted(() => {
  window.removeEventListener('click', handleGlobalClick);
});
</script>

<template>
  <div class="nav-item">
    <button class="random-btn" type="button" title="随机访问一篇分析" @click="jumpRandom">
      <span class="icon">🎲</span>
      <span class="text">Roll</span>
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
  transition: all 0.3s ease;
}

.random-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
  transform: translateY(-1px);
}

.icon {
  font-size: 16px;
}

@media (max-width: 768px) {
  .text {
    display: none;
  }

  .random-btn {
    padding: 0 8px;
  }
}
</style>
