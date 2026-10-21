import puppeteer from 'puppeteer-core';
import { mkdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import ffmpeg from 'ffmpeg-static';
const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const FRAMES = new URL('./frames/', import.meta.url).pathname;
const only = process.argv[2]; // "preview" = só alguns quadros
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
await page.goto(`file://${ROOT}/src/reel.html`, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
const stage = await page.$('#stage');
if (only === 'preview') {
  for (const t of [0.6, 2.8, 5.5, 9.0, 12.5, 16.5]) {
    await page.evaluate((t) => window.render(t), t);
    await stage.screenshot({ path: `${FRAMES}../prev-${t}.png` });
  }
} else {
  rmSync(FRAMES, { recursive: true, force: true }); mkdirSync(FRAMES, { recursive: true });
  const fps = 30, dur = await page.evaluate(() => window.DURATION);
  for (let f = 0; f < fps * dur; f++) {
    await page.evaluate((t) => window.render(t), f / fps);
    await stage.screenshot({ path: `${FRAMES}${String(f).padStart(4, '0')}.png` });
  }
  mkdirSync(`${ROOT}/reel`, { recursive: true });
  execFileSync(ffmpeg, ['-y', '-framerate', String(fps), '-i', `${FRAMES}%04d.png`, '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'slow', '-movflags', '+faststart', `${ROOT}/reel/nunu-reel-conversa.mp4`], { stdio: 'inherit' });
}
await browser.close();
console.log('done');
