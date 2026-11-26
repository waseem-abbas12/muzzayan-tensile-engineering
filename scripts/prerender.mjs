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

// Real 404 page (served by Vercel with HTTP 404 for unknown URLs; no JS, noindex)
const notFound = template
  .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, '<title>Page not found | Muzzayan Tensile Engineering</title>\n    <meta name="robots" content="noindex" />')
  .replace(/<script type="module"[^>]*><\/script>/g, '')
  .replace('<div id="root"></div>', `<div id="root"><main style="font-family:system-ui,sans-serif;max-width:640px;margin:15vh auto;padding:0 24px;text-align:center">
    <h1 style="font-size:28px;margin:0 0 12px">Page not found</h1>
    <p style="color:#475569;line-height:1.6">The page you are looking for does not exist or has moved.</p>
    <p style="margin-top:24px"><a href="/" style="color:#b8860b;font-weight:700">Go to the homepage</a> &middot; <a href="/car-parking-shades" style="color:#b8860b;font-weight:700">Car parking shades</a> &middot; <a href="/contact" style="color:#b8860b;font-weight:700">Contact</a></p>
  </main></div>`);
fs.writeFileSync(path.join(dist, '404.html'), notFound);

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), buildSitemap(today));
fs.writeFileSync(path.join(dist, 'llms.txt'), buildLlmsTxt());
console.log(`sitemap.xml (${routes.length} URLs) + llms.txt written`);

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
