import { withBase } from 'vitepress';

export const dimensionKeys = [
  'capability',
  'usability',
  'performance',
  'code_quality',
  'documentation',
  'community',
  'maturity',
  'extensibility',
  'security',
  'recommendation',
] as const;

export const dimensionLabels: Record<string, string> = {
  capability: '能力',
  usability: '易用性',
  performance: '性能',
  code_quality: '代码质量',
  documentation: '文档',
  community: '社区',
  maturity: '成熟度',
  extensibility: '可扩展性',
  security: '安全性',
  recommendation: '推荐度',
};

export type Report = {
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

export function formatScore(value: unknown): string {
  const number = Number(value);
  return Number.isFinite(number) ? number.toFixed(1) : '-';
}

export function reportDate(report: Report): string {
  return report.updated || report.last_checked || '';
}

export function excerpt(report: Report): string {
  return report.summary || report.title;
}

export function reportLink(report: Report): string {
  return withBase(report.route);
}

function isScore(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 5;
}

function isReport(value: unknown): value is Report {
  if (!value || typeof value !== 'object') return false;
  const report = value as Partial<Report>;
  return typeof report.slug === 'string'
    && report.slug.length > 0
    && typeof report.route === 'string'
    && report.route.startsWith('/analysis/')
    && typeof report.title === 'string'
    && report.title.length > 0
    && typeof report.repo_url === 'string'
    && /^https?:\/\//u.test(report.repo_url)
    && typeof report.category === 'string'
    && typeof report.directory === 'string'
    && Array.isArray(report.tags)
    && report.tags.every((tag) => typeof tag === 'string')
    && typeof report.primary_language === 'string'
    && typeof report.stars === 'number'
    && Number.isFinite(report.stars)
    && report.stars >= 0
    && typeof report.status === 'string'
    && typeof report.ratings === 'object'
    && report.ratings !== null
    && dimensionKeys.every((key) => isScore(report.ratings?.[key]))
    && isScore(report.overall_score)
    && typeof report.last_checked === 'string'
    && typeof report.updated === 'string'
    && typeof report.summary === 'string';
}

export async function loadReports(): Promise<Report[]> {
  const response = await fetch(withBase('/data/reports.json'));
  if (!response.ok) {
    throw new Error(`Reports index request failed (${response.status} ${response.statusText})`);
  }

  const payload: unknown = await response.json();
  if (!payload || typeof payload !== 'object') throw new Error('Reports index is not an object');
  const index = payload as { schema_version?: unknown; count?: unknown; reports?: unknown };
  if (index.schema_version !== 1) throw new Error(`Unsupported reports index schema: ${String(index.schema_version)}`);
  if (!Array.isArray(index.reports) || !index.reports.every(isReport)) throw new Error('Reports index contains invalid report items');
  if (index.count !== index.reports.length) throw new Error('Reports index count does not match its items');
  return index.reports;
}

export function averageRatings(reports: Report[]): Record<string, number> {
  const totals = Object.fromEntries(dimensionKeys.map((key) => [key, 0]));
  const counts = Object.fromEntries(dimensionKeys.map((key) => [key, 0]));
  for (const report of reports) {
    for (const key of dimensionKeys) {
      const value = Number(report.ratings?.[key]);
      if (Number.isFinite(value)) {
        totals[key] += value;
        counts[key] += 1;
      }
    }
  }
  return Object.fromEntries(dimensionKeys.map((key) => [key, counts[key] ? totals[key] / counts[key] : 0]));
}
