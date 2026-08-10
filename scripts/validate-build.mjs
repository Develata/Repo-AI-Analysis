import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import zlib from 'node:zlib';
import { validatePagefindCoverage } from './pagefind-validation.mjs';

const root = process.cwd();
const distDir = path.join(root, 'docs', '.vitepress', 'dist');
const sourceReportsPath = path.join(root, 'docs', 'public', 'data', 'reports.json');
const reportsPath = path.join(distDir, 'data', 'reports.json');
const sourceQuickSearchPath = path.join(root, 'docs', 'public', 'data', 'search-quick.json');
const quickSearchPath = path.join(distDir, 'data', 'search-quick.json');
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
requireFile(sourceQuickSearchPath);
requireFile(quickSearchPath);
if (!fs.readFileSync(sourceQuickSearchPath).equals(fs.readFileSync(quickSearchPath))) fail('built quick search index differs from the generated source index');
requireFile(rssPath);
const coreRoutes = ['index.html', 'analysis/index.html', 'compare/index.html'];
for (const route of coreRoutes) requireFile(path.join(distDir, route));

const homeHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
if (!homeHtml.includes('当前报告画像')) fail('home page report summary was not server-rendered');
if (homeHtml.includes('正在加载报告索引')) fail('home page still renders the client-side report loading state');
if (!homeHtml.includes('搜索仓库与全文')) fail('unified search trigger was not server-rendered');

const themeReference = homeHtml.match(/(?:src|href)="\/Repo-AI-Analysis\/(assets\/chunks\/theme\.[^"]+\.js)"/u)?.[1];
if (!themeReference) fail('home page does not reference the shared theme chunk');
const themeChunk = path.join(distDir, themeReference);
requireFile(themeChunk);
if (fs.readFileSync(themeChunk, 'utf8').includes('当前报告画像')) {
  fail('home component leaked into the shared theme chunk');
}

const homeRouteReference = homeHtml.match(/(?:src|href)="\/Repo-AI-Analysis\/(assets\/index\.md\.[^"]+\.js)"/u)?.[1];
if (!homeRouteReference) fail('home page does not reference a route-local client chunk');
const homeRouteChunk = path.join(distDir, homeRouteReference);
requireFile(homeRouteChunk);
if (!fs.readFileSync(homeRouteChunk, 'utf8').includes('当前报告画像')) {
  fail('home summary is missing from the route-local client chunk');
}

const chunkDir = path.join(distDir, 'assets', 'chunks');
const chunkFiles = fs.readdirSync(chunkDir).filter((file) => file.endsWith('.js'));
if (chunkFiles.some((file) => file.startsWith('@localSearchIndex'))) fail('legacy monolithic VitePress search index is still built');
const modalChunk = chunkFiles.find((file) => fs.readFileSync(path.join(chunkDir, file), 'utf8').includes('全文索引暂不可用'));
if (!modalChunk) fail('missing lazy unified search modal chunk');
if (homeHtml.includes(modalChunk)) fail('unified search modal was eagerly preloaded by the home page');
const globalSearchStyles = fs.readdirSync(path.join(distDir, 'assets'))
  .filter((file) => file.endsWith('.css'))
  .some((file) => fs.readFileSync(path.join(distDir, 'assets', file), 'utf8').includes('raia-search-dialog'));
if (globalSearchStyles) fail('unified search modal styles leaked into the initial global stylesheet');

const pagefindDir = path.join(distDir, 'pagefind');
for (const relativeFile of ['pagefind.js', 'pagefind-entry.json']) requireFile(path.join(pagefindDir, relativeFile));
const pagefindFiles = fs.readdirSync(pagefindDir);
if (!pagefindFiles.some((file) => /^wasm\..+\.pagefind$/u.test(file))) fail('missing Pagefind WASM runtime');
if (!pagefindFiles.some((file) => file.endsWith('.pf_meta'))) fail('missing Pagefind metadata');

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
let pagefindCoverage;
try {
  pagefindCoverage = validatePagefindCoverage({
    distDir,
    pagefindDir,
    reportRoutes: index.reports.map((report) => report.route),
  });
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
}
const quick = JSON.parse(fs.readFileSync(quickSearchPath, 'utf8'));
if (quick.schema_version !== 1 || !Array.isArray(quick.items) || quick.count !== quick.items.length) fail('invalid quick search index');
if (quick.count !== index.count) fail('quick search and reports counts differ');
const quickGzipBytes = zlib.gzipSync(JSON.stringify(quick), { level: 9 }).byteLength;
if (quickGzipBytes > 35 * 1024) fail(`quick search index exceeds 35 KiB gzip budget: ${quickGzipBytes} bytes`);

const rss = fs.readFileSync(rssPath, 'utf8');
const items = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/gu)].map((match) => match[1]);
if (items.length !== Math.min(20, index.count)) fail(`unexpected RSS item count: ${items.length}`);
const guids = items.map((item) => item.match(/<guid[^>]*>([^<]+)<\/guid>/u)?.[1] ?? '');
if (guids.some((guid) => !guid.startsWith('https://develata.github.io/Repo-AI-Analysis/'))) fail('RSS contains an invalid URL base');
if (new Set(guids).size !== guids.length) fail('RSS contains duplicate GUIDs');
const dates = items.map((item) => Date.parse(item.match(/<pubDate>([^<]+)<\/pubDate>/u)?.[1] ?? ''));
if (dates.some((date) => !Number.isFinite(date))) fail('RSS contains an invalid publication date');
if (dates.some((date, indexValue) => indexValue > 0 && date > dates[indexValue - 1])) fail('RSS items are not newest-first');

console.log(`Validated build: ${index.count} reports, ${items.length} RSS items, ${quickGzipBytes} B quick search gzip, ${pagefindCoverage.eligiblePages} Pagefind pages.`);
