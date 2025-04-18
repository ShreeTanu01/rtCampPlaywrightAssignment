# RTCamp Playwright Automation Suite

This project is an end-to-end UI test automation framework built using Playwright. It covers essential functional scenarios for the SauceDemo web application, including sorting, cart interactions, and the full checkout flow.

This suite demonstrates:
- Playwright automation with Javascript
- Page object Model structure
- Visual regression testing
- Allure and Playwright HTML reports

Tech Stack
- Test Runner :  Playwright Test (@playwright/test)
- Language :  JavaScript (Node.js)
- Reports: Playwright HTML + Allure
- Assertions: Built-in Playwright expect
- Architecture: Page Object Model
- Utilities: cross-env, rimraf

References:

- Playwright https://playwright.dev/
- TypeScript https://www.typescriptlang.org/

Automated Test Scenarios:
Functional Tests (webAppFunctionalTest.spec.js)
#	Scenario
1	Verify Z-A sorting order on "All Items" page
2   Verify price sorting from high to low on "All Items" page
3   Add multiple items to cart and validate full checkout journey
4   Negative test: Missing checkout info validation (first name, last name, zip)
5	Badge count verification (Empty cart)
6	Complete order and validate thank you page

Visual Regression Tests (webAppVisualTest.spec.js)
# Baseline snapshots and UI validations for:
1 Sorting logic
2 Cart state
3 Error messages

Project Structure
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

Prerequisites
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

# Reports
Reports are generated at:
    playwright-report/
    allure-report/
Screenshot for visual-basline generated at
    ---

# Demo Recording
Please see the recordings/ folder in the repo for a video demonstration of:
 Headless execution
 Headed execution
 Test reports and visual diffs

# Best Practices Followed
Page Object Model for maintainability

beforeEach hooks for login + pre-steps

Reusable helper utilities for screenshots

Environment-based headless/headed config (HEADLESS=false)

Clean separation between test logic and test data

🧠 Bonus Potential
✅ Accessibility Testing via Axe (Optional)

✅ Visual Testing with diff reports

✅ Full CI/CD compatibility via CLI

✅ Allure + HTML dual reporting

🛠️ Easily extendable to add API, mobile, or component tests

👨‍💻 Author
[Your Full Name]
Senior QA Engineer
📫 GitHub: [github.com/your-username]
🧠 [LinkedIn (optional)]


# 🧪 RTCamp Playwright Automation Suite

This project is an end-to-end UI test automation framework built using [Playwright](https://playwright.dev/). It covers essential functional scenarios for the [SauceDemo](https://www.saucedemo.com/) web application, including sorting, cart interactions, and the full checkout flow.

This suite demonstrates:
- ✅ Solid automation fundamentals
- 🧩 Page Object Model structure
- 🖼️ Visual regression testing
- ♿️ Accessibility testing (optional extension)
- 📊 Allure and Playwright HTML reports

---

## 📦 Tech Stack

- **Test Runner**: Playwright Test (`@playwright/test`)
- **Language**: JavaScript (Node.js)
- **Reports**: Playwright HTML + Allure
- **Assertions**: Built-in Playwright expect
- **Architecture**: Page Object Model
- **Utilities**: cross-env, rimraf

---

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

### ♿ Bonus: Accessibility Tests (Optional)
- Integrated via `@axe-core/playwright` (available and can be triggered as an enhancement)

---

## 📁 Project Structure







## 🤖 Starting up

We have created a sample [Clerk](https://www.clerk.dev/) app which showcases the existing example, so feel free to play around!

1. Install the dependencies using `npm install` or `yarn install`
2. Rename `.env.example` to `.env`
3. Check out the test by running the `test` or the `test:debug` command
4. Have fun building something!

## 📁 Structure

```sh
 |- config # Configuration file/s
 |- external # External system interactions e.g. Database
 |- fixtures # Predefined fixture sets & their factory functions e.g. createSignupAttributes
 |- pages # Sets of pages for our applications
 |- tests # Here is the magic 🧙‍♂️
```

## 🔨 Build your own

To start building something with the suite template:

1. Read this brief document.
2. Read the Pages [README](./src/pages/README.md).
3. Dig in the documentation of the tools as you see fit.

## 📜 Pages

For the suite template we chose to follow the PageObjects pattern in order to encapsulate each pages internal structure and responsibilities inside its own highly cohesive class file.

That means that for each page we would define a new Page object for our needs. We should not confuse the Page objects we create with actual pages in the application. We can think of Pages as a lightweight concept of a **view**, which is the set of cohesive elements living under a known browser location.

For more on how we structure views internally see the pages [README](./src/pages/README.md).

## 🔬 Using data-test-id to target elements

Playwright provides all the goodies of a selector engine, so as to make it really easy to target elements on the document. As a general guideline for querying inside our tests/Page objects:

1. Prefer user-facing and rarely changing attributes like `roles`, input `types` etc.
2. Use `data-test-id` responsibly.
3. There is no one-size-fits-all.

Also you can take a look at Playwright's take on [selection best practices](https://playwright.dev/docs/selectors#best-practices).

## 🧰 Suite configuration

Our test suit is configured to run using Jest as a testing framework and [jest-playwright](https://github.com/playwright-community/jest-playwright) acting as the glue between Jest and Playwright.

**jest-playwright** has more than a couple of ways to configure the suite so please refer to the [documentation](https://github.com/playwright-community/jest-playwright#configuration).

## 👔 Individual test configuration

In some cases, we might need to run a test with specific suite configurations e.g. _only for a specific browser_ . For those cases we can use the `it.jestPlaywrightConfig` wrapper which allows specific `jest-playwright` options to be passed directly into the test.

## 🎬 Debugging

Playwright provides a couple of great debugging capabilities at all levels. The ones that you will probably find most useful are:

- Setting the `PWDEBUG=1` environment variable before running the tests to attache the [Playwright inspector](https://playwright.dev/docs/inspector/).
- Setting the `DEBUG=pw:api` environment variable to get the Playwright API logs in the console.

For more options take a look at https://playwright.dev/docs/debug
