class LoginPage{

    constructor(page)
    {
       this.page = page;
       this.signInButton = page.locator("#login-button");
       this.userName = page.locator("#user-name");
       this.passWord = page.locator("#password");
       
    }

    async validLogin(username,password)
    {
       await this.userName.fill(username);
       await this.passWord.fill(password);
       await this.signInButton.click();
    }

   async goTo()
    {
      await this.page.goto("https://www.saucedemo.com/");
    }
}
module.exports = {LoginPage};