# Repo-AI-Analysis

Structured AI-assisted analyses of open-source GitHub repositories.

This repository is a VitePress GitHub Pages site. Reports live as Markdown files under `docs/analysis/`; `scripts/build-index.mjs` scans them and writes `docs/public/data/reports.json`, which powers the Home and Compare views.
The VitePress build also emits RSS feeds at `rss.xml` and `rss/analysis.xml`, limited to the 20 latest dated analyses.

## Workflow

1. Sync or copy reports from the server into `docs/analysis/`, preserving directory structure.
2. Run:

```bash
npm run docs:build
```

3. Commit `docs/analysis/`, `docs/public/data/reports.json`, and site assets.

For a direct import from a local or mounted server directory:

```bash
npm run import -- /opt/data/wiki/github-repo-wiki
npm run docs:build
```

For local development:

```bash
npm run build
npm run docs:dev
```

GitHub Pages should publish the generated VitePress output from `docs/.vitepress/dist`.
