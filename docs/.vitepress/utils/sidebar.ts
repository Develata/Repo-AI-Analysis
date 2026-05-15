import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import type { DefaultTheme } from 'vitepress';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
export const docsRoot = path.resolve(currentDir, '../..');

type SidebarItem = DefaultTheme.SidebarItem & {
  order?: number;
  name?: string;
  date?: number;
};

export function resolveSidebarItems(dirPath: string, baseUrl: string): DefaultTheme.SidebarItem[] {
  const absolutePath = path.resolve(docsRoot, dirPath);
  if (!fs.existsSync(absolutePath)) return [];

  const items: SidebarItem[] = [];
  const entries = fs.readdirSync(absolutePath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;

    const entryPath = path.join(absolutePath, entry.name);

    if (entry.isDirectory()) {
      const nextBaseUrl = path.posix.join(baseUrl, entry.name, '/');
      const children = resolveSidebarItems(path.join(dirPath, entry.name), nextBaseUrl);
      if (children.length === 0) continue;

      const indexMeta = readMarkdownMeta(path.join(entryPath, 'index.md'));
      items.push({
        text: indexMeta.title || titleCase(entry.name),
        collapsed: true,
        items: children,
        order: indexMeta.order,
        name: entry.name,
        date: indexMeta.date,
      });
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name.toLowerCase() === 'index.md') continue;

    const meta = readMarkdownMeta(entryPath);
    if (meta.hideInSidebar) continue;

    const stem = entry.name.replace(/\.md$/u, '');
    items.push({
      text: meta.title || titleCase(stem),
      link: path.posix.join(baseUrl, stem),
      order: meta.order,
      name: stem,
      date: meta.date,
    });
  }

  return items.sort(compareSidebarItems).map(({ order, name, date, ...item }) => item);
}

function readMarkdownMeta(filePath: string): {
  title?: string;
  order?: number;
  date?: number;
  hideInSidebar?: boolean;
} {
  if (!fs.existsSync(filePath)) return {};

  try {
    const source = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(source);
    const date = parseDate(data.updated ?? data.date ?? data.created ?? data.last_checked);
    return {
      title: String(data.title || firstHeading(content) || '').trim() || undefined,
      order: typeof data.order === 'number' ? data.order : Number.POSITIVE_INFINITY,
      date: date?.getTime() ?? 0,
      hideInSidebar: Boolean(data.hideInSidebar),
    };
  } catch (error) {
    console.warn(`[Config] Failed to parse sidebar metadata: ${filePath}`, error);
    return {};
  }
}

function compareSidebarItems(a: SidebarItem, b: SidebarItem): number {
  const isAOther = (a.name || '').toLowerCase() === 'other' || (a.text || '').toLowerCase() === 'other';
  const isBOther = (b.name || '').toLowerCase() === 'other' || (b.text || '').toLowerCase() === 'other';

  if (isAOther && !isBOther) return 1;
  if (!isAOther && isBOther) return -1;

  const orderA = a.order ?? Number.POSITIVE_INFINITY;
  const orderB = b.order ?? Number.POSITIVE_INFINITY;
  if (orderA !== orderB) return orderA - orderB;

  const dateA = a.date ?? 0;
  const dateB = b.date ?? 0;
  if (dateA !== dateB) return dateB - dateA;

  return (a.name ?? '').localeCompare(b.name ?? '', 'en');
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

function firstHeading(content: string): string | undefined {
  return content.match(/^\s*#\s+(.+)\s*$/m)?.[1]?.trim();
}

function titleCase(value: string): string {
  return value
    .replace(/\.md$/u, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
