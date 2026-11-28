import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initAnalytics } from './analytics';

// The page HTML is pre-rendered at build time (for Google & AI crawlers).
// Hydrate it in place so the first paint is kept (fast LCP); fall back to a
// fresh render if the page was not pre-rendered.
const rootEl = document.getElementById('root') as HTMLElement;
const app = (
  <React.StrictMode>
    <App initialPath={window.location.pathname} />
  </React.StrictMode>
);
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, app, {
    onRecoverableError: () => {
      /* minor client/server differences are re-rendered silently */
    },
  });
} else {
  ReactDOM.createRoot(rootEl).render(app);
}

initAnalytics();

// Register PWA Service Worker
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
