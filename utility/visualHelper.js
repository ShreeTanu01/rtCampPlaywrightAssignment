// utility/visualHelper.js
const { expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

async function takeScreenshot(page, name) {
    const screenshotDir = path.resolve(__dirname, '../visual-baselines');
    const screenshotPath = path.join(screenshotDir, `${name}.png`);

    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }

    await page.screenshot({ path: screenshotPath });
}


module.exports = { takeScreenshot };
