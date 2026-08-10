import { withBase } from 'vitepress';

export type PagefindSubResult = {
  title?: string;
  url?: string;
  plain_excerpt?: string;
};

export type PagefindResultData = {
  url?: string;
  plain_excerpt?: string;
  meta?: { title?: string };
  sub_results?: PagefindSubResult[];
};

type PagefindSearchResult = {
  data(): Promise<PagefindResultData>;
};

export type PagefindSearchResponse = {
  results: PagefindSearchResult[];
};

export type PagefindApi = {
  options(options: { basePath: string; baseUrl: string }): Promise<void> | void;
  init(): Promise<void>;
  search(query: string): Promise<PagefindSearchResponse>;
};

let pagefindPromise: Promise<PagefindApi> | null = null;

export function loadPagefind(): Promise<PagefindApi> {
  if (pagefindPromise) return pagefindPromise;
  const moduleUrl = withBase('/pagefind/pagefind.js');
  pagefindPromise = import(/* @vite-ignore */ moduleUrl)
    .then(async (module: unknown) => {
      const api = module as PagefindApi;
      if (typeof api.options !== 'function' || typeof api.init !== 'function' || typeof api.search !== 'function') {
        throw new Error('Pagefind module has an invalid API');
      }
      await api.options({
        basePath: withBase('/pagefind/'),
        baseUrl: withBase('/'),
      });
      await api.init();
      return api;
    })
    .catch((error: unknown) => {
      pagefindPromise = null;
      throw error;
    });
  return pagefindPromise;
}

export function sitePageKey(href: string): string {
  const base = withBase('/').replace(/\/$/u, '');
  let pathname: string;
  try {
    pathname = new URL(href, window.location.origin).pathname;
  } catch {
    pathname = href.split(/[?#]/u)[0];
  }
  if (base && pathname.startsWith(`${base}/`)) pathname = pathname.slice(base.length);
  pathname = pathname.replace(/\/index\.html$/u, '/').replace(/\.html$/u, '').replace(/\/$/u, '');
  return pathname || '/';
}
