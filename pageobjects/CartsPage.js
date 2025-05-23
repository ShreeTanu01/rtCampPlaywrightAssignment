class CartsPage{

    constructor(page)
    {
        this.checkoutTitle = page.locator('span.title[data-test="title"]');
        this.checkoutBtn = page.locator("#checkout");
        this.firtName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.zipCode = page.locator("#postal-code");
        this.continueBtn = page.locator("#continue");
        this.finishBtn = page.locator("#finish");
        this.completeMsg = page.locator(".complete-header");
        this.errorMsg = page.locator("h3[data-test='error']");
        this.errorMsgXBtn = page.locator("button[data-test='error-button']");
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
}

async clickContinueButton()
{
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

async getErrormsg() {
    return  this.errorMsg;
    
  }
  
  async getErrorMsgXBtn() {
    return  this.errorMsgXBtn.click();
    
  }

async getTitle() {
    return await this.checkoutTitle;
}

}
module.exports = {CartsPage};