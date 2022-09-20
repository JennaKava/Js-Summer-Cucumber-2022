const Commands = require("../Commands")

class SignInPage {
    commands = new Commands()
    signInButtonHpg = '//button[text()="Sign in"]'
    signUpBttn = '//a[contains(text(), "Sign up, it’s free")]'
    signInBtnPopUpMen = '//a[contains(@data-stid, "account-signin")]'
    emailInptField = '//input[@name="email"]'
    emailSignnUpField = '//input[@name="email"]'
    firstNameSignUp = '//input[@name="firstName"]'
    lastNameSignUp = '//input[@name="lastName"]'
    psswrdSignUp = '//input[@name="password"]'
    keepMeSignIn = '//input[@id="signUpFormRememberMeCheck"]/following-sibling::span'
    continueBttnSignUp = '//button[@id="signupFormSubmitButton"]'
    passwrdInputField = '//input[@name="password"]'
    formSignInBttn = '//button[@id="loginFormSubmitButton"]'
    errorMsg = '//h3[contains(@class,"uitk-error-summary")]'
    emailError = '//div[@id="signupFormEmailInput-error"]'
    frstNameError = '//div[@id="signupFormFirstNameInput-error"]'
    lastNameError = '//div[@id="signupFormLastNameInput-error"]'
    termsConditionsLink = '//div[@class="uitk-layout-flex-item"]//a[contains(text(), "Terms and Conditions")]'
    privacyStatementLink = '//div[@class="uitk-layout-flex-item"]//a[contains(text(), "Privacy Statement")]'

    

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

    async clickSignUp() {
        await this.commands.clickWebElement(this.signUpBttn)
    }

    async typeInInvalidEmail(invalidEmail) {
        await this.commands.typeInWebElement(this.emailSignnUpField, invalidEmail)
    }

    async clearEmailField() {
        await this.commands.clearTextField(this.emailSignnUpField)
    }

    async typeInValidEmail(validEmail) {
        await this.commands.typeInWebElement(this.emailSignnUpField, validEmail)
    }

    async typeInInvalidFirstName(invalidFstName) {
        await this.commands.typeInWebElement(this.firstNameSignUp, invalidFstName)
    }

    async typeInInvalidLastName(invalidLstName) {
        await this.commands.typeInWebElement(this.lastNameSignUp, invalidLstName)
    }

    async typeInSignUpPsswrd(password) {
        await this.commands.typeInWebElement(this.psswrdSignUp, password)
    }

    async emailErrMsgText() {
        return await this.commands.getTextFromWebElement(this.emailError)
    }

    async frstNameErrMsgText() {
        return await this.commands.getTextFromWebElement(this.frstNameError)
    }

    async lastNameErrMsgText() {
        return await this.commands.getTextFromWebElement(this.lastNameError)
    }

    async isCheckBoxDisplayed() {
        return await this.commands.isWebElementDisplayed(this.keepMeSignIn)
    }

    async isCheckBoxEnabled() {
        return await this.commands.isWebElementEnabled(this.keepMeSignIn)
    }

    async isContinueBttnDispl() {
        return await this.commands.isWebElementDisplayed(this.continueBttnSignUp)
    }

    async isContinueBttnEnabled() {
        return await this.commands.isWebElementEnabled(this.continueBttnSignUp)
    }

    async clickInFrstNameField() {
        await this.commands.clickWebElement(this.firstNameSignUp)
    }

    async clickInLastNameField() {
        await this.commands.clickWebElement(this.lastNameSignUp)
    }

    async clickInPswrdField() {
        await this.commands.clickWebElement(this.psswrdSignUp)
    }

    async clickTermsCondLink() {
        await this.commands.clickWebElement(this.termsConditionsLink)
    }

    async switchWindow() {
        await this.commands.switchWindowHandle()
    }

    async getTermsPgTitle() {
        return await this.commands.getWindwTitle()
    }

    async clickPrivacyLink() {
        await this.commands.clickWebElement(this.privacyStatementLink)
    }

    async getPrivacyPgTitle() {
        await this.commands.getWindwTitle()
    }


}
module.exports = SignInPage