import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';
import matter from 'gray-matter';

export const REPORT_INDEX_SCHEMA_VERSION = 1;
export const DIMENSION_KEYS = [
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
];
export const HOME_SUMMARY_SCHEMA_VERSION = 1;
export const HOME_LATEST_PAGE_SIZE = 4;
export const HOME_LATEST_PAGE_LIMIT = 3;
export const QUICK_SEARCH_INDEX_SCHEMA_VERSION = 1;

function fail(sourcePath, message) {
  throw new Error(`[reports-index] ${sourcePath}: ${message}`);
}

function requireString(value, field, sourcePath) {
  if (typeof value !== 'string' || !value.trim()) fail(sourcePath, `${field} must be a non-empty string`);
  return value.trim();
}

function optionalString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function requireNumber(value, field, sourcePath, { min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY } = {}) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) {
    fail(sourcePath, `${field} must be a finite number in [${min}, ${max}]`);
  }
  return value;
}

function requireStringArray(value, field, sourcePath) {
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string' || !item.trim())) {
    fail(sourcePath, `${field} must be an array of non-empty strings`);
  }
  return value.map((item) => item.trim());
}

function requireDate(value, field, sourcePath) {
  let normalized = '';
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    normalized = value.toISOString().slice(0, 10);
  } else if (typeof value === 'string') {
    normalized = value.trim();
  }

  const match = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/u);
  if (!match) fail(sourcePath, `${field} must be an ISO date (YYYY-MM-DD)`);
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  if (date.toISOString().slice(0, 10) !== normalized) fail(sourcePath, `${field} is not a valid calendar date`);
  return normalized;
}

function requireRepoUrl(value, sourcePath) {
  const repoUrl = requireString(value, 'repo_url', sourcePath);
  let parsed;
  try {
    parsed = new URL(repoUrl);
  } catch {
    fail(sourcePath, 'repo_url must be a valid URL');
  }
  if (!['http:', 'https:'].includes(parsed.protocol)) fail(sourcePath, 'repo_url must use http or https');
  return repoUrl;
}

function normalizeRatings(value, sourcePath) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail(sourcePath, 'ratings must be an object');
  const ratings = {};
  for (const key of DIMENSION_KEYS) {
    ratings[key] = requireNumber(value[key], `ratings.${key}`, sourcePath, { min: 0, max: 5 });
  }
  return ratings;
}

function isIndexMarkdown(fileName) {
  return fileName === 'index.md' || fileName === '_index.md';
}

export function listReportFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...listReportFiles(fullPath));
    else if (entry.isFile() && entry.name.endsWith('.md') && !isIndexMarkdown(entry.name)) result.push(fullPath);
  }
  return result.sort();
}

export function makeSummary(content) {
  const firstParagraph = content
    .replace(/```[\s\S]*?```/gu, '')
    .split(/\r?\n/u)
    .map((line) => line.trim())
    .find((line) => line && !line.startsWith('#') && !line.startsWith('|') && !line.startsWith('>'));
  return firstParagraph?.replace(/\*\*/gu, '').slice(0, 180) ?? '';
}

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

export function parseReportFile(file, { root, analysisDir }) {
  const sourcePath = toPosixPath(path.relative(root, file));
  const markdown = fs.readFileSync(file, 'utf8');
  let parsed;
  try {
    parsed = matter(markdown);
  } catch (error) {
    fail(sourcePath, `invalid frontmatter: ${error instanceof Error ? error.message : String(error)}`);
  }
  const { data, content } = parsed;
  if (data.type !== 'repository-analysis') fail(sourcePath, 'type must be repository-analysis');

  const slug = toPosixPath(path.relative(analysisDir, file)).replace(/\.md$/u, '');
  const directory = slug.split('/').slice(0, -1).join('/');
  const category = requireString(data.category ?? directory, 'category', sourcePath);
  const summary = makeSummary(content);
  if (!summary) fail(sourcePath, 'report body must contain a summary paragraph');

  return {
    slug,
    route: `/analysis/${slug}`,
    title: requireString(data.title, 'title', sourcePath),
    repo_url: requireRepoUrl(data.repo_url, sourcePath),
    category,
    directory,
    tags: requireStringArray(data.tags, 'tags', sourcePath),
    primary_language: optionalString(data.primary_language),
    stars: requireNumber(data.stars, 'stars', sourcePath, { min: 0 }),
    status: requireString(data.status, 'status', sourcePath),
    ratings: normalizeRatings(data.ratings, sourcePath),
    overall_score: requireNumber(data.overall_score, 'overall_score', sourcePath, { min: 0, max: 5 }),
    last_checked: requireDate(data.last_checked, 'last_checked', sourcePath),
    updated: requireDate(data.updated, 'updated', sourcePath),
    summary,
  };
}

function reportDate(report) {
  return report.updated || report.last_checked || '';
}

function reportTimestamp(report) {
  const timestamp = Date.parse(reportDate(report));
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function topLevelCategory(report) {
  return String(report.directory || report.category || 'uncategorized').split('/').filter(Boolean)[0] ?? 'uncategorized';
}

function formatCategoryLabel(category) {
  return category
    .split('-')
    .filter(Boolean)
    .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
    .join(' ');
}

function projectHomeReport(report) {
  return {
    slug: report.slug,
    route: report.route,
    title: report.title,
    category: report.category,
    directory: report.directory,
    ratings: Object.fromEntries(DIMENSION_KEYS.map((key) => [key, report.ratings[key]])),
    overall_score: report.overall_score,
    last_checked: report.last_checked,
    updated: report.updated,
    summary: report.summary,
  };
}

export function buildHomeSummary(reports) {
  if (!Array.isArray(reports)) throw new TypeError('[home-summary] reports must be an array');

  const latest = reports
    .slice()
    .sort((left, right) => reportTimestamp(right) - reportTimestamp(left)
      || Number(right.overall_score) - Number(left.overall_score)
      || left.title.localeCompare(right.title, 'en'))
    .slice(0, HOME_LATEST_PAGE_SIZE * HOME_LATEST_PAGE_LIMIT)
    .map(projectHomeReport);

  const buckets = new Map();
  for (const report of reports) {
    const category = topLevelCategory(report);
    const bucket = buckets.get(category) ?? [];
    bucket.push(report);
    buckets.set(category, bucket);
  }

  const categories = [...buckets.entries()]
    .map(([category, items]) => {
      const top = items
        .slice()
        .sort((left, right) => Number(right.overall_score) - Number(left.overall_score)
          || reportTimestamp(right) - reportTimestamp(left)
          || left.title.localeCompare(right.title, 'en'))[0];
      return {
        path: category,
        label: formatCategoryLabel(category),
        count: items.length,
        averageScore: items.reduce((sum, report) => sum + Number(report.overall_score || 0), 0) / items.length,
        latestDate: items.map(reportDate).sort().at(-1) ?? '',
        top: projectHomeReport(top),
      };
    })
    .sort((left, right) => right.count - left.count || left.label.localeCompare(right.label, 'en'));

  return {
    schema_version: HOME_SUMMARY_SCHEMA_VERSION,
    count: reports.length,
    page_size: HOME_LATEST_PAGE_SIZE,
    latest,
    categories,
  };
}

export function buildQuickSearchIndex(reports) {
  if (!Array.isArray(reports)) throw new TypeError('[quick-search] reports must be an array');
  return {
    schema_version: QUICK_SEARCH_INDEX_SCHEMA_VERSION,
    count: reports.length,
    items: reports.map((report) => ({
      route: report.route,
      title: report.title,
      directory: report.directory || report.category,
      tags: report.tags,
      language: report.primary_language,
      summary: report.summary,
    })),
  };
}

export function buildReportIndex({
  root = process.cwd(),
  analysisDir = path.join(root, 'docs', 'analysis'),
  outputFile = path.join(root, 'docs', 'public', 'data', 'reports.json'),
  quickSearchOutputFile = path.join(root, 'docs', 'public', 'data', 'search-quick.json'),
  write = true,
} = {}) {
  const reports = listReportFiles(analysisDir)
    .map((file) => parseReportFile(file, { root, analysisDir }))
    .sort((a, b) => Number(b.overall_score) - Number(a.overall_score) || a.title.localeCompare(b.title, 'en'));

  const slugs = new Set();
  const routes = new Set();
  for (const report of reports) {
    if (slugs.has(report.slug)) fail(report.slug, 'duplicate slug');
    if (routes.has(report.route)) fail(report.slug, 'duplicate route');
    slugs.add(report.slug);
    routes.add(report.route);
  }

  const payload = {
    schema_version: REPORT_INDEX_SCHEMA_VERSION,
    count: reports.length,
    reports,
  };

  if (write) {
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.mkdirSync(path.dirname(quickSearchOutputFile), { recursive: true });
    fs.writeFileSync(outputFile, `${JSON.stringify(payload, null, 2)}\n`);
    fs.writeFileSync(quickSearchOutputFile, `${JSON.stringify(buildQuickSearchIndex(reports))}\n`);
  }
  return payload;
}

const invokedPath = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : '';
if (import.meta.url === invokedPath) {
  const root = process.cwd();
  const outputFile = path.join(root, 'docs', 'public', 'data', 'reports.json');
  const payload = buildReportIndex({ root, outputFile });
  console.log(`Indexed ${payload.count} report(s) -> ${toPosixPath(path.relative(root, outputFile))} + search-quick.json`);
}
