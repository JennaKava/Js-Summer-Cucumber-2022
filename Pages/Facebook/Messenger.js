const Commands = require("../Commands")
class Messenger {
    commands = new Commands()
    messengerLocator = 'a=Messenger'
    keepMeSignInLocator = 'input[name=persistent]'
    loginBttnLocator = '#loginbutton'
    linkErrorMsgLogIn = '=Find your account and log in.'
    contunueBttnLocator = 'button=Continue'
    staySignInBoxLocator = 'input[type="checkbox"]'
    checkBoxLocator = '//span[@class=""]'

    async clickMsngrLink() {
        await this.commands.clickWebElement(this.messengerLocator)
    }

    async isCheckBoxSelected(locator) {
        return await this.commands.isWebElementSelected(locator)
    }

    async isKeepMeSignInSelected() {
        return await this.isCheckBoxSelected(this.keepMeSignInLocator)
    }

    async isStaySignSelected() {
        return await this.isCheckBoxSelected(this.staySignInBoxLocator)
    }

    async clickLogInBttn() {
        await this.commands.clickWebElement(this.loginBttnLocator)
    }

    async errorMsgLogIn() {
        return await this.commands.getTextFromWebElement(this.linkErrorMsgLogIn)
    }

    async continBttnIsEnabled() {
        return await this.commands.isWebElementEnabled(this.contunueBttnLocator)
    }

    async clickCheckBox() {
        await this.commands.clickWebElement(this.checkBoxLocator)
    }


}
module.exports = Messenger