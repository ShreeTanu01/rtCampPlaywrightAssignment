const {test,expect} = require('@playwright/test');
// const {LoginPage} = require('../pageobjects/loginPage');
// const {ProductsPage} = require('../pageobjects/productsPage');
// const {CartsPage} = require('../pageobjects/CartsPage');
const {POManager} = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utility/webAppTestData.json')));
for (const data of dataset)
{
test(`Saucedemo login for ${data.username}`,async ({page})=>
{
    // const username = "standard_user";
    // const password = "secret_sauce";
    // const firstname = "Tanushree";
    // const lastname = "Tembhurnikar";
    // const zipcode = "380058";
    const poManager = new POManager(page);
   // const loginPage = new LoginPage(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username,data.password);
    const productsPage = poManager.getProductPage();
    // const productsPage = new ProductsPage(page);
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
   //const cartsPage = new CartsPage(page);
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await cartsPage.addUserInfo(data.firstname,data.lastname,data.zipcode);
    await cartsPage.clickFinishButton();
    await cartsPage.getmsg();
   // await page.pause();

});
}