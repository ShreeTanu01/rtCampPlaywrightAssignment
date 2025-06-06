# RTCamp Playwright Automation Suite

An end-to-end UI test automation framework using [Playwright](https://playwright.dev/), built for the [SauceDemo](https://www.saucedemo.com/) web application. It covers key functional scenarios including sorting, cart interactions, and full checkout flows.

---

## Features

- Playwright automation using **JavaScript**
- **Page Object Model (POM)** architecture
- Visual regression testing support
- Integrated **HTML** and **Allure** reporting

---

## Tech Stack

| Category     | Technology                     |
|--------------|---------------------------------|
| Test Runner  | Playwright Test (`@playwright/test`) |
| Language     | JavaScript (Node.js)           |
| Assertions   | Built-in Playwright `expect`   |
| Reporting    | Playwright HTML, Allure        |
| Utilities    | `cross-env`, `rimraf`          |

---

## References

- [Playwright Docs](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## Requirements

- [Requirement Docs](https://drive.google.com/drive/folders/1dC8Kcq8pq63O66YACFYbONNYzlIqQaTE?usp=drive_link)

---

## Automated Test Scenarios

### Functional Tests – `webAppFunctionalTest.spec.js`

| # | Scenario |
|---|----------|
| 1 | Z-A sorting order on "All Items" page |
| 2 | Price sorting from high to low |
| 3 | Add multiple items to cart and verify complete checkout |
| 4 | Negative test: Missing checkout info validation |
| 5 | Cart badge count verification |
| 6 | Order completion and thank-you page validation |

### Visual Regression Tests – `webAppVisualTest.spec.js`

Validations include:
- Sorting logic
- Cart state
- Error messages
- Add item and full checkout

---

## Project Structure

```
.
├── pageobjects/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartsPage.js
│   └── POManager.js
├── tests/
│   ├── webAppFunctionalTest.spec.js
│   └── webAppVisualTest.spec.js
├── utility/
│   └── visualHelper.js
│   └── webAppTestData.json
├── playwright.config.default.js   # HTML report setup
├── playwright.config.allure.js    # Allure report setup
├── package.json
└── README.md
```

---

## Prerequisites

| Tool      | Version   |
|-----------|-----------|
| Node.js   | >= 22.14.0     |
| npm       | >= 11.3.0      |
| Browsers  | Installed via `npx playwright install` |
| java   | >= 24.0.1     |
| java Runtime  | >= 24.0.1     |

#### Note : Command to check above `node -v && npm -v` ,`java -version`
---

## Supported Browsers

| Browsers      | Version   |
|-----------|-----------|
| Google Chrome  | Playwright installed browser    |
| Mozilla Firefox      | Playwright installed browser      |
| Safari(Webkit)  | Playwright installed browser |

---

## Setup Instructions


### 1. Create a local folder in your Laptop/Desktop and Clone the repo
```bash
cd localfolder-saucedemo-playwright-tests
git clone https://github.com/ShreeTanu01/rtCampPlaywrightAssignment.git
cd rtCampPlaywrightAssignment
```
#### When you clone the repository, you’ll get all the project files, including the package.json file.

### 2. Install dependencies
```bash
npm install
npm install node #Ignore if node is already installed
```
#### This will:
####    1. Read the package.json file.
####    2. Download and install the dependencies listed in the devDependencies section.
####    3. Create a node_modules/ folder where the installed packages will reside.

### 3. Install browsers
```bash
npx playwright install
```
#### This will install the necessary browser binaries for Playwright to work correctly.

### 4. Install cross-env package
```bash
npm install --save-dev cross-env
```
#### It’s a small utility that lets you set environment variables across platforms (Windows, macOS, Linux) in a consistent way.


---

## Test Execution

**Functional Tests with HTML Report:**

```bash
npm run run:html:headless     # Headless
npm run run:html:headed       # Headed
```

**Functional Tests with Allure Report:**

```bash
npm run run:allure:headless   # Headless + Allure   
npm run run:allure:headed     # Headed + Allure
```
#### Note : `install java runtime` , If not installed. While running allure report first time click on Yes for installing package

**Visual Regression Tests:**

```bash
npm run test:visual:update    # Update visual snapshots
npm run test:visual           # Run visual checks

```
#### Note : At first run Visual baseline not present for comparision.So run `npm run test:visual:update` in first execution or when UI is changed in [SauceDemo](https://www.saucedemo.com/) to create new visual baseline to compare for Visual Regression testing.

---

## Reports

Reports/Traces will be generated in:
- `playwright-report/index.html`
- `allure-report/index.html`
- `test-results/trace.zip`  
  > Generated **only on test failures** (if tracing is enabled).


Visual baseline screenshots:
- `tests/webAppVisualTest.spec.js-snapshots` 

Sample Reports : [Execution Reports](https://drive.google.com/drive/folders/1lU-FmKKqf7cUZpyNxU67PSe0xudPbwAE?usp=drive_link) 

---

## Demo Recording

Check the [Execution Recoding](https://drive.google.com/drive/folders/16_U_FtD-3oK7jlbCPyVDY6iX1wWfmiU8?usp=drive_link) 
 folder for:
- Headless test execution (PlayWright Default Report) 
- Headed test execution (PlayWright Default Report) 
- Headless test execution (Allure Report) 
- Headed test execution (Allure Report) 
- Report previews and visual diffs

---

## Best Practices Followed

-  Page Object Model (POM) structure
-  `beforeEach` hooks for login/pre-steps
-  Utility helpers for reusable logic
-  Config-driven headless/headed execution
-  Clear separation of test logic & test data

---

##  Author

**Tanushree**  
Senior QA Engineer  
GitHub: [@ShreeTanu01/rtCampPlaywrightAssignment](https://github.com/ShreeTanu01/rtCampPlaywrightAssignment.git)  
LinkedIn: [Tanushree Tembhurnikar](https://www.linkedin.com/in/tanushree-tembhurnikar-9525b6157/)

---
