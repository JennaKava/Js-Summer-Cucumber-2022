const Commands = require("../Commands");

class Homepage {

    commands = new Commands();
    // Locators for web-elements on the Homepage (variables)
    loginEmailLocator = '#email';
    loginPwdLocator = '#pass';
    loginBtnLocator = '<button>';
    createNewAccountLocator = '=Create New Account';



    // Functions in order to interact with the web-elements on the Homepage
    /**
     * function to type in email address field
     * Input: locator, data
     *  
     */
    async enterLoginEmail(loginEmail) {
        await this.commands.typeInWebElement(this.loginEmailLocator, loginEmail);
    }


    /**
     * function to type in password field
     * Input: locator, data
     *  
     */
    async enterLoginPassword(loginPwd) {
        await this.commands.typeInWebElement(this.loginPwdLocator, loginPwd);
    }

    /**
     * function to click on login button
     * Input: locator
     *  
     */
    async clickLoginButton() {
        await this.commands.clickWebElement(this.loginBtnLocator);
    }

    /**
     * function to login
     * input: username, password
     */
    async login(username, password) {
        await this.enterLoginEmail(username);
        await this.enterLoginPassword(password);
        await this.clickLoginButton();
    }

    /**
     * function to check if login email is enabled
     * Input: -
     * Return type: boolean
     */
    async isLoginEmailFieldEnabled() {
        return await this.commands.isWebElementEnabled(this.loginEmailLocator);
    }

    /**
     * function to check if login password is enabled
     * Input: -
     * Return type: boolean
     */
    async isLoginPwdFieldEnabled() {
        return await this.commands.isWebElementEnabled(this.loginPwdLocator);
    }

    /**
     * function to check if login email is enabled
     * Input: -
     * Return type: boolean
     */
    async isLoginBtnEnabled() {
        return await this.commands.isWebElementEnabled(this.loginBtnLocator);
    }

    async isLoginFieldEnabled(fieldName) {
        let isEnabled = false;
        switch (fieldName.toLowerCase()) {
            case 'username':
                isEnabled = await this.commands.isWebElementEnabled(this.loginEmailLocator);
                break;
            case 'password':
                isEnabled = await this.commands.isWebElementEnabled(this.loginPwdLocator);
                break;
            case 'button':
                isEnabled = await this.commands.isWebElementEnabled(this.loginBtnLocator);
                break;        
            default:
                break;
        }
        return isEnabled;
    }

    async clickCreateNewAccount() {
        await this.commands.clickWebElement(this.createNewAccountLocator);
    }




}
module.exports = Homepage;