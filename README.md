# Github-Repos-AI-Analysis

Structured AI-assisted analyses of open-source GitHub repositories.

This repository is intended to be published directly with GitHub Pages. Reports live as Markdown files under `content/`; `scripts/build-index.mjs` scans them and writes `data/reports.json`, which powers the static index page.

## Workflow

1. Sync or copy reports from the server into `content/`, preserving directory structure.
2. Run:

```bash
npm run build
```

3. Commit `content/`, `data/reports.json`, and site assets.

For a direct import from a local or mounted server directory:

```bash
npm run import -- /opt/data/wiki/github-repo-wiki
npm run build
```

GitHub Pages can serve this repository from the root of the default branch. No CI or custom build step is required.
