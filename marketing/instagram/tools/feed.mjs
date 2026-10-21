import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
mkdirSync(`${ROOT}/feed`, { recursive: true });
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 1500, deviceScaleFactor: 1 });
await page.goto(`file://${ROOT}/src/feed.html`, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
const ids = await page.$$eval('.slide', (els) => els.map((e) => e.id));
for (const id of ids) {
  const el = await page.$(`#${id}`);
  await el.screenshot({ path: `${ROOT}/feed/${id}.png` });
  console.log('ok', id);
}
console.log('fonts', await page.evaluate(() => [...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family+f.weight).join(',')));
await browser.close();
