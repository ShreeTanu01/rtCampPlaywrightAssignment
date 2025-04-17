const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utility/webAppTestData.json')));
const { takeScreenshot } = require('../utility/visualHelper.js');


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
test('Display A to Z Product List', async ({ page }) => {
    console.log("--------------------A to Z:--------------------");
    await productsPage.printProduct(); // just prints, no assertion
    await takeScreenshot(page, 'a-to-z-sorted');
});

//Test 2: Verify Z to A Sorting
test('Verify Z to A Sorting of Product Names', async ({ page }) => {
    console.log("--------------------Z to A:--------------------");
    await productsPage.selectZtoA();
    const actual = await productsPage.getAllProductName();
    await productsPage.printProduct();
    const expected = [...actual].sort().reverse();
    expect(actual).toEqual(expected);
    await takeScreenshot(page, 'z-to-a-sorted');
   // await expect(page).toHaveScreenshot('z-to-a-sorted.png');
});


//Test 3: Verify Price Sorting High to Low
test('Verify Price High to Low Sorting', async ({ page }) => {
    console.log("--------------------Price High to Low:--------------------");
    await productsPage.selectHighToLow();
    const actual = await productsPage.getAllProductPrice();
    await productsPage.printProduct();
    const expected = [...actual].map(Number).sort((a, b) => b - a);
    expect(actual.map(Number)).toEqual(expected);
    await takeScreenshot(page, 'high-to-low-sorted');
    //await expect(page).toHaveScreenshot('high-to-low-sorted.png');
});


//Test 4: Add to Cart and Verify Cart Badge
test('Add Items to Cart and Validate Cart Badge Count', async ({ page }) => {
    const countAdded = await productsPage.addProductToCart();
    const badge = await productsPage.getCartBadge();
    expect(Number(badge)).toEqual(countAdded);
   // await expect(page).toHaveScreenshot('all-item-added-to-cart.png');
});


test('Error validation: Checkout Info page - when firstName,lastName,zipcode is blank', async ({ page }) => {
    await productsPage.navigateToCart();
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await cartsPage.clickContinueButton();
    await expect(await cartsPage.getErrormsg()).toHaveText('Error: First Name is required');
    await takeScreenshot(page, 'Incomplete-Info-errmsg-firstname');
});

test('Error validation: Checkout Info page - when lastName,zipcode is blank', async ({ page }) => {
    await productsPage.navigateToCart();
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await cartsPage.addUserInfo(dataset.firstname, "", "");
    await cartsPage.clickContinueButton();
    await expect(await cartsPage.getErrormsg()).toHaveText('Error: Last Name is required');
    await takeScreenshot(page, 'Incomplete-Info-errmsg-lastname');
});

test('Error validation: Checkout Info page - when zipcode is blank', async ({ page }) => {
    await productsPage.navigateToCart();
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await cartsPage.addUserInfo(dataset.firstname, dataset.lastname, "");
    await cartsPage.clickContinueButton();
    await expect(await cartsPage.getErrormsg()).toHaveText('Error: Postal Code is required');
    await takeScreenshot(page, 'Incomplete-Info-errmsg-zip');
});



test('Error validation: Checkout Info page - error msg disappear after clicking X', async ({ page }) => {
    await productsPage.navigateToCart();
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await cartsPage.addUserInfo(dataset.firstname, dataset.lastname, "");
    await cartsPage.clickContinueButton();
    await expect(await cartsPage.getErrormsg()).toHaveText('Error: Postal Code is required');
    await cartsPage.getErrorMsgXBtn();
    await expect(await cartsPage.getErrormsg()).not.toBeVisible();
    await takeScreenshot(page, 'Incomplete-Info-errmsg-disappear');
});

test('Verify when Cart is empty Badge Count 0', async ({ page }) => {

    await expect(productsPage.cartBadge).toHaveCount(0);
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
     await cartsPage.clickContinueButton();
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Overview');
    await cartsPage.clickFinishButton();
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Complete!');
    const message = await cartsPage.getmsg();
    expect(message).toContain("Thank you for your order!");
    await takeScreenshot(page, 'successful-order');
   // await expect(page).toHaveScreenshot('successful-order-message.png');
}
 
);

//npm run run:all