# Site optimization contract — 2026-07-12

## Goal

Preserve Repo-AI-Analysis as a static, Markdown-first VitePress site while improving data correctness, browsing usability, accessibility, and build reliability.

## Invariants

1. `docs/analysis/**/*.md` remains the canonical report source.
2. `docs/public/data/reports.json` is a generated, minimal UI projection; it must not become a second evidence store.
3. Home, Analysis, Compare, report pages, RSS, sidebar, and Roll use stable generated/report contracts rather than duplicated literals.
4. No database, account system, runtime backend, or heavyweight UI/search dependency is introduced.
5. Existing report routes and GitHub Pages base-path behavior remain valid.
6. Sync/import deletion is explicit, previewable, and never silently inferred by the UI.

## Acceptance

- Invalid report frontmatter fails with a source-path diagnostic.
- Generated report data omits evidence-only fields and is runtime-validated before use.
- Loading, load failure, empty corpus, and empty filter states are visible and recoverable.
- Home taxonomy links open the corresponding Analysis filter.
- Analysis filters/sort/page are URL-restorable; result pages are bounded.
- Compare exposes selected repositories, limits comparison cardinality, has a legend/text alternative, and supports shareable URL state.
- Report content begins within the first desktop viewport at 1280×720 or is substantially closer than the former y≈925 baseline.
- Decorative motion respects reduced-motion and does not run an O(n³) triangle loop.
- `npm test`, `npm run docs:build`, generated-index drift checks, route smoke tests, and browser console checks pass.
- No push is performed without explicit authorization.
