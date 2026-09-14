import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const articlesDir = new URL('../src/content/articles/', import.meta.url);
const files = (await readdir(articlesDir)).filter((name) => name.endsWith('.md'));
const allowedClasses = new Set([
  'callout',
  'highlight',
  'callout-label',
  'quote-pair',
  'quote',
  'bad',
  'good',
  'example-list',
  'closing-line',
  'affiliate-book-box',
  'affiliate-book-label',
  'affiliate-book-author',
  'affiliate-book-note',
  'affiliate-book-actions',
  'affiliate-book-button',
  'affiliate-book-button-secondary',
  'affiliate-disclosure',
]);
const requiredFrontmatter = [
  'title',
  'description',
  'date',
  'category',
  'image',
  'imageAlt',
  'slug',
  'readingTime',
];

const errors = [];

for (const file of files) {
  const path = join(articlesDir.pathname, file);
  const content = await readFile(path, 'utf8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

  if (!frontmatterMatch) {
    errors.push(`${file}: frontmatter manquant.`);
    continue;
  }

  for (const key of requiredFrontmatter) {
    if (!new RegExp(`^${key}:\\s+`, 'm').test(frontmatterMatch[1])) {
      errors.push(`${file}: champ frontmatter manquant : ${key}.`);
    }
  }

  const body = content.slice(frontmatterMatch[0].length);
  const classMatches = [...body.matchAll(/class="([^"]+)"/g)];
  for (const [, value] of classMatches) {
    for (const className of value.split(/\s+/)) {
      if (!allowedClasses.has(className)) {
        errors.push(`${file}: classe visuelle non standard : "${className}".`);
      }
    }
  }

  const lines = body.split('\n');
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (/^«[^»]+»$/.test(trimmed)) {
      errors.push(
        `${file}:${index + 1}: citation isolée non formatée. Utiliser callout, quote-pair ou example-list.`
      );
    }
  });
}

if (errors.length) {
  console.error('\nFormatage des articles incohérent :\n');
  for (const error of errors) console.error(`- ${error}`);
  console.error('\nVoir docs/article-style.md pour les conventions.\n');
  process.exit(1);
}

console.log(`✓ Formatage vérifié pour ${files.length} article(s).`);
