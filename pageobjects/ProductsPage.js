class ProductsPage{

    constructor(page)
    {
        this.products = page.locator(".inventory_item");//list rows
        this.productsText = page.locator(".inventory_item div.inventory_item_description a div.inventory_item_name "); //list of products text
        this.productsPrice = page.locator(".inventory_item div.inventory_item_description div.pricebar div.inventory_item_price");//list of products price
        this.addToCartBtn = page.locator(".inventory_item div.inventory_item_description div.pricebar button");//list of btn add to cart
        this.filter = page.locator("select_container");
        this.dropdownOptionZtoA = page.selectOption('select.product_sort_container', 'za');//zto a
        //await page.locator('select.product_sort_container option[value="za"]').click();
        this.dropdownOptionHtoL = page.selectOption('select.product_sort_container', 'hilo');//high to low
        this.cartIcon = page.locator(".shopping_cart_link");
    }

    async getZtoAList()
    {
        await this.filter.click();
    }
}
module.exports = {ProductsPagePage};