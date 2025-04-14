const {LoginPage} = require('./LoginPage');
const {ProductsPage} = require('./ProductsPage');
const {CartsPage} = require('./CartsPage');
class POManager
{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productsPage = new ProductsPage(page);
        this.cartsPage = new CartsPage(page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getProductPage()
    {
        return this.productsPage;
    }
    getCartPage()
    {
        return this.cartsPage;
    }

}
module.exports = {POManager};