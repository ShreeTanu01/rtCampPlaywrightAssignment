
const { expect } = require('@playwright/test');

async function takeScreenshot(page, name) {
    // Let Playwright manage baseline and comparisons automatically
    await expect(page).toHaveScreenshot(`${name}.png`);
}

module.exports = { takeScreenshot };
