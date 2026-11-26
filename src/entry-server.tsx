// Build-time only: renders each route to static HTML (see scripts/prerender.mjs)
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export { routes, buildHeadHtml, buildSitemap, buildLlmsTxt } from './seo/routes';

export function render(path: string): string {
  return renderToString(
    <React.StrictMode>
      <App initialPath={path} />
    </React.StrictMode>
  );
}
