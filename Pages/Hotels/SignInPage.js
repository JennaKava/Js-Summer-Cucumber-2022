const Commands = require("../Commands")

class SignInPage {
    commands = new Commands()
    signInButtonHpg = '//button[text()="Sign in"]'
    signInBtnPopUpMen = '//a[contains(@data-stid, "account-signin")]'
    emailInptField = '//input[@name="email"]'
    passwrdInputField = '//input[@name="password"]'
    formSignInBttn = '//button[@id="loginFormSubmitButton"]'
    errorMsg = '//h3[contains(@class,"uitk-error-summary")]'

    async clickSignIn() {
        await this.commands.clickWebElement(this.signInButtonHpg)
    }

    async clickSignInPopUp() {
        await this.commands.clickWebElement(this.signInBtnPopUpMen)
    }

    async typeInEmail(signInEmail) {
        await this.commands.typeInWebElement(this.emailInptField, signInEmail)
    }

    async typeInPassword(signInPwd) {
        await this.commands.typeInWebElement(this.passwrdInputField, signInPwd)
    }
    
    async clickSubmitSignIn() {
        await this.commands.clickWebElement(this.formSignInBttn)
    }

    async getErrorMsgText() {
        return await this.commands.getTextFromWebElement(this.errorMsg)
    } 


}
module.exports = SignInPage