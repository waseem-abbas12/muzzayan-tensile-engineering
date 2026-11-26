import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// The page HTML is pre-rendered at build time (for Google & AI crawlers).
// The client re-renders it on load so all interactive features work.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App initialPath={window.location.pathname} />
  </React.StrictMode>
);

// Register PWA Service Worker
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
