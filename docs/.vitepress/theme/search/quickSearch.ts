import { withBase } from 'vitepress';

export type QuickSearchItem = {
  route: string;
  title: string;
  directory: string;
  tags: string[];
  language: string;
  summary: string;
};

type QuickSearchPayload = {
  schema_version: number;
  count: number;
  items: QuickSearchItem[];
};

export type PreparedQuickSearchItem = QuickSearchItem & {
  titleText: string;
  directoryText: string;
  tagsText: string;
  languageText: string;
  summaryText: string;
  combinedText: string;
};

export type QuickSearchHit = {
  href: string;
  pageKey: string;
  title: string;
  context: string;
  excerpt: string;
  source: '仓库';
  score: number;
};

let quickIndexPromise: Promise<PreparedQuickSearchItem[]> | null = null;

export function normalizeSearchText(value: unknown): string {
  return String(value ?? '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}+#]+/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim();
}

function isQuickSearchItem(value: unknown): value is QuickSearchItem {
  if (!value || typeof value !== 'object') return false;
  const item = value as Partial<QuickSearchItem>;
  return typeof item.route === 'string'
    && item.route.startsWith('/analysis/')
    && typeof item.title === 'string'
    && item.title.length > 0
    && typeof item.directory === 'string'
    && Array.isArray(item.tags)
    && item.tags.every((tag) => typeof tag === 'string')
    && typeof item.language === 'string'
    && typeof item.summary === 'string';
}

function prepare(item: QuickSearchItem): PreparedQuickSearchItem {
  const titleText = normalizeSearchText(item.title);
  const directoryText = normalizeSearchText(item.directory);
  const tagsText = normalizeSearchText(item.tags.join(' '));
  const languageText = normalizeSearchText(item.language);
  const summaryText = normalizeSearchText(item.summary);
  return {
    ...item,
    titleText,
    directoryText,
    tagsText,
    languageText,
    summaryText,
    combinedText: `${titleText} ${directoryText} ${tagsText} ${languageText} ${summaryText}`,
  };
}

export function loadQuickSearchIndex(): Promise<PreparedQuickSearchItem[]> {
  if (quickIndexPromise) return quickIndexPromise;
  quickIndexPromise = fetch(withBase('/data/search-quick.json'))
    .then(async (response) => {
      if (!response.ok) throw new Error(`Quick search index request failed (${response.status})`);
      const payload: unknown = await response.json();
      if (!payload || typeof payload !== 'object') throw new Error('Quick search index is not an object');
      const index = payload as Partial<QuickSearchPayload>;
      if (index.schema_version !== 1) throw new Error(`Unsupported quick search schema: ${String(index.schema_version)}`);
      if (!Array.isArray(index.items) || !index.items.every(isQuickSearchItem)) {
        throw new Error('Quick search index contains invalid items');
      }
      if (index.count !== index.items.length) throw new Error('Quick search index count does not match its items');
      return index.items.map(prepare);
    })
    .catch((error: unknown) => {
      quickIndexPromise = null;
      throw error;
    });
  return quickIndexPromise;
}

function fieldScore(field: string, token: string, weight: number): number {
  const position = field.indexOf(token);
  return position < 0 ? 0 : weight + Math.max(0, 12 - Math.min(position, 12));
}

export function searchQuickIndex(
  items: PreparedQuickSearchItem[],
  rawQuery: string,
  limit = 8,
): QuickSearchHit[] {
  const phrase = normalizeSearchText(rawQuery);
  if (!phrase) return [];
  const tokens = phrase.split(' ').filter(Boolean);

  return items
    .map((item) => {
      if (!tokens.every((token) => item.combinedText.includes(token))) return null;
      let score = 0;
      if (item.titleText === phrase) score += 300;
      else if (item.titleText.startsWith(phrase)) score += 190;
      else if (item.titleText.includes(phrase)) score += 130;
      if (item.directoryText === phrase) score += 110;
      else if (item.directoryText.includes(phrase)) score += 70;
      if (item.tagsText.includes(phrase)) score += 90;
      if (item.languageText.includes(phrase)) score += 55;
      if (item.summaryText.includes(phrase)) score += 24;
      for (const token of tokens) {
        score += fieldScore(item.titleText, token, 38);
        score += fieldScore(item.directoryText, token, 22);
        score += fieldScore(item.tagsText, token, 18);
        score += fieldScore(item.languageText, token, 12);
        score += fieldScore(item.summaryText, token, 4);
      }
      return {
        href: withBase(item.route),
        pageKey: item.route,
        title: item.title,
        context: item.directory,
        excerpt: item.summary,
        source: '仓库' as const,
        score,
      };
    })
    .filter((item): item is QuickSearchHit => Boolean(item))
    .sort((left, right) => right.score - left.score || left.title.localeCompare(right.title, 'en'))
    .slice(0, limit);
}
