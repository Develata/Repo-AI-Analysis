import fs from 'node:fs';
import path from 'node:path';

function walkFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(file) : [file];
  });
}

function routeCandidates(route) {
  const relative = route.replace(/^\/+|\/+$/gu, '');
  return route.endsWith('/')
    ? [path.join(relative, 'index.html')]
    : [`${relative}.html`, path.join(relative, 'index.html')];
}

function resolveRouteFile(distDir, route) {
  return routeCandidates(route)
    .map((candidate) => path.join(distDir, candidate))
    .find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
}

/**
 * Bind Pagefind's sharded output to the complete built content corpus.
 * Throws when page metadata, fragments, or canonical report routes are incomplete.
 */
export function validatePagefindCoverage({ distDir, pagefindDir, reportRoutes }) {
  const entry = JSON.parse(fs.readFileSync(path.join(pagefindDir, 'pagefind-entry.json'), 'utf8'));
  const languages = Object.values(entry.languages ?? {});
  if (languages.length === 0 || languages.some((language) => !Number.isInteger(language.page_count) || language.page_count < 0)) {
    throw new Error('invalid Pagefind page counts');
  }

  const pageCount = languages.reduce((total, language) => total + language.page_count, 0);
  const eligiblePages = walkFiles(distDir)
    .filter((file) => file.endsWith('.html'))
    .filter((file) => /\bid=["']VPContent["']/u.test(fs.readFileSync(file, 'utf8')));
  const eligiblePageSet = new Set(eligiblePages.map((file) => path.resolve(file)));
  const fragments = walkFiles(path.join(pagefindDir, 'fragment')).filter((file) => file.endsWith('.pf_fragment'));
  const indexes = walkFiles(path.join(pagefindDir, 'index')).filter((file) => file.endsWith('.pf_index'));

  if (pageCount !== eligiblePages.length) {
    throw new Error(`Pagefind page coverage mismatch: entry=${pageCount}, eligible HTML=${eligiblePages.length}`);
  }
  if (fragments.length !== eligiblePages.length) {
    throw new Error(`Pagefind fragment coverage mismatch: fragments=${fragments.length}, eligible HTML=${eligiblePages.length}`);
  }
  if (indexes.length === 0) throw new Error('missing Pagefind index shards');

  const resolvedReportRoutes = reportRoutes.map((route) => ({ route, file: resolveRouteFile(distDir, route) }));
  const missingRoutes = resolvedReportRoutes.filter(({ file }) => !file).map(({ route }) => route);
  if (missingRoutes.length > 0) {
    throw new Error(`missing built report routes: ${missingRoutes.slice(0, 3).join(', ')}`);
  }
  const ineligibleRoutes = resolvedReportRoutes
    .filter(({ file }) => file && !eligiblePageSet.has(path.resolve(file)))
    .map(({ route }) => route);
  if (ineligibleRoutes.length > 0) {
    throw new Error(`report routes missing Pagefind root: ${ineligibleRoutes.slice(0, 3).join(', ')}`);
  }

  return {
    eligiblePages: eligiblePages.length,
    fragments: fragments.length,
    indexShards: indexes.length,
  };
}