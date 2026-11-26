// Build-time static rendering: writes a full HTML file for every route so that
// Google, Bing and AI crawlers (GPTBot, ClaudeBot, PerplexityBot…) see real content.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');

const { render, routes, buildHeadHtml, buildSitemap, buildLlmsTxt } = await import(pathToFileURL(serverEntry).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--seo-start-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing the <!--seo-start--> markers or the empty #root div');
}

for (const route of routes) {
  const appHtml = render(route.path);
  const html = template
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, buildHeadHtml(route))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outFile = route.path === '/' ? path.join(dist, 'index.html') : path.join(dist, route.path.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`prerendered ${route.path.padEnd(32)} ${(html.length / 1024).toFixed(0)} KB`);
}

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), buildSitemap(today));
fs.writeFileSync(path.join(dist, 'llms.txt'), buildLlmsTxt());
console.log(`sitemap.xml (${routes.length} URLs) + llms.txt written`);

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
