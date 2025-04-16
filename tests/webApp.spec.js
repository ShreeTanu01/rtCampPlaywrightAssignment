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
    const productsPage = poManager.getProductPage();
    await expect(await productsPage.getProductTitle()).toHaveText('Products');
    await productsPage.goTOAllItem();
    console.log("--------------------A to Z:--------------------");
    await productsPage.printProduct();

   // Verify the sorting order displayed for Z-A on the “All Items” page.
    console.log("--------------------Z to A:--------------------");
    await productsPage.selectZtoA();
    const actualZToANames = await productsPage.getAllProductName();
    await productsPage.printProduct();
    const sortedExpectedZtoA = [...actualZToANames].sort().reverse();
    expect(actualZToANames).toEqual(sortedExpectedZtoA);
   
   //Verify the price order (high-low) displayed on the “All Items” page.  
    console.log("--------------------Price High to Low:--------------------");
    await productsPage.selectHighToLow();
    const actualPrices = await productsPage.getAllProductPrice();
    await productsPage.printProduct();
    const sortedExpectedPrices = [...actualPrices].sort((a, b) => b - a);
    expect(actualPrices).toEqual(sortedExpectedPrices);
  
    //Add multiple items to the card and validate the checkout journey.
    const countOfProductadded =await productsPage.addProductToCart();
    const cartBadge = await productsPage.getCartBadge();
    await expect(Number(cartBadge)).toEqual(countOfProductadded);
    await productsPage.navigateToCart();
    await expect(page).toHaveURL(/.*cart.html/); 
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Your Information');
    await cartsPage.addUserInfo(dataset.firstname,dataset.lastname,dataset.zipcode);
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Overview');
    await cartsPage.clickFinishButton();
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Complete!');
    const message = await cartsPage.getmsg();
    expect(message).toContain("Thank you for your order!");

});
