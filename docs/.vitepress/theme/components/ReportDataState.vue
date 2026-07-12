<script setup lang="ts">
withDefaults(defineProps<{
  loading: boolean;
  error?: Error | null;
  empty?: boolean;
  emptyMessage?: string;
}>(), {
  error: null,
  empty: false,
  emptyMessage: '暂无报告。',
});

defineEmits<{
  retry: [];
}>();
</script>

<template>
  <div v-if="loading" class="raia-data-state" role="status" aria-live="polite">
    <strong>正在加载报告索引…</strong>
    <span>首次访问需要读取站点的结构化报告目录。</span>
  </div>
  <div v-else-if="error" class="raia-data-state is-error" role="alert">
    <strong>报告索引加载失败</strong>
    <span>{{ error.message }}</span>
    <button type="button" @click="$emit('retry')">重试</button>
  </div>
  <div v-else-if="empty" class="raia-data-state" role="status">
    <strong>{{ emptyMessage }}</strong>
    <slot />
  </div>
</template>
