class CartsPage{

    constructor(page)
    {
        this.checkoutInfoTitle = page.locator('span.title[data-test="title"]');
        this.checkoutOverviewTitle = page.locator(".title");
        this.checkoutCompleteTitle = page.locator(".title");
        //this.checkoutTitle = page.locator('span.title[data-test="title"]');
        //this.checkoutTitle = page.locator("span.title[data-test=\"title\"]");
        this.checkoutBtn = page.locator("#checkout");
        this.firtName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.zipCode = page.locator("#postal-code");
        this.continueBtn = page.locator("#continue");
        this.finishBtn = page.locator("#finish");
        this.completeMsg = page.locator(".complete-header");
    }
}
module.exports = {CartsPage};