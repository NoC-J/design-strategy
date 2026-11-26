// Usage: node capture.js <url> <outDir>
// Saves desktop + mobile full-page screenshots and a tokens.json (fonts, colors, type scale, radii, shadows, CTAs, nav, headings).
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  let [url, out] = process.argv.slice(2);
  // proxies typically allow HTTPS only: upgrade plain http
  if (url && url.startsWith('http://')) url = 'https://' + url.slice(7);
  if (!url || !out) { console.error('usage: node capture.js <url> <outDir>'); process.exit(1); }
  fs.mkdirSync(out, { recursive: true });
  const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  const browser = await chromium.launch(proxy ? { proxy: { server: proxy } } : {});
  const result = { url };
  for (const [name, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    const blocked = new Set(); // hosts the network refused (CSS/fonts/images from these will be missing)
    page.on('requestfailed', (r) => { const e = (r.failure() || {}).errorText || ''; if (/TUNNEL|PROXY|CONNECTION_(FAILED|REFUSED)/i.test(e)) { try { blocked.add(new URL(r.url()).hostname); } catch {} } });
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    } catch (e) { result[name + '_error'] = String(e.message).split('\n')[0]; }
    await page.waitForTimeout(2500); // let JS-rendered sites paint
    if (blocked.size) result[name + '_blocked_hosts'] = [...blocked];
    const textLen = await page.evaluate(() => document.body ? document.body.innerText.trim().length : 0).catch(() => 0);
    if (textLen < 80) result[name + '_warning'] = 'page looks blank or blocked; do not judge design from it';
    await page.screenshot({ path: path.join(out, `${name}-fold.png`) });
    await page.screenshot({ path: path.join(out, `${name}-full.png`), fullPage: true }).catch(() => {});
    if (name === 'desktop') {
      result.tokens = await page.evaluate(() => {
        const count = (arr) => Object.entries(arr.reduce((m, k) => (m[k] = (m[k] || 0) + 1, m), {})).sort((a, b) => b[1] - a[1]).slice(0, 12);
        const els = [...document.querySelectorAll('body *')].filter(e => e.offsetWidth && e.offsetHeight).slice(0, 3000);
        const cs = els.map(e => getComputedStyle(e));
        const text = (sel) => [...document.querySelectorAll(sel)].slice(0, 12).map(e => e.innerText.trim().replace(/\s+/g, ' ').slice(0, 120)).filter(Boolean);
        const h = (t) => { const e = document.querySelector(t); if (!e) return null; const s = getComputedStyle(e); return { size: s.fontSize, weight: s.fontWeight, family: s.fontFamily, lineHeight: s.lineHeight, letterSpacing: s.letterSpacing }; };
        const btn = [...document.querySelectorAll('a,button')].filter(e => /btn|button|cta/i.test(e.className) || e.tagName === 'BUTTON').slice(0, 6).map(e => { const s = getComputedStyle(e); return { text: e.innerText.trim().slice(0, 40), bg: s.backgroundColor, color: s.color, radius: s.borderRadius, padding: s.padding }; });
        return {
          title: document.title,
          metaDescription: document.querySelector('meta[name=description]')?.content || null,
          fontFamilies: count(cs.map(s => s.fontFamily)),
          fontSizes: count(cs.map(s => s.fontSize)),
          textColors: count(cs.map(s => s.color)),
          backgrounds: count(cs.map(s => s.backgroundColor).filter(c => c !== 'rgba(0, 0, 0, 0)')),
          radii: count(cs.map(s => s.borderRadius).filter(r => r !== '0px')),
          shadows: count(cs.map(s => s.boxShadow).filter(r => r !== 'none')),
          cssVars: [...document.styleSheets].flatMap(ss => { try { return [...ss.cssRules]; } catch { return []; } })
            .filter(r => r.selectorText === ':root').flatMap(r => [...r.style].filter(p => p.startsWith('--')).map(p => [p, r.style.getPropertyValue(p).trim()])).slice(0, 60),
          h1: h('h1'), h2: h('h2'), body: h('p'),
          nav: text('nav a, header a'),
          headings: text('h1, h2, h3'),
          buttons: btn,
          sections: [...document.querySelectorAll('main > *, body > section')].length,
          hasVideo: !!document.querySelector('video'), hasCanvas: !!document.querySelector('canvas'),
        };
      }).catch(e => ({ error: String(e.message) }));
    }
    await page.close();
  }
  fs.writeFileSync(path.join(out, 'tokens.json'), JSON.stringify(result, null, 2));
  await browser.close();
  console.log('saved to', out);
})();
