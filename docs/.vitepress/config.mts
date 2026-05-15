import { defineConfig } from 'vitepress';
import { nav } from './configs/nav';
import { sidebar } from './configs/sidebar';
import { generateRssFeeds, rssDevServer } from './rss/index';

const base = process.env.BASE_PATH ?? '/Repo-AI-Analysis/';

export default defineConfig({
  lang: 'zh-CN',
  title: 'Repo-AI-Analysis',
  description: 'Structured AI-assisted GitHub repository analyses.',
  base,
  cleanUrls: true,
  buildEnd: generateRssFeeds,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
  ],
  markdown: {
    lineNumbers: true,
  },
  vite: {
    plugins: [
      rssDevServer(),
    ],
  },
  themeConfig: {
    siteTitle: 'Repo-AI-Analysis',
    nav,
    sidebar,
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Develata/Repo-AI-Analysis' },
    ],
    outline: {
      level: [2, 4],
      label: '目录',
    },
  },
});
