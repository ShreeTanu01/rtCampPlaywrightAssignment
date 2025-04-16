class ProductsPage{

    constructor(page)
    {
        this.burgerMenuBtn = page.locator('button[id="react-burger-menu-btn"]');
        this.allItems = page.locator('a#inventory_sidebar_link.bm-item.menu-item');
        this.burgerCrossBtn = page.locator('button[id="react-burger-cross-btn"]');
        this.products = page.locator(".inventory_item");
        this.productsText = page.locator(".inventory_item div.inventory_item_description a div.inventory_item_name "); 
        this.productsPrice = page.locator(".inventory_item div.inventory_item_description div.pricebar div.inventory_item_price");
        this.addToCartBtn = page.locator(".inventory_item div.inventory_item_description div.pricebar button");
        this.filter = page.locator('select.product_sort_container');
        this.cartIcon = page.locator(".shopping_cart_link");
        this.productTitle= page.locator('.title');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async getProductTitle()
    {
        return await this.productTitle;
    }

    async getCartBadge() {
        const text = await this.cartBadge.textContent();
        return text;
    }

    async goTOAllItem() {
        await this.burgerMenuBtn.click();
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
        console.log("Product List:");
        productName.forEach((name, index) => {
        console.log(`${index + 1}. ${name} - $${productPrice[index]}`);
        });
       
    }
    async getAllProductName()
    {
        const productName = await this.productsText.allTextContents();
        const productPrice = await this.productsPrice.allTextContents();
        console.log("Product List:");
        productName.forEach((name, index) => {
        console.log(`${index + 1}. ${name} - $${productPrice[index]}`);
        });
        return productName;
    }
    async getAllProductPrice()
    {
        const productName = await this.productsText.allTextContents();
        const productPrice = await this.productsPrice.allTextContents();
        // Combine them into one output
        console.log("Product List:");
        productName.forEach((name, index) => {
        console.log(`${index + 1}. ${name} - $${productPrice[index]}`);
        });
        return productPrice;
    }

    async addProductToCart(){
        const count = await this.products.count();
        for(let i=0;i<count;++i)
        {
            await this.addToCartBtn.nth(i).click();
        }
        return count;
    }


   async navigateToCart()
    {
        await  this.cartIcon.click();
    }
}
module.exports = {ProductsPage};