import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';
import {
  buildHomeSummary,
  buildQuickSearchIndex,
  buildReportIndex,
  DIMENSION_KEYS,
  makeSummary,
  REPORT_INDEX_SCHEMA_VERSION,
} from '../scripts/build-index.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function validMarkdown(overrides = '') {
  const ratings = DIMENSION_KEYS.map((key) => `  ${key}: 4`).join('\n');
  return `---
title: "Example"
type: repository-analysis
repo_url: "https://github.com/example/repo"
category: "ai/example"
tags: ["agent", "C++"]
primary_language: "Rust"
stars: 42
status: "active"
last_checked: 2026-07-12
updated: 2026-07-12
ratings:
${ratings}
overall_score: 4
sources:
  - "path with \\\\command and {\\\"json\\\": true}"
${overrides}---

# Example

A useful **summary** paragraph.
`;
}

function withTempAnalysis(callback) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'raia-index-test-'));
  const analysisDir = path.join(root, 'docs', 'analysis');
  fs.mkdirSync(path.join(analysisDir, 'ai', 'example'), { recursive: true });
  try {
    return callback({ root, analysisDir });
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

test('buildReportIndex emits the minimal versioned UI contract', () => withTempAnalysis(({ root, analysisDir }) => {
  fs.writeFileSync(path.join(analysisDir, 'index.md'), '# shell\n');
  fs.writeFileSync(path.join(analysisDir, 'ai', 'example', '_index.md'), '# category\n');
  fs.writeFileSync(path.join(analysisDir, 'ai', 'example', 'repo.md'), validMarkdown());
  const payload = buildReportIndex({ root, analysisDir, write: false });
  assert.equal(payload.schema_version, REPORT_INDEX_SCHEMA_VERSION);
  assert.equal(payload.count, 1);
  assert.equal(payload.reports[0].slug, 'ai/example/repo');
  assert.equal(payload.reports[0].summary, 'A useful summary paragraph.');
  assert.equal('sources' in payload.reports[0], false);
  assert.equal('source_path' in payload.reports[0], false);
  assert.equal('forks' in payload.reports[0], false);

  const home = buildHomeSummary(payload.reports);
  assert.equal(home.count, 1);
  assert.equal(home.page_size, 4);
  assert.equal(home.latest[0].slug, 'ai/example/repo');
  assert.equal(home.categories[0].path, 'ai');
  assert.equal('repo_url' in home.latest[0], false);
  assert.equal('tags' in home.latest[0], false);

  const quick = buildQuickSearchIndex(payload.reports);
  assert.equal(quick.count, 1);
  assert.deepEqual(quick.items[0].tags, ['agent', 'C++']);
  assert.equal(quick.items[0].language, 'Rust');
  assert.equal('ratings' in quick.items[0], false);
}));

test('invalid ratings fail with a source-path diagnostic', () => withTempAnalysis(({ root, analysisDir }) => {
  const file = path.join(analysisDir, 'ai', 'example', 'repo.md');
  fs.writeFileSync(file, validMarkdown().replace('  security: 4', '  security: 8'));
  assert.throws(
    () => buildReportIndex({ root, analysisDir, write: false }),
    /docs\/analysis\/ai\/example\/repo\.md: ratings\.security must be a finite number/u,
  );
}));

test('makeSummary skips headings, quotes, tables, and fenced code', () => {
  const content = '# Heading\n\n> quote\n\n| a | b |\n\n```js\nignored()\n```\n\nFirst **real** paragraph.\n';
  assert.equal(makeSummary(content), 'First real paragraph.');
});

test('the checked-in corpus satisfies the report contract', () => {
  const payload = buildReportIndex({ root: repoRoot, write: false });
  assert.ok(payload.count > 0);
  assert.equal(payload.count, payload.reports.length);
  assert.equal(new Set(payload.reports.map((item) => item.slug)).size, payload.count);
  assert.ok(payload.reports.every((item) => !('sources' in item)));

  const home = buildHomeSummary(payload.reports);
  const gzipBytes = zlib.gzipSync(JSON.stringify(home), { level: 9 }).byteLength;
  assert.equal(home.count, payload.count);
  assert.equal(home.latest.length, Math.min(payload.count, 12));
  assert.ok(home.categories.length > 0);
  assert.ok(gzipBytes <= 10 * 1024, `home summary exceeds 10 KiB gzip budget: ${gzipBytes} bytes`);

  const quick = buildQuickSearchIndex(payload.reports);
  const quickGzipBytes = zlib.gzipSync(JSON.stringify(quick), { level: 9 }).byteLength;
  assert.equal(quick.count, payload.count);
  assert.ok(quick.items.every((item) => item.route.startsWith('/analysis/')));
  assert.ok(quickGzipBytes <= 35 * 1024, `quick search index exceeds 35 KiB gzip budget: ${quickGzipBytes} bytes`);
});
