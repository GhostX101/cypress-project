# Cypress-E2E-Automation-Demoblaze & Saucedemo with Page Object Model (POM)

An end-to-end test automation suite built with **Cypress**, using the **Page Object Model (POM)** design pattern to test two live demo e-commerce sites:

- [DemoBlaze](https://www.demoblaze.com/) — an online electronics store demo
- [Sauce Demo](https://www.saucedemo.com/) — a mock inventory/checkout web app used for QA practice

This project was built to demonstrate real-world automated testing skills: page object architecture, reusable components, fixture-driven data, and coverage of core user flows (login, signup, cart, checkout, navigation).

---

## 🚀 Tech Stack

- **[Cypress](https://www.cypress.io/)** — end-to-end testing framework
- **JavaScript**
- **Page Object Model (POM)** — page interactions abstracted into reusable classes
- **Cypress Fixtures** — test data (e.g. login credentials) kept separate from test logic

---

## 📁 Project Structure

> Update this section to match your exact folder layout if it differs.

```
cypress/
├── e2e/
│   ├── demoblaze.spec.js       # Test suite for demoblaze.com
│   └── saucedemo.spec.js       # Test suite for saucedemo.com
│
├── page-objects/
│   ├── PagesDemoblaze/
│   │   ├── cartPage.js
│   │   ├── loginPage2.js
│   │   ├── NavBar.js
│   │   ├── Pageproduct.js
│   │   ├── signupPage.js
│   │   └── homapage.js
│   ├── footer.js
│   ├── loginPage.js             # Saucedemo login page object
│   ├── logOutPage.js            # Saucedemo logout page object
│   ├── productPage.js           # Saucedemo product/cart page object
│   └── checkoutPage.js          # Saucedemo checkout page object
│
├── fixtures/
│   └── login.json               # Test credentials used across login specs
│
└── support/
    ├── commands.js
    └── e2e.js
```

---

## ✅ What's Covered

### DemoBlaze (`demoblaze.spec.js`)
- Page URL and title verification
- Navbar, sidebar, and carousel rendering
- Product listing display
- Login: valid credentials, invalid username, invalid password, empty fields
- Signup: new user, duplicate user, empty fields, special characters
- Cart: adding products, viewing cart, verifying product details
- Checkout: placing an order, validating required-field alerts
- Contact form: valid submission, empty field validation
- "About Us" modal and video playback control
- Footer rendering

### Sauce Demo (`saucedemo.spec.js`)
- Page URL and title verification
- Login: valid credentials, invalid credentials, empty fields
- Product listing count and content verification
- Cart: adding multiple products, viewing cart
- Checkout: filling shipping info, order summary, completing purchase
- Logout flow

---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/GhostX101/Cypress--Capstone-Project-Using-POM-design-.git
   cd Cypress--Capstone-Project-Using-POM-design-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## ▶️ Running the Tests

**Open Cypress Test Runner (interactive mode):**
```bash
npx cypress open
```

**Run all tests headlessly (CLI mode):**
```bash
npx cypress run
```

**Run a specific spec file:**
```bash
npx cypress run --spec "cypress/e2e/demoblaze.spec.js"
npx cypress run --spec "cypress/e2e/saucedemo.spec.js"
```

---

## 🗂️ Test Data

Login credentials and other reusable test data live in `cypress/fixtures/login.json`, and are loaded into specs via:

```js
cy.fixture('login.json').then((data) => {
  // use data.username / data.password
});
```

Keeping data in fixtures instead of hardcoding it in tests makes it easy to update credentials or expand test data sets without touching test logic.

---

## 🧱 Why Page Object Model?

Each page/component (login, signup, cart, checkout, navbar, footer, etc.) is represented as its own class with methods for interacting with that page's elements. Benefits:

- **Reusability**: The same page object methods are reused across multiple test cases
- **Maintainability**: If a selector changes, it's updated in one place instead of across every test
- **Readability**: Tests read like plain steps (`login.setUsername(...)`, `login.submitClick()`) instead of raw Cypress selector chains

---

## 📌 Notes / Known Limitations

- Some tests currently reference methods without invoking them (e.g. calling `HP.productList` instead of `HP.productList()  worth a pass to confirm all page object methods are actually being called where intended.
- A couple of test descriptions (e.g. "verify user can signup with special characters" vs. "verify user cannot signup with special characters") assert opposite outcomes back to back — may be worth double-checking expected behavior on DemoBlaze's signup validation.

---

## 🔮 Future Improvements

- Add custom Cypress commands for repeated login flows (`cy.login(username, password)`)
- Integrate a reporter (e.g. Mochawesome) for readable HTML test reports
- Add GitHub Actions workflow to run the suite on every push/PR
- Expand fixture data to cover more edge cases (e.g. multiple invalid credential combinations)
- Add API-level checks alongside UI tests where possible

---

## 👤 Author

**GhostX101**
Capstone project: Cypress test automation with Page Object Model
