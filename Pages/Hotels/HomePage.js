const Commands = require("../Commands")

class HomePage {
    commands = new Commands
    getAppBttn = '//button[text()="Get the app"]'
    phoneNumberField = '//input[@id="phoneNumber"]'
    phoneErrorMsg = '//div[@id="phoneNumber-error"]'

    async scrollToGetAppBttn(){
        await this.commands.scrollToTheView(this.getAppBttn)
    }

    async typeInPhoneField(data) {
        await this.commands.typeInWebElement(this.phoneNumberField, data)
    }

    async clickGetAppBttn() {
        await this.commands.clickWebElement(this.getAppBttn)
    }

    async getTextPhoneErrMsg() {
        return await this.commands.getTextFromWebElement(this.phoneErrorMsg)
    }
}
module.exports = HomePage