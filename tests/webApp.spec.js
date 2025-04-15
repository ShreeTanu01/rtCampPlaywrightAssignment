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
    const zToANames = await productsPage.getAllProductName();
    console.log("All Product Names:", zToANames);
    const sortedZtoA = [...zToANames].sort().reverse();
    expect(zToANames).toEqual(sortedZtoA);
    
     //console.log("Price High to Low:");
    // await productsPage.selectHighToLow();
    // await productsPage.printProduct();
    console.log("Price High to Low:");
    await productsPage.selectHighToLow();
    const prices = await productsPage.getAllProductPrice();
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sortedPrices);


    //await productsPage.addProductToCart("Sauce Labs Fleece Jacket");
    const countOfProductadded =await productsPage.addProductToCart();
    const cartBadge = await page.locator('.shopping_cart_badge').textContent();
    console.log(cartBadge);
    await expect(Number(cartBadge)).toEqual(countOfProductadded);
    await productsPage.navigateToCart();
    await expect(page).toHaveURL(/.*cart.html/); 
    const cartsPage = poManager.getCartPage();
    await cartsPage.clickCheckout();
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Your Information');


    //await expect(await cartsPage.getTitle()).toHaveText('Checkout: Your Information');
   // await cartsPage.getTitle().toHaveText('Checkout: Your Information');
    await cartsPage.addUserInfo(dataset.firstname,dataset.lastname,dataset.zipcode);
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Overview');
    //await cartsPage.getTitle().toHaveText('Checkout: Overview');
    await cartsPage.clickFinishButton();
    await expect(await cartsPage.getTitle()).toHaveText('Checkout: Complete!');
    //await cartsPage.getTitle().toHaveText('Checkout: Complete!');
    const message = await cartsPage.getmsg();
    expect(message).toContain("Thank you for your order!");
    // await cartsPage.getmsg();


});
