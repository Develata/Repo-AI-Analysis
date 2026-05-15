import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  { text: 'Analysis', link: '/analysis/' },
  { text: 'Compare', link: '/compare/' },
  {
    text: 'About',
    items: [
      { text: 'Me', link: '/about/me' },
      { text: 'Homepages', link: 'https://develata.github.io' },
      { text: 'RSS', link: '/about/rss' },
    ],
  },
];
