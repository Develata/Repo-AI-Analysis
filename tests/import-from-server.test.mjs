import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { importReports } from '../scripts/import-from-server.mjs';

function fixture(callback) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'raia-import-test-'));
  const sourceDir = path.join(root, 'source');
  const targetDir = path.join(root, 'target');
  fs.mkdirSync(path.join(sourceDir, 'ai'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'old'), { recursive: true });
  fs.writeFileSync(path.join(sourceDir, 'index.md'), 'source shell must not replace target shell\n');
  fs.writeFileSync(path.join(sourceDir, 'ai', '_index.md'), '# AI\n');
  fs.writeFileSync(path.join(sourceDir, 'ai', 'new.md'), '# New\n');
  fs.writeFileSync(path.join(targetDir, 'index.md'), '# Site-owned shell\n');
  fs.writeFileSync(path.join(targetDir, 'old', 'stale.md'), '# Stale\n');
  try {
    callback({ sourceDir, targetDir });
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

test('dry-run reports stale files without changing the target', () => fixture(({ sourceDir, targetDir }) => {
  const result = importReports({ sourceDir, targetDir, dryRun: true, syncDelete: true });
  assert.equal(result.copied, 0);
  assert.deepEqual(result.stale, [path.join('old', 'stale.md')]);
  assert.equal(fs.existsSync(path.join(targetDir, 'ai', 'new.md')), false);
  assert.equal(fs.existsSync(path.join(targetDir, 'old', 'stale.md')), true);
}));

test('default import copies and canonicalizes indexes but retains stale reports', () => fixture(({ sourceDir, targetDir }) => {
  const result = importReports({ sourceDir, targetDir });
  assert.equal(result.copied, 2);
  assert.equal(result.deleted, 0);
  assert.equal(fs.readFileSync(path.join(targetDir, 'index.md'), 'utf8'), '# Site-owned shell\n');
  assert.equal(fs.readFileSync(path.join(targetDir, 'ai', 'index.md'), 'utf8'), '# AI\n');
  assert.equal(fs.existsSync(path.join(targetDir, 'old', 'stale.md')), true);
}));

test('sync-delete removes only stale reports and empty directories', () => fixture(({ sourceDir, targetDir }) => {
  const result = importReports({ sourceDir, targetDir, syncDelete: true });
  assert.equal(result.deleted, 1);
  assert.equal(fs.existsSync(path.join(targetDir, 'old')), false);
  assert.equal(fs.readFileSync(path.join(targetDir, 'index.md'), 'utf8'), '# Site-owned shell\n');
  assert.equal(fs.existsSync(path.join(targetDir, 'ai', 'new.md')), true);
}));

test('overlapping source and target directories are rejected before mutation', () => fixture(({ sourceDir, targetDir }) => {
  const nestedSource = path.join(targetDir, 'nested-source');
  fs.mkdirSync(nestedSource, { recursive: true });
  assert.throws(
    () => importReports({ sourceDir: nestedSource, targetDir, syncDelete: true }),
    /must not be identical, nested, or overlapping/u,
  );
  assert.throws(
    () => importReports({ sourceDir, targetDir: path.join(sourceDir, 'nested-target'), syncDelete: true }),
    /must not be identical, nested, or overlapping/u,
  );
  assert.equal(fs.existsSync(path.join(targetDir, 'old', 'stale.md')), true);
}));
