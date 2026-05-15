import { computed, ref } from 'vue';
import { loadReports, type Report } from '../components/reportData';

const reports = ref<Report[]>([]);
const loading = ref(false);
const error = ref<Error | null>(null);
let loadPromise: Promise<Report[]> | null = null;

export function useReports() {
  async function ensureReports(): Promise<Report[]> {
    if (reports.value.length > 0) return reports.value;
    if (loadPromise) return loadPromise;

    loading.value = true;
    error.value = null;
    loadPromise = loadReports()
      .then((items) => {
        reports.value = items;
        return items;
      })
      .catch((caught: unknown) => {
        error.value = caught instanceof Error ? caught : new Error(String(caught));
        loadPromise = null;
        throw error.value;
      })
      .finally(() => {
        loading.value = false;
      });

    return loadPromise;
  }

  return {
    reports,
    loading,
    error,
    ready: computed(() => reports.value.length > 0 && !loading.value),
    ensureReports,
  };
}
