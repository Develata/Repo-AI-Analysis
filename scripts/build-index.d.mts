export type ReportIndexItem = {
  slug: string;
  route: string;
  title: string;
  repo_url: string;
  category: string;
  directory: string;
  tags: string[];
  primary_language: string;
  stars: number;
  status: string;
  ratings: Record<string, number>;
  overall_score: number;
  last_checked: string;
  updated: string;
  summary: string;
};

export type HomeReport = Pick<
  ReportIndexItem,
  | 'slug'
  | 'route'
  | 'title'
  | 'category'
  | 'directory'
  | 'ratings'
  | 'overall_score'
  | 'last_checked'
  | 'updated'
  | 'summary'
>;

export type HomeCategorySummary = {
  path: string;
  label: string;
  count: number;
  averageScore: number;
  latestDate: string;
  top: HomeReport;
};

export type HomeSummary = {
  schema_version: 1;
  count: number;
  page_size: number;
  latest: HomeReport[];
  categories: HomeCategorySummary[];
};

export type QuickSearchItem = Pick<ReportIndexItem, 'route' | 'title' | 'tags' | 'summary'> & {
  directory: string;
  language: string;
};

export type QuickSearchIndex = {
  schema_version: 1;
  count: number;
  items: QuickSearchItem[];
};

export const REPORT_INDEX_SCHEMA_VERSION: number;
export const DIMENSION_KEYS: string[];
export const HOME_SUMMARY_SCHEMA_VERSION: number;
export const HOME_LATEST_PAGE_SIZE: number;
export const HOME_LATEST_PAGE_LIMIT: number;
export const QUICK_SEARCH_INDEX_SCHEMA_VERSION: number;

export function buildHomeSummary(reports: ReportIndexItem[]): HomeSummary;
export function buildQuickSearchIndex(reports: ReportIndexItem[]): QuickSearchIndex;
