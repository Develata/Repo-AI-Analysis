import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { validatePagefindCoverage } from '../scripts/pagefind-validation.mjs';

function withPagefindFixture(callback) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'raia-pagefind-test-'));
  const distDir = path.join(root, 'dist');
  const pagefindDir = path.join(distDir, 'pagefind');
  fs.mkdirSync(path.join(pagefindDir, 'fragment'), { recursive: true });
  fs.mkdirSync(path.join(pagefindDir, 'index'), { recursive: true });
  fs.mkdirSync(path.join(distDir, 'analysis'), { recursive: true });
  fs.writeFileSync(path.join(distDir, 'index.html'), '<main id="VPContent">Home</main>');
  fs.writeFileSync(path.join(distDir, 'analysis', 'report.html'), '<main id="VPContent">Report</main>');
  fs.writeFileSync(path.join(distDir, '404.html'), '<main>Not indexed</main>');
  fs.writeFileSync(path.join(pagefindDir, 'pagefind-entry.json'), JSON.stringify({
    languages: { 'zh-cn': { page_count: 2 } },
  }));
  fs.writeFileSync(path.join(pagefindDir, 'fragment', 'home.pf_fragment'), 'home');
  fs.writeFileSync(path.join(pagefindDir, 'fragment', 'report.pf_fragment'), 'report');
  fs.writeFileSync(path.join(pagefindDir, 'index', 'words.pf_index'), 'index');
  try {
    return callback({ distDir, pagefindDir });
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

test('Pagefind coverage validation rejects a partial fragment corpus', () => withPagefindFixture(({ distDir, pagefindDir }) => {
  const options = { distDir, pagefindDir, reportRoutes: ['/analysis/report'] };
  assert.deepEqual(validatePagefindCoverage(options), {
    eligiblePages: 2,
    fragments: 2,
    indexShards: 1,
  });

  fs.rmSync(path.join(pagefindDir, 'fragment', 'report.pf_fragment'));
  assert.throws(
    () => validatePagefindCoverage(options),
    /Pagefind fragment coverage mismatch: fragments=1, eligible HTML=2/u,
  );
}));

test('Pagefind coverage validation rejects an existing report outside the indexing root', () => withPagefindFixture(({ distDir, pagefindDir }) => {
  fs.writeFileSync(path.join(distDir, 'analysis', 'report.html'), '<main>Report</main>');
  fs.writeFileSync(path.join(pagefindDir, 'pagefind-entry.json'), JSON.stringify({
    languages: { 'zh-cn': { page_count: 1 } },
  }));
  fs.rmSync(path.join(pagefindDir, 'fragment', 'report.pf_fragment'));

  assert.throws(
    () => validatePagefindCoverage({ distDir, pagefindDir, reportRoutes: ['/analysis/report'] }),
    /report routes missing Pagefind root: \/analysis\/report/u,
  );
}));