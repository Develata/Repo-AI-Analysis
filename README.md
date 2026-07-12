# Repo-AI-Analysis

Structured AI-assisted analyses of open-source GitHub repositories.

This repository is a VitePress GitHub Pages site. Reports live as Markdown files under `docs/analysis/`; `scripts/build-index.mjs` scans them and writes `docs/public/data/reports.json`, which powers the Home and Compare views.
The VitePress build also emits RSS feeds at `rss.xml` and `rss/analysis.xml`, limited to the 20 latest dated analyses.

## Workflow

1. Sync or copy reports from the server into `docs/analysis/`, preserving directory structure.
2. Run the full local gate:

```bash
npm run check
```

This runs Node contract tests, `vue-tsc`, the production build, and generated-route/RSS/asset validation.

3. Commit `docs/analysis/`, `docs/public/data/reports.json`, and the relevant source changes.

For a direct import from a local or mounted server directory:

```bash
# Preview the import plan without changing files.
npm run import -- /opt/data/wiki/github-repo-wiki --dry-run --sync-delete

# Mirror the source and explicitly remove stale target reports.
npm run import -- /opt/data/wiki/github-repo-wiki --sync-delete
npm run check
```

Without `--sync-delete`, the importer preserves target-only reports and prints them as stale.

For local development:

```bash
npm run build
npm run docs:dev
```

GitHub Pages should publish the generated VitePress output from `docs/.vitepress/dist`.
