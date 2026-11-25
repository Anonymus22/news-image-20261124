// Render poster.html to entry.png at exactly 1024x1024 using headless Chromium.
// Deterministic: fixed viewport, fixed settle delay, no network, sRGB profile.
import puppeteer from "/home/hatch/workspace/makefun/radar/shots-tool/node_modules/puppeteer/lib/puppeteer/puppeteer.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(dir, "poster.html");
const outPath = path.join(dir, "entry.png");

const browser = await puppeteer.launch({
  headless: true,
  args: [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--hide-scrollbars",
    "--force-color-profile=srgb",
    "--disable-gpu",
  ],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.goto("file://" + htmlPath, { waitUntil: "load" });
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
  console.log("wrote", outPath);
} finally {
  await browser.close();
}
