# 🧪 RTCamp Playwright Automation Suite

An end-to-end UI test automation framework using [Playwright](https://playwright.dev/), built for the [SauceDemo](https://www.saucedemo.com/) web application. It covers key functional scenarios including sorting, cart interactions, and full checkout flows.

---

## 🚀 Features

- Playwright automation using **JavaScript**
- **Page Object Model (POM)** architecture
- Visual regression testing support
- Integrated **HTML** and **Allure** reporting

---

## 🛠️ Tech Stack

| Category     | Technology                     |
|--------------|---------------------------------|
| Test Runner  | Playwright Test (`@playwright/test`) |
| Language     | JavaScript (Node.js)           |
| Assertions   | Built-in Playwright `expect`   |
| Reporting    | Playwright HTML, Allure        |
| Utilities    | `cross-env`, `rimraf`          |

---

## 📖 References

- [Playwright Docs](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ✅ Automated Test Scenarios

### Functional Tests – `webAppFunctionalTest.spec.js`

| # | Scenario |
|---|----------|
| 1 | ✅ Z-A sorting order on "All Items" page |
| 2 | ✅ Price sorting from high to low |
| 3 | ✅ Add multiple items to cart + complete checkout |
| 4 | ✅ Negative test: Missing checkout info validation |
| 5 | ✅ Cart badge count verification |
| 6 | ✅ Order completion and thank-you page validation |

### Visual Regression Tests – `webAppVisualTest.spec.js`

Validations include:
- Sorting logic
- Cart state
- Error messages
- Add item + full checkout

---

## 🗂️ Project Structure

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
├── playwright.config.default.js   # HTML report setup
├── playwright.config.allure.js    # Allure report setup
├── package.json
└── README.md
```

---

## 🧰 Prerequisites

| Tool      | Version   |
|-----------|-----------|
| Node.js   | >= 18     |
| npm       | >= 8      |
| Browsers  | Installed via `npx playwright install` |

---

## ⚙️ Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/saucedemo-playwright-tests.git
cd saucedemo-playwright-tests

# 2. Install dependencies
npm install

# 3. Install browsers
npx playwright install
```

---

## 🧪 Test Execution

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

**Visual Regression Tests:**

```bash
npm run test:visual           # Run visual checks
npm run test:visual:update    # Update visual snapshots
```

---

## 📊 Reports

Reports will be generated in:
- `playwright-report/`
- `allure-report/`

Visual baseline screenshots:
- `screenshots/` (or specified snapshot directory)

---

## 🎥 Demo Recording

Check the `recordings/` folder for:
- Headless and headed test executions
- Report previews and visual diffs

---

## 🧭 Best Practices Followed

- ✅ Page Object Model (POM) structure
- ✅ `beforeEach` hooks for login/pre-steps
- ✅ Utility helpers for reusable logic
- ✅ Config-driven headless/headed execution
- ✅ Clear separation of test logic & test data

---

## 👩‍💻 Author

**Tanushree**  
Senior QA Engineer  
📫 GitHub: [@ShreeTanu01](https://github.com/ShreeTanu01)  
🔗 LinkedIn: [Tanushree Tembhurnikar](https://www.linkedin.com/in/tanushree-tembhurnikar-9525b6157/)

---
