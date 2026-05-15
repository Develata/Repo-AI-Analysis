import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import type { ViteDevServer } from 'vite';
import type { SiteConfig } from 'vitepress';

const SITE_URL = process.env.SITE_URL ?? 'https://develata.github.io/Repo-AI-Analysis/';
const BASE_PATH = process.env.BASE_PATH ?? '/Repo-AI-Analysis/';
const FEED_LIMIT = 20;
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(currentDir, '../..');
const analysisRoot = path.join(docsRoot, 'analysis');
const md = new MarkdownIt({ html: true, linkify: false });

export interface RssFeedLink {
  title: string;
  url: string;
  description: string;
}

interface RssItem {
  title: string;
  url: string;
  date: Date;
  description: string;
  contentHtml: string;
}

export function generateRssFeeds(siteConfig: SiteConfig): void {
  generateRssFeedsToDir(siteConfig.outDir);
}

export function generateRssFeedsToDir(outDir: string): void {
  const items = collectItems().slice(0, FEED_LIMIT);
  const rssDir = path.join(outDir, 'rss');
  fs.mkdirSync(rssDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'rss.xml'), renderFeed(items, '/rss.xml'), 'utf-8');
  fs.writeFileSync(path.join(rssDir, 'analysis.xml'), renderFeed(items, '/rss/analysis.xml'), 'utf-8');
}

export function listRssFeeds(): RssFeedLink[] {
  return [
    {
      title: 'Repo-AI-Analysis',
      url: withBasePath('/rss.xml'),
      description: `最新 ${FEED_LIMIT} 篇 repository analysis。`,
    },
    {
      title: 'Analysis',
      url: withBasePath('/rss/analysis.xml'),
      description: `Github repository analysis 最新 ${FEED_LIMIT} 篇。`,
    },
  ];
}

export function rssDevServer() {
  return {
    name: 'repo-ai-analysis-rss-dev-server',
    apply: 'serve' as const,
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const pathname = new URL(req.url || '/', 'http://localhost').pathname;
        const isRootFeed = pathname.endsWith('/rss.xml');
        const isAnalysisFeed = pathname.endsWith('/rss/analysis.xml');
        if (!isRootFeed && !isAnalysisFeed) {
          next();
          return;
        }

        const outDir = path.join(os.tmpdir(), 'repo-ai-analysis-vitepress-rss-dev');
        generateRssFeedsToDir(outDir);
        const filePath = isRootFeed ? path.join(outDir, 'rss.xml') : path.join(outDir, 'rss', 'analysis.xml');
        if (!fs.existsSync(filePath)) {
          next();
          return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
        res.end(fs.readFileSync(filePath, 'utf-8'));
      });
    },
  };
}

function collectItems(): RssItem[] {
  return listMarkdownFiles(analysisRoot)
    .filter((file) => path.basename(file).toLowerCase() !== 'index.md')
    .map(readItem)
    .filter((item): item is RssItem => Boolean(item))
    .sort((a, b) => b.date.getTime() - a.date.getTime() || a.url.localeCompare(b.url));
}

function readItem(file: string): RssItem | undefined {
  const source = fs.readFileSync(file, 'utf-8');
  const { data, content, excerpt } = matter(source, { excerpt: true });
  if (data.rss === false || data.hideInSidebar) return undefined;

  const date = parseDate(data.updated ?? data.last_checked ?? data.last_verified ?? data.created);
  if (!date) return undefined;

  const url = absoluteUrl(markdownPathToUrl(file));
  return {
    title: String(data.title || firstHeading(content) || path.basename(file, '.md')).trim(),
    url,
    date,
    description: summarize(data.description || data.summary || excerpt || content),
    contentHtml: renderContent(content, url),
  };
}

function listMarkdownFiles(root: string): string[] {
  if (!fs.existsSync(root)) return [];
  const result: string[] = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const next = path.join(root, entry.name);
    if (entry.isDirectory()) result.push(...listMarkdownFiles(next));
    if (entry.isFile() && entry.name.endsWith('.md')) result.push(next);
  }
  return result;
}

function renderFeed(items: RssItem[], feedPath: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Repo-AI-Analysis</title>
    <link>${escapeXml(absoluteUrl('/'))}</link>
    <description>Structured AI-assisted GitHub repository analyses.</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${escapeXml(absoluteUrl(feedPath))}" rel="self" type="application/rss+xml" />
${items.map(renderItem).join('\n')}
  </channel>
</rss>
`;
}

function renderItem(item: RssItem): string {
  return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.url)}</link>
      <guid isPermaLink="true">${escapeXml(item.url)}</guid>
      <pubDate>${item.date.toUTCString()}</pubDate>
      <description>${escapeXml(item.description)}</description>
      <content:encoded><![CDATA[${escapeCdata(item.contentHtml)}]]></content:encoded>
    </item>`;
}

function markdownPathToUrl(file: string): string {
  const relative = path.relative(docsRoot, file).replace(/\\/g, '/').replace(/\.md$/u, '');
  return `/${relative}`;
}

function absoluteUrl(urlPath: string): string {
  return new URL(urlPath.replace(/^\//u, ''), SITE_URL).toString();
}

function withBasePath(urlPath: string): string {
  return path.posix.join(BASE_PATH, urlPath).replace(/\\/g, '/');
}

function parseDate(raw: unknown): Date | undefined {
  if (!raw) return undefined;
  if (raw instanceof Date) return Number.isNaN(raw.getTime()) ? undefined : raw;

  const value = String(raw).trim();
  const dateOnly = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/u);
  if (dateOnly) {
    const year = Number(dateOnly[1]);
    const month = Number(dateOnly[2]);
    const day = Number(dateOnly[3]);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
      ? date
      : undefined;
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function summarize(value: unknown): string {
  return String(value)
    .replace(/^---[\s\S]*?---/u, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^#\s+.+$/gm, ' ')
    .replace(/[#>*_`[\]()]|!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 240);
}

function renderContent(content: string, pageUrl: string): string {
  const source = content
    .replace(/<script\b[\s\S]*?<\/script>/giu, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/giu, ' ');
  return absolutizeHtmlUrls(md.render(source), pageUrl);
}

function absolutizeHtmlUrls(html: string, pageUrl: string): string {
  return html.replace(/\b(href|src)=("([^"]*)"|'([^']*)')/g, (match, attr: string, _quoted: string, doubleValue?: string, singleValue?: string) => {
    const value = doubleValue ?? singleValue ?? '';
    if (/^(?:[a-z][a-z0-9+.-]*:|#)/iu.test(value)) return match;
    return `${attr}="${escapeHtmlAttribute(resolveContentUrl(value, pageUrl))}"`;
  });
}

function resolveContentUrl(value: string, pageUrl: string): string {
  const url = new URL(value, value.startsWith('/') ? SITE_URL : pageUrl);
  if (url.origin === new URL(SITE_URL).origin && url.pathname.endsWith('/index.md')) {
    url.pathname = url.pathname.replace(/\/index\.md$/u, '/');
  } else if (url.origin === new URL(SITE_URL).origin && url.pathname.endsWith('.md')) {
    url.pathname = url.pathname.replace(/\.md$/u, '');
  }
  return url.toString();
}

function firstHeading(content: string): string | undefined {
  return content.match(/^\s*#\s+(.+)\s*$/m)?.[1]?.trim();
}

function escapeHtmlAttribute(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function escapeCdata(value: string): string {
  return value.replaceAll(']]>', ']]]]><![CDATA[>');
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
