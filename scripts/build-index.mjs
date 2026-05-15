import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const contentDir = path.join(root, 'content');
const outputFile = path.join(root, 'data', 'reports.json');

function parseScalar(raw) {
  const value = raw.trim();
  if (value === '') return '';
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+(?:\.\d+)?$/u.test(value)) return Number(value);
  if (value.startsWith('[') && value.endsWith(']')) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(',').map((item) => parseScalar(item.trim()));
  }
  return value.replace(/^['"]|['"]$/gu, '');
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/u);
  if (!match) return {};
  const lines = match[1].split(/\r?\n/u);
  const data = {};
  let currentKey = null;

  for (const line of lines) {
    if (!line.trim()) continue;

    const nested = line.match(/^\s{2,}([A-Za-z0-9_-]+):\s*(.*)$/u);
    if (nested && currentKey) {
      data[currentKey] ??= {};
      data[currentKey][nested[1]] = parseScalar(nested[2]);
      continue;
    }

    const listItem = line.match(/^\s{2,}-\s*(.*)$/u);
    if (listItem && currentKey) {
      data[currentKey] ??= [];
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(parseScalar(listItem[1]));
      continue;
    }

    const top = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/u);
    if (!top) continue;
    currentKey = top[1];
    data[currentKey] = top[2] === '' ? undefined : parseScalar(top[2]);
  }

  return data;
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...walk(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      result.push(fullPath);
    }
  }
  return result;
}

function makeSummary(markdown) {
  const body = markdown
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/u, '')
    .replace(/```[\s\S]*?```/gu, '')
    .split(/\r?\n/u)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#') && !line.startsWith('|') && !line.startsWith('>'))[0];

  return body?.replace(/\*\*/gu, '').slice(0, 180) ?? '';
}

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

const files = walk(contentDir);
const reports = files.map((file) => {
  const markdown = fs.readFileSync(file, 'utf8');
  const data = parseFrontmatter(markdown);
  const relative = toPosixPath(path.relative(root, file));
  const slug = toPosixPath(path.relative(contentDir, file)).replace(/\.md$/u, '');

  return {
    slug,
    path: relative,
    title: data.title ?? path.basename(file, '.md'),
    repo_url: data.repo_url ?? '',
    category: data.category ?? slug.split('/').slice(0, -1).join('/') ?? 'uncategorized',
    tags: Array.isArray(data.tags) ? data.tags : [],
    primary_language: data.primary_language ?? '',
    license: data.license ?? '',
    stars: data.stars ?? 0,
    forks: data.forks ?? 0,
    status: data.status ?? '',
    sharing_candidate: Boolean(data.sharing_candidate),
    ratings: data.ratings ?? {},
    overall_score: data.overall_score ?? 0,
    last_checked: data.last_checked ?? '',
    last_verified: data.last_verified ?? '',
    updated: data.updated ?? '',
    sources: Array.isArray(data.sources) ? data.sources : [],
    summary: makeSummary(markdown),
  };
}).sort((a, b) => Number(b.overall_score) - Number(a.overall_score) || a.title.localeCompare(b.title));

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify({
  count: reports.length,
  reports,
}, null, 2)}\n`);

console.log(`Indexed ${reports.length} report(s) -> ${toPosixPath(path.relative(root, outputFile))}`);
