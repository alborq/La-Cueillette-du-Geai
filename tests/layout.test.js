const assert = require("node:assert/strict");
const path = require("path");
const { chromium } = require("playwright");

async function measure(page, selector) {
  return page.$eval(selector, (element) => {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      bottom: rect.bottom,
      right: rect.right,
    };
  });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const fileUrl = `file://${path.resolve("site/index.html")}`;

  const desktop = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  await desktop.goto(fileUrl, { waitUntil: "load" });

  const container = await measure(desktop, ".hero .container");
  const heroLayout = await measure(desktop, ".hero-layout");
  const storyLayout = await measure(desktop, ".story-layout");
  const productGrid = await measure(desktop, ".product-grid");
  const promisePanel = await measure(desktop, ".promise-panel");
  const methodCopyBox = await desktop.$eval(".method-copy", (element) => {
    const rect = element.getBoundingClientRect();
    return { top: rect.top, left: rect.left, width: rect.width };
  });
  const methodGridBox = await desktop.$eval(".method-grid", (element) => {
    const rect = element.getBoundingClientRect();
    return { top: rect.top, left: rect.left, width: rect.width };
  });
  const contactCopyBox = await desktop.$eval(".contact-copy", (element) => {
    const rect = element.getBoundingClientRect();
    return { top: rect.top, left: rect.left, width: rect.width };
  });
  const contactCardBox = await desktop.$eval(".contact-card", (element) => {
    const rect = element.getBoundingClientRect();
    return { top: rect.top, left: rect.left, width: rect.width };
  });

  assert.ok(heroLayout.width / container.width > 0.9, "Hero layout is using too little desktop width");
  assert.ok(storyLayout.width / container.width > 0.9, "Story layout is using too little desktop width");
  assert.ok(productGrid.width / container.width > 0.9, "Product grid is using too little desktop width");
  assert.ok(promisePanel.width / container.width > 0.9, "Promise panel is using too little desktop width");
  assert.ok(Math.abs(methodCopyBox.top - methodGridBox.top) < 60, "Method columns are vertically misaligned");
  assert.ok(Math.abs(contactCopyBox.top - contactCardBox.top) < 60, "Contact columns are vertically misaligned");
  assert.ok(methodCopyBox.left < methodGridBox.left, "Method copy should start before method cards on desktop");

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(fileUrl, { waitUntil: "load" });

  const heroTitle = await measure(mobile, "h1");
  const heroCopy = await measure(mobile, ".hero-copy");
  const heroActions = await measure(mobile, ".hero-actions");
  const heroPhoto = await measure(mobile, ".hero-photo");
  const heroAddress = await measure(mobile, ".hero-address");
  const primaryCta = await measure(mobile, ".hero-actions .button-primary");
  const heroLink = await measure(mobile, ".hero-link");
  const mobileViewportHeight = 844;

  assert.ok(heroTitle.width / heroCopy.width > 0.75, "Hero title is too narrow on mobile");
  assert.ok(heroActions.height > 0, "Hero actions are missing on mobile");
  assert.ok(heroPhoto.height > 0, "Hero image is missing on mobile");
  assert.ok(heroTitle.top >= 0 && heroTitle.bottom <= mobileViewportHeight, "Hero title is not fully visible on first mobile viewport");
  assert.ok(heroPhoto.top < mobileViewportHeight, "Hero image does not start within the first mobile viewport");
  assert.ok(heroAddress.bottom <= mobileViewportHeight, "Hero address is not visible on first mobile viewport");
  assert.ok(primaryCta.bottom <= mobileViewportHeight, "Primary CTA is not visible on first mobile viewport");
  assert.ok(heroLink.bottom <= mobileViewportHeight, "Hero secondary link is not visible on first mobile viewport");

  await browser.close();
  console.log("Layout tests passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
