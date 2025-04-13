class ProductsPage{

    constructor(page)
    {
        this.burgerMenuBtn = page.locator("#react-burger-menu-btn");
        this.allItems = page.locator("#inventory_sidebar_link");
        this.burgerCrossBtn = page.locator("img[alt='Close Menu']");
        this.products = page.locator(".inventory_item");//list rows
        this.productsText = page.locator(".inventory_item div.inventory_item_description a div.inventory_item_name "); //list of products text
        this.productsPrice = page.locator(".inventory_item div.inventory_item_description div.pricebar div.inventory_item_price");//list of products price
        this.addToCartBtn = page.locator(".inventory_item div.inventory_item_description div.pricebar button");//list of btn add to cart
       // this.filter = page.locator("select_container");
       // this.dropdownOptionZtoA = page.selectOption('select.product_sort_container', 'za');//zto a
        //await page.locator('select.product_sort_container option[value="za"]').click();
        //this.dropdownOptionHtoL = page.selectOption('select.product_sort_container', 'hilo');//high to low
       // this.dropdownOptionZtoA = page.selectOption('select.product_sort_container', 'za');
//this.dropdownOptionHtoL = page.selectOption('select.product_sort_container', 'hilo');
this.filter = page.locator('select.product_sort_container');
        this.cartIcon = page.locator(".shopping_cart_link");
    }

    async goTOAllItem() {
        await this.burgerMenuBtn.click();
        await this.allItems.waitFor({ state: 'visible' }); // wait until it's fully visible and stable
        await this.allItems.hover();
        await this.allItems.click();
        await this.burgerCrossBtn.click();
    }
    async selectZtoA() {
        await this.filter.selectOption('za');
    }
    
    async selectHighToLow() {
        await this.filter.selectOption('hilo');
    }
    

    async printProduct()
    {
        const productName = await this.productsText.allTextContents();
        const productPrice = await this.productsPrice.allTextContents();
        // Combine them into one output
        console.log("Product List:");
        productName.forEach((name, index) => {
        console.log(`${index + 1}. ${name} - $${productPrice[index]}`);
        });
        
    }

    async addProductToCart(){
        const count = await this.products.count();
        for(let i=0;i<count;++i)
        {
            await this.addToCartBtn.nth(i).click();
        }
    }

   async navigateToCart()
    {
        await  this.cartIcon.click();
    }
}
module.exports = {ProductsPage};