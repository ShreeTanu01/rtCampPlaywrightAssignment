const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utility/webAppTestData.json')));

let poManager, loginPage, productsPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();
    productsPage = poManager.getProductPage();
    await loginPage.goTo();
    await expect(page).toHaveURL(/.*saucedemo.com/);
    await loginPage.validLogin(dataset.username, dataset.password);
    await expect(await productsPage.getProductTitle()).toHaveText('Products');
    await productsPage.goTOAllItem();
});

//Test 1: A-Z Products Display
test('Display A to Z Product List', async () => {
    console.log("--------------------A to Z:--------------------");
    await productsPage.printProduct(); // just prints, no assertion
});

//Test 2: Verify Z to A Sorting
test('Verify Z to A Sorting of Product Names', async () => {
    console.log("--------------------Z to A:--------------------");
    await productsPage.selectZtoA();
    const actual = await productsPage.getAllProductName();
    await productsPage.printProduct();
    const expected = [...actual].sort().reverse();
    expect(actual).toEqual(expected);
});

//Test 3: Verify Price Sorting High to Low
test('Verify Price High to Low Sorting', async () => {
    console.log("--------------------Price High to Low:--------------------");
    await productsPage.selectHighToLow();
    const actual = await productsPage.getAllProductPrice();
    await productsPage.printProduct();
    const expected = [...actual].map(Number).sort((a, b) => b - a);
    expect(actual.map(Number)).toEqual(expected);
});

//Test 4: Add to Cart and Verify Cart Badge
test('Add Items to Cart and Validate Cart Badge Count', async () => {
    const countAdded = await productsPage.addProductToCart();
    const badge = await productsPage.getCartBadge();
    expect(Number(badge)).toEqual(countAdded);
});

//Test 5: Complete Checkout Journey
test('Complete Checkout Journey', async ({ page }) => {
    await productsPage.addProductToCart();
    await productsPage.navigateToCart();
    await expect(page).toHaveURL(/.*cart.html/);
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Your Information');
    await cartsPage.addUserInfo(dataset.firstname, dataset.lastname, dataset.zipcode);
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Overview');
    await cartsPage.clickFinishButton();
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Complete!');
    const message = await cartsPage.getmsg();
    expect(message).toContain("Thank you for your order!");
});

//npm run run:all