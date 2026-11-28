// Ads & analytics tracking. Everything is off until the IDs are set as Vercel
// environment variables, so the site stays fast and clean without them:
//   VITE_GTAG_IDS          comma list, e.g. "G-XXXXXXX,AW-123456789"
//   VITE_GADS_CALL_SEND_TO Google Ads conversion for call/WhatsApp clicks, e.g. "AW-123456789/AbC-dEfGh"
//   VITE_GADS_FORM_SEND_TO Google Ads conversion for survey/contact forms
//   VITE_META_PIXEL_ID     Meta (Facebook/Instagram) Pixel ID
// Scripts load after the page has finished loading, so they never slow the first paint.

/* eslint-disable @typescript-eslint/no-explicit-any */
const env = (import.meta as any).env ?? {};
const GTAG_IDS: string[] = String(env.VITE_GTAG_IDS ?? '').split(',').map((s: string) => s.trim()).filter(Boolean);
const CALL_SEND_TO: string = env.VITE_GADS_CALL_SEND_TO ?? '';
const FORM_SEND_TO: string = env.VITE_GADS_FORM_SEND_TO ?? '';
const PIXEL_ID: string = env.VITE_META_PIXEL_ID ?? '';

const w = (typeof window !== 'undefined' ? window : undefined) as any;

function loadScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function initGtag() {
  if (!GTAG_IDS.length) return;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag('js', new Date());
  GTAG_IDS.forEach((id) => w.gtag('config', id));
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GTAG_IDS[0])}`);
}

function initPixel() {
  if (!PIXEL_ID) return;
  const f: any = (w.fbq = function (...args: unknown[]) {
    f.callMethod ? f.callMethod(...args) : f.queue.push(args);
  });
  if (!w._fbq) w._fbq = f;
  f.push = f;
  f.loaded = true;
  f.version = '2.0';
  f.queue = [];
  w.fbq('init', PIXEL_ID);
  w.fbq('track', 'PageView');
  loadScript('https://connect.facebook.net/en_US/fbevents.js');
}

export function trackPageView(path: string) {
  if (!w) return;
  if (w.gtag) w.gtag('event', 'page_view', { page_path: path, page_location: w.location.href, page_title: document.title });
  if (w.fbq) w.fbq('track', 'PageView');
}

export function trackLead(kind: 'call' | 'whatsapp' | 'form', label = '') {
  if (!w) return;
  if (w.gtag) {
    w.gtag('event', kind === 'form' ? 'generate_lead' : `${kind}_click`, { method: kind, link: label });
    const sendTo = kind === 'form' ? FORM_SEND_TO : CALL_SEND_TO;
    if (sendTo) w.gtag('event', 'conversion', { send_to: sendTo });
  }
  if (w.fbq) w.fbq('track', kind === 'form' ? 'Lead' : 'Contact', { method: kind });
}

export function initAnalytics() {
  if (!w || (!GTAG_IDS.length && !PIXEL_ID)) return;
  const start = () => {
    initGtag();
    initPixel();
  };
  if (document.readyState === 'complete') setTimeout(start, 1500);
  else w.addEventListener('load', () => setTimeout(start, 1500), { once: true });

  // Every call / WhatsApp link on the site, wherever it is.
  document.addEventListener(
    'click',
    (e) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('tel:')) trackLead('call', href);
      else if (/wa\.me|api\.whatsapp\.com|whatsapp:/i.test(href)) trackLead('whatsapp', w.location.pathname);
    },
    { capture: true }
  );
}
