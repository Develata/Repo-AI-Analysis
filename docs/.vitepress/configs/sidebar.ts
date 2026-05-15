import type { DefaultTheme } from 'vitepress';
import { resolveSidebarItems } from '../utils/sidebar';

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/analysis/': [
    { text: 'Overview', link: '/analysis/' },
    ...resolveSidebarItems('analysis', '/analysis/'),
  ],
};
