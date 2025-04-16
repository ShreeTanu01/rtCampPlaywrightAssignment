class CartsPage{

    constructor(page)
    {
        //this.checkoutInfoTitle = page.locator('span.title[data-test="title"]');
        //this.checkoutOverviewTitle = page.locator(".title");
       // this.checkoutCompleteTitle = page.locator(".title");
        this.checkoutTitle = page.locator('span.title[data-test="title"]');
        this.checkoutBtn = page.locator("#checkout");
        this.firtName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.zipCode = page.locator("#postal-code");
        this.continueBtn = page.locator("#continue");
        this.finishBtn = page.locator("#finish");
        this.completeMsg = page.locator(".complete-header");
    }

async clickCheckout()
{
    await this.checkoutBtn.click();
}

async addUserInfo(firstname,lastname,pincode)
{
    await this.firtName.fill(firstname);
    await this.lastName.fill(lastname);
    await this.zipCode.fill(pincode);
    await this.continueBtn.click();
}
async clickFinishButton()
{
    await this.finishBtn.click();
}

async getmsg() {
    const msg = await this.completeMsg.textContent();
    return msg;
}

async getTitle() {
    return await this.checkoutTitle;
}

}
module.exports = {CartsPage};