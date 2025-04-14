const {test,expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utility/webAppTestData.json')));

test('Saucedemo Test Assignment' ,async ({page})=>
{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await expect(page).toHaveURL(/.*saucedemo.com/); // assert URL loaded
    await loginPage.validLogin(dataset.username,dataset.password);
    await expect(page.locator('.title')).toHaveText('Products'); // assert login success

    
    const productsPage = poManager.getProductPage();
    console.log("A to Z:");
    await productsPage.printProduct();
    
    console.log("Z to A:");
    await productsPage.selectZtoA();
    await productsPage.printProduct();
    
    console.log("Price High to Low:");
    await productsPage.selectHighToLow();
    await productsPage.printProduct();

    await productsPage.addProductToCart();
    await productsPage.navigateToCart();
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await cartsPage.addUserInfo(dataset.firstname,dataset.lastname,dataset.zipcode);
    await cartsPage.clickFinishButton();
    await cartsPage.getmsg();


});
