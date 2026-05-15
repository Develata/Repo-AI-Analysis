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
  capability: 'Capability',
  usability: 'Usability',
  performance: 'Performance',
  code_quality: 'Code Quality',
  documentation: 'Docs',
  community: 'Community',
  maturity: 'Maturity',
  extensibility: 'Extensibility',
  security: 'Security',
  recommendation: 'Recommendation',
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
  forks: number;
  status: string;
  sharing_candidate: boolean;
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

export async function loadReports(): Promise<Report[]> {
  const response = await fetch(withBase('/data/reports.json'));
  const payload = await response.json();
  return (payload.reports ?? []) as Report[];
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
