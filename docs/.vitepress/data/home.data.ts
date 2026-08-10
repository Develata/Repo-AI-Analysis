import fs from 'node:fs';
import { defineLoader } from 'vitepress';
import {
  buildHomeSummary,
  type HomeSummary,
  type ReportIndexItem,
} from '../../../scripts/build-index.mjs';

export type { HomeReport, HomeSummary } from '../../../scripts/build-index.mjs';

declare const data: HomeSummary;
export { data };

export default defineLoader({
  watch: ['../../public/data/reports.json'],
  load(watchedFiles): HomeSummary {
    const indexFile = watchedFiles[0];
    if (!indexFile) throw new Error('[home-data] generated reports index was not found');

    const payload: unknown = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
    if (!payload || typeof payload !== 'object') throw new Error('[home-data] reports index is not an object');

    const index = payload as { schema_version?: unknown; count?: unknown; reports?: unknown };
    if (index.schema_version !== 1) throw new Error(`[home-data] unsupported reports schema: ${String(index.schema_version)}`);
    if (!Array.isArray(index.reports) || index.count !== index.reports.length) {
      throw new Error('[home-data] reports index count does not match its items');
    }

    return buildHomeSummary(index.reports as ReportIndexItem[]);
  },
});
