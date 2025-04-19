const { devices } = require('@playwright/test');

const isHeadless = process.env.HEADLESS !== 'false'; // Default is true

const config = {
  testDir: './tests',
  retries: 0,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: [['line'], ['allure-playwright']],
  projects: [
    {
      name: 'firefox execution',
      use: {
        browserName: 'firefox',
        headless: isHeadless,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      }
    },
    {
      name: 'chrome execution',
      use: {
        browserName: 'chromium',
        headless: isHeadless,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      }
    },
    {
      name: 'safari execution',
      use: {
        browserName: 'webkit',
        headless: isHeadless,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      }
    }
  ]
};

module.exports = config;
