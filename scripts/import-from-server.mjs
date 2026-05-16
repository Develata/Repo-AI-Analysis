import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const source = process.argv[2];
if (!source) {
  console.error('Usage: npm run import -- <source-report-directory>');
  process.exit(1);
}

const root = process.cwd();
const sourceDir = path.resolve(source);
const targetDir = path.join(root, 'docs', 'analysis');

if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) {
  console.error(`Source directory does not exist: ${sourceDir}`);
  process.exit(1);
}

function copyMarkdownTree(fromDir, toDir) {
  for (const entry of fs.readdirSync(fromDir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const from = path.join(fromDir, entry.name);
    const to = path.join(toDir, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(to, { recursive: true });
      copyMarkdownTree(from, to);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const targetName = entry.name === '_index.md' ? 'index.md' : entry.name;
      const target = path.join(toDir, targetName);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(from, target);
    }
  }
}

copyMarkdownTree(sourceDir, targetDir);
console.log(`Imported Markdown reports from ${sourceDir} into ${targetDir}`);
