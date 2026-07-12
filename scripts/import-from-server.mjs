import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

function usage() {
  console.error('Usage: npm run import -- <source-report-directory> [--dry-run] [--sync-delete]');
}

function listMarkdown(root) {
  if (!fs.existsSync(root)) return [];
  const result = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) result.push(...listMarkdown(file));
    else if (entry.isFile() && entry.name.endsWith('.md')) result.push(file);
  }
  return result.sort();
}

function targetRelativePath(sourceDir, file) {
  const relative = path.relative(sourceDir, file);
  if (!relative.includes(path.sep) && ['index.md', '_index.md'].includes(relative)) return null;
  const parts = relative.split(path.sep);
  if (parts.at(-1) === '_index.md') parts[parts.length - 1] = 'index.md';
  return parts.join(path.sep);
}

function removeEmptyDirectories(root) {
  const directories = [];
  function visit(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const child = path.join(dir, entry.name);
        visit(child);
        directories.push(child);
      }
    }
  }
  if (fs.existsSync(root)) visit(root);
  for (const dir of directories.reverse()) {
    if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
  }
}

function canonicalDirectory(directory) {
  const resolved = path.resolve(directory);
  return fs.existsSync(resolved) ? fs.realpathSync(resolved) : resolved;
}

function isWithin(parent, candidate) {
  const relative = path.relative(parent, candidate);
  return relative === '' || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative));
}

function directoriesOverlap(left, right) {
  const canonicalLeft = canonicalDirectory(left);
  const canonicalRight = canonicalDirectory(right);
  return isWithin(canonicalLeft, canonicalRight) || isWithin(canonicalRight, canonicalLeft);
}

export function importReports({ sourceDir, targetDir, dryRun = false, syncDelete = false }) {
  if (directoriesOverlap(sourceDir, targetDir)) {
    throw new Error('Source and target directories must not be identical, nested, or overlapping.');
  }
  const desired = new Map();
  for (const sourceFile of listMarkdown(sourceDir)) {
    const relative = targetRelativePath(sourceDir, sourceFile);
    if (!relative) continue;
    if (desired.has(relative)) throw new Error(`Multiple source files map to ${relative}`);
    desired.set(relative, sourceFile);
  }

  const current = listMarkdown(targetDir)
    .map((file) => path.relative(targetDir, file))
    .filter((relative) => relative !== 'index.md');
  const stale = current.filter((relative) => !desired.has(relative));

  console.log(`Import plan: ${desired.size} source report(s), ${stale.length} stale target file(s).`);
  if (stale.length > 0) {
    console.log(`${syncDelete ? 'Will delete' : 'Stale files retained (use --sync-delete to remove)'}:`);
    for (const relative of stale) console.log(`  - ${relative.split(path.sep).join('/')}`);
  }
  if (dryRun) {
    console.log('Dry run: no files changed.');
    return { copied: 0, deleted: 0, stale };
  }

  for (const [relative, sourceFile] of desired) {
    const target = path.join(targetDir, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(sourceFile, target);
  }

  let deleted = 0;
  if (syncDelete) {
    for (const relative of stale) {
      fs.rmSync(path.join(targetDir, relative));
      deleted += 1;
    }
    removeEmptyDirectories(targetDir);
  }

  console.log(`Imported ${desired.size} Markdown report(s) from ${sourceDir} into ${targetDir}; deleted ${deleted}.`);
  return { copied: desired.size, deleted, stale };
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const syncDelete = args.includes('--sync-delete');
  const unknownFlags = args.filter((arg) => arg.startsWith('--') && !['--dry-run', '--sync-delete'].includes(arg));
  const positional = args.filter((arg) => !arg.startsWith('--'));
  if (unknownFlags.length > 0 || positional.length !== 1) {
    usage();
    process.exitCode = 1;
    return;
  }

  const root = process.cwd();
  const sourceDir = path.resolve(positional[0]);
  const targetDir = path.join(root, 'docs', 'analysis');
  if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) {
    console.error(`Source directory does not exist: ${sourceDir}`);
    process.exitCode = 1;
    return;
  }
  if (directoriesOverlap(sourceDir, targetDir)) {
    console.error('Source and target directories must not be identical, nested, or overlapping.');
    process.exitCode = 1;
    return;
  }

  importReports({ sourceDir, targetDir, dryRun, syncDelete });
}

const invoked = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (invoked === path.resolve(fileURLToPath(import.meta.url))) main();
