const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager.js');
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
test('Verify the sorting order displayed for A-Z on the All Items page', async ({ page }) => {
    console.log("--------------------A to Z:--------------------");
    await productsPage.printProduct(); // just prints, no assertion
    const actual = await productsPage.getAllProductName();
    await productsPage.printProduct();
    const expected = [...actual].sort();
    expect(actual).toEqual(expected);
    //await takeScreenshot(page, 'a-to-z-sorted');
});

//Test 2: Verify Z to A Sorting
test('Verify the sorting order displayed for Z-A on the All Items page', async ({ page }) => {
    console.log("--------------------Z to A:--------------------");
    await productsPage.selectZtoA();
    const actual = await productsPage.getAllProductName();
    await productsPage.printProduct();
    //const expected = [...actual].sort().reverse();
    expect(actual).toEqual(expected);
    //await takeScreenshot(page, 'z-to-a-sorted');
});


//Test 3: Verify Price Sorting High to Low
test('Verify the sorting order displayed for High to low on the All Items page', async ({ page }) => {
    console.log("--------------------Price High to Low:--------------------");
    await productsPage.selectHighToLow();
    const actual = await productsPage.getAllProductPrice();
    await productsPage.printProduct();
    const expected = [...actual].map(Number).sort((a, b) => b - a);
    expect(actual.map(Number)).toEqual(expected);
   // await takeScreenshot(page, 'high-to-low-sorted');
});


//Test 4: Add to Cart and Verify Cart Badge
test('Add Items to Cart and Validate Cart Badge Count', async ({ page }) => {
    const countAdded = await productsPage.addProductToCart();
    const badge = await productsPage.getCartBadge();
    expect(Number(badge)).toEqual(countAdded);
    //await takeScreenshot(page, 'aal-item-added-to-cart');
});

//Test 5: Verify error message when firstName,lastName,zipcode is blank
test('Error validation: Checkout Info page - when firstName,lastName,zipcode is blank', async ({ page }) => {
    await productsPage.navigateToCart();
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await cartsPage.clickContinueButton();
    await expect(await cartsPage.getErrormsg()).toHaveText('Error: First Name is required');
    //await takeScreenshot(page, 'Incomplete-Info-errmsg-firstname');
});

//Test 6: Verify error message when lastName,zipcode is blank
test('Error validation: Checkout Info page - when lastName,zipcode is blank', async ({ page }) => {
    await productsPage.navigateToCart();
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await cartsPage.addUserInfo(dataset.firstname, "", "");
    await cartsPage.clickContinueButton();
    await expect(await cartsPage.getErrormsg()).toHaveText('Error: Last Name is required');
   // await takeScreenshot(page, 'Incomplete-Info-errmsg-lastname');
});

//Test 7: Verify error message when zipcode is blank
test('Error validation: Checkout Info page - when zipcode is blank', async ({ page }) => {
    await productsPage.navigateToCart();
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await cartsPage.addUserInfo(dataset.firstname, dataset.lastname, "");
    await cartsPage.clickContinueButton();
    await expect(await cartsPage.getErrormsg()).toHaveText('Error: Postal Code is required');
    //await takeScreenshot(page, 'Incomplete-Info-errmsg-zip');
});


//Test 8: Verify error message disappear after clicking X
test('Error validation: Checkout Info page - error msg disappear after clicking X', async ({ page }) => {
    await productsPage.navigateToCart();
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await cartsPage.addUserInfo(dataset.firstname, dataset.lastname, "");
    await cartsPage.clickContinueButton();
    await expect(await cartsPage.getErrormsg()).toHaveText('Error: Postal Code is required');
    await cartsPage.getErrorMsgXBtn();
    await expect(await cartsPage.getErrormsg()).not.toBeVisible();
    //await takeScreenshot(page, 'Incomplete-Info-errmsg-disappear');
});

//Test 9: Verify cart count zero when nothing is added
test('Verify when Cart is empty Badge Count 0', async ({ page }) => {

    await expect(productsPage.cartBadge).toHaveCount(0);
    //await takeScreenshot(page, 'empty-cart');
});


//Test 10:Verify Complete Checkout Journey
test('Verify Complete Checkout Journey', async ({ page }) => {
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
    //await takeScreenshot(page, 'successful-order');
   
}
 
);

