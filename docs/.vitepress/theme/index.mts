import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import CompareView from './components/CompareView.vue';
import DimensionsRadar from './components/DimensionsRadar.vue';
import RepoHome from './components/RepoHome.vue';
import AnalysisIndex from './components/AnalysisIndex.vue';
import RepoReportHeader from './components/RepoReportHeader.vue';
import RandomJump from './components/RandomJump.vue';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(RandomJump),
      'doc-before': () => h(RepoReportHeader),
    });
  },
  enhanceApp({ app }: any) {
    app.component('RepoHome', RepoHome);
    app.component('AnalysisIndex', AnalysisIndex);
    app.component('CompareView', CompareView);
    app.component('DimensionsRadar', DimensionsRadar);
    app.component('RandomJump', RandomJump);
  },
};
