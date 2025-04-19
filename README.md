# RTCamp Playwright Automation Suite

This project is an end-to-end UI test automation framework built using [Playwright](https://playwright.dev/). It covers essential functional scenarios for the [SauceDemo](https://www.saucedemo.com/) web application, including sorting, cart interactions, and the full checkout flow.

This suite demonstrates:
- Playwright automation with Javascript
- Page object Model structure
- Visual regression testing
- Allure and Playwright HTML reports

## Tech Stack
- **Test Runner**: Playwright Test (`@playwright/test`)
- **Language**: JavaScript (Node.js)
- **Reports**: Playwright HTML + Allure
- **Assertions**: Built-in Playwright expect
- **Architecture**: Page Object Model
- **Utilities**: cross-env, rimraf

## References:

- Playwright https://playwright.dev/
- TypeScript https://www.typescriptlang.org/

## ✅ Automated Test Scenarios

### Functional Tests (`webAppFunctionalTest.spec.js`)
| # | Scenario                                                                 |
|---|--------------------------------------------------------------------------|
| 1 | ✅ Verify Z-A sorting order on "All Items" page                          |
| 2 | ✅ Verify price sorting from high to low on "All Items" page             |
| 3 | ✅ Add multiple items to cart and validate full checkout journey         |
| 4 | ✅ Negative test: Missing checkout info validation (first name, last name, zip) |
| 5 | ✅ Badge count verification (cart icon logic)                            |
| 6 | ✅ Complete order and validate thank you page                            |

### Visual Regression Tests (`webAppVisualTest.spec.js`)
- Baseline snapshots and UI validations for:
  - Sorting logic
  - Cart state
  - Error messages
  - Add iteam and validate checkout journey


## Project Structure
-pageobjects/       # POM Layer
    -LoginPage.js
    -ProductsPage.js
    -CartsPage.js
    -POManager.js
-tests/
    -webAppFunctionalTest.spec.js
    -webAppVisualTest.spec.js
-utility/
    -visualHelper.js
    -a
-playwright.config.default.js   # HTML report setup
-playwright.config.allure.js    # Allure report setup
-package.json
-README.md

## Prerequisites
Tool | Version
Node.js | >= 18
npm | >= 8
Browsers | Installed via npx playwright install


## Setup Instructions
1 Clone the repo
    git clone https://github.com/<your-username>/saucedemo-playwright-tests.git
    cd saucedemo-playwright-tests
2 Install dependencies
    npm install
3 Install Playwright browsers
    npx playwright install


## Test Execution
Functional Tests with HTML Report
    npm run run:html:headless       # Headless
    npm run run:html:headed         # Headed (browser opens)
Functional Tests with Allure Report
    npm run run:allure:headless     # Headless + Allure
    npm run run:allure:headed       # Headed + Allure
Visual Regression Tests
    npm run test:visual             # Run visual checks
    npm run test:visual:update      # Update visual snapshots

## Reports
Reports are generated at:
    playwright-report/
    allure-report/
Screenshot for visual-basline generated at
    ---

## Demo Recording
### Please see the recordings/ folder in the repo for a video demonstration of:
 Headless execution
 Headed execution
 Test reports and visual diffs

## Best Practices Followed
Page Object Model for maintainability
beforeEach hooks for login + pre-steps
Reusable helper utilities for screenshots
Environment-based headless/headed config (HEADLESS=false)
Clean separation between test logic and test data


### Author
[Tanushree]
Senior QA Engineer
📫 GitHub: [github.com/ShreeTanu01]
🧠 LinkedIn: [(https://www.linkedin.com/in/tanushree-tembhurnikar-9525b6157/)]


