import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { tagDefinitions } from '../lib/tags';

export const GET: APIRoute = async ({ site }) => {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const projectBase = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const base = new URL(projectBase, site).href.replace(/\/$/, '');
  const urls = [
    `${base}/`,
    `${base}/articles.html`,
    `${base}/livres-ressources.html`,
    `${base}/a-propos.html`,
    ...tagDefinitions.map((tag) => `${base}/tag/${tag.slug}.html`),
    ...articles.map((article) => `${base}/${article.data.slug}.html`)
  ];
  const body = urls.map((url) => {
    const article = articles.find((item) => `${base}/${item.data.slug}.html` === url);
    return article
      ? `  <url><loc>${url}</loc><lastmod>${article.data.updated.toISOString().slice(0, 10)}</lastmod></url>`
      : `  <url><loc>${url}</loc></url>`;
  }).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
