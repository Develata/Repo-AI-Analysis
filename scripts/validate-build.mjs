import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const distDir = path.join(root, 'docs', '.vitepress', 'dist');
const sourceReportsPath = path.join(root, 'docs', 'public', 'data', 'reports.json');
const reportsPath = path.join(distDir, 'data', 'reports.json');
const rssPath = path.join(distDir, 'rss.xml');

function fail(message) {
  throw new Error(`[validate-build] ${message}`);
}

function requireFile(file) {
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) fail(`missing file: ${path.relative(root, file)}`);
}

function requireReference(reference) {
  const candidates = reference.endsWith('/')
    ? [path.join(reference, 'index.html')]
    : path.extname(reference)
      ? [reference]
      : [`${reference}.html`, path.join(reference, 'index.html')];
  if (!candidates.some((candidate) => {
    const file = path.join(distDir, candidate);
    return fs.existsSync(file) && fs.statSync(file).isFile();
  })) fail(`missing local reference: ${reference}`);
}

requireFile(sourceReportsPath);
requireFile(reportsPath);
if (!fs.readFileSync(sourceReportsPath).equals(fs.readFileSync(reportsPath))) fail('built reports index differs from the generated source index');
requireFile(rssPath);
const coreRoutes = ['index.html', 'analysis/index.html', 'compare/index.html'];
for (const route of coreRoutes) requireFile(path.join(distDir, route));

for (const route of coreRoutes) {
  const html = fs.readFileSync(path.join(distDir, route), 'utf8');
  const references = [...html.matchAll(/(?:src|href)="(\/Repo-AI-Analysis\/[^"?#]+)(?:[?#][^"]*)?"/gu)]
    .map((match) => decodeURIComponent(match[1].slice('/Repo-AI-Analysis/'.length)));
  for (const reference of references) requireReference(reference);
}

const index = JSON.parse(fs.readFileSync(reportsPath, 'utf8'));
if (index.schema_version !== 1) fail(`unexpected reports schema: ${String(index.schema_version)}`);
if (!Array.isArray(index.reports) || index.count !== index.reports.length) fail('reports count mismatch');
if (new Set(index.reports.map((report) => report.slug)).size !== index.count) fail('duplicate report slug');

const rss = fs.readFileSync(rssPath, 'utf8');
const items = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/gu)].map((match) => match[1]);
if (items.length !== Math.min(20, index.count)) fail(`unexpected RSS item count: ${items.length}`);
const guids = items.map((item) => item.match(/<guid[^>]*>([^<]+)<\/guid>/u)?.[1] ?? '');
if (guids.some((guid) => !guid.startsWith('https://develata.github.io/Repo-AI-Analysis/'))) fail('RSS contains an invalid URL base');
if (new Set(guids).size !== guids.length) fail('RSS contains duplicate GUIDs');
const dates = items.map((item) => Date.parse(item.match(/<pubDate>([^<]+)<\/pubDate>/u)?.[1] ?? ''));
if (dates.some((date) => !Number.isFinite(date))) fail('RSS contains an invalid publication date');
if (dates.some((date, indexValue) => indexValue > 0 && date > dates[indexValue - 1])) fail('RSS items are not newest-first');

console.log(`Validated build: ${index.count} reports, ${items.length} RSS items, core routes present.`);
