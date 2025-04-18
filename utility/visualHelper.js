// const { expect } = require('@playwright/test');
// const path = require('path');
// const fs = require('fs');

// async function takeScreenshot(page, name) {
//     const screenshotDir = path.resolve(__dirname, '../visual-baselines');
//     const screenshotPath = path.join(screenshotDir, `${name}.png`);

//     if (!fs.existsSync(screenshotDir)) {
//         fs.mkdirSync(screenshotDir, { recursive: true });
//     }

//     // Take screenshot
//     await page.screenshot({ path: screenshotPath });

//     // Compare screenshot
//     await expect(page).toHaveScreenshot(`${name}.png`);
// }

// module.exports = { takeScreenshot };
const { expect } = require('@playwright/test');

async function takeScreenshot(page, name) {
    // Let Playwright manage baseline and comparisons automatically
    await expect(page).toHaveScreenshot(`${name}.png`);
}

module.exports = { takeScreenshot };
