const path = require("path");
const { chromium } = require("playwright");

const viewportByMode = {
  mobile: { width: 390, height: 844, scale: 2 },
  desktop: { width: 1440, height: 1200, scale: 1.5 },
};

async function main() {
  const mode = process.argv[2] || "desktop";
  const output = process.argv[3] || path.join("screenshots", `${mode}.png`);
  const viewport = viewportByMode[mode];

  if (!viewport) {
    throw new Error(`Unknown mode: ${mode}`);
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: viewport.scale,
  });

  const pageUrl = `file://${path.resolve("site/index.html")}`;
  await page.goto(pageUrl, { waitUntil: "load" });
  await page.screenshot({ path: output, fullPage: true });
  await browser.close();
  console.log(`Saved ${output}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
