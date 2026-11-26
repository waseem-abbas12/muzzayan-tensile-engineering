import { buildJsonLd, SITE_URL, DEFAULT_OG_IMAGE, type RouteDef } from './routes';

const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

/** Client-side counterpart of buildHeadHtml(): keeps head tags correct after in-app navigation. */
export function applyHead(route: RouteDef) {
  if (typeof document === 'undefined') return;
  const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const img = `${SITE_URL}${route.ogImage ?? DEFAULT_OG_IMAGE}`;

  document.title = route.title;
  setMeta('name', 'description', route.description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:title', route.title);
  setMeta('property', 'og:description', route.description);
  setMeta('property', 'og:image', img);
  setMeta('name', 'twitter:title', route.title);
  setMeta('name', 'twitter:description', route.description);
  setMeta('name', 'twitter:image', img);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');
  scripts.forEach((s, i) => i > 0 && s.remove());
  let ld = scripts[0] as HTMLScriptElement | undefined;
  if (!ld) {
    ld = document.createElement('script');
    ld.type = 'application/ld+json';
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify(buildJsonLd(route));
}
