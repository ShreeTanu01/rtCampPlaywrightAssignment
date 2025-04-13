const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/loginPage');
const {ProductsPage} = require('../pageobjects/productsPage');

test('Saucedemo login',async ({page})=>
{
    const username = "standard_user";
    const password = "secret_sauce";
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.validLogin(username,password);
    const productsPage = new ProductsPage(page);
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
    page.pause();
   


})