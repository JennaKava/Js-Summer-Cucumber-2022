const Commands = require("../Commands")

class HomePage {
    commands = new Commands
    getAppBttn = '//button[text()="Get the app"]'
    phoneNumberField = '//input[@id="phoneNumber"]'
    phoneErrorMsg = '//div[@id="phoneNumber-error"]'
    languageButton = '//button[@data-stid="button-type-picker-trigger"]//div[contains(@class, "uitk-text-default-theme")]'
    languageDropdown = '//select[@id="language-selector"]'
    espanolSelection = '//option[contains(text(), "Español")]'
    englishSelection = '//option[contains(text(), "English")]'
    saveButton = '//button[text()= "Save"]'
    guardarButton = '//button[text()= "Guardar"]'

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

    async clickLanguageBttn() {
        await this.commands.clickWebElement(this.languageButton)
    }

    async selectLanguage(selectThis) {
        await this.commands.selectFromDropdown(this.languageDropdown, selectThis)
    }

    async clickSaveBttn() {
        await this.commands.clickWebElement(this.saveButton)
    }

    async getTextFromLanguageBttn() {
        return await this.commands.getTextFromWebElement(this.languageButton)
    }

    async clickGuargarBttn() {
        await this.commands.clickWebElement(this.guardarButton)
    }
}
module.exports = HomePage