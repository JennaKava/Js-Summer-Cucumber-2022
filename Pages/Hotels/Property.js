const Commands = require("../Commands")

class Property {
    commands = new Commands()
    listPropertyLink = '//a[@id="listYourProperty"]'
    whatToListMsg = '//p[@class="classification__title"]'
    lodginngLoc = '//div[@id="classification_lodging"]//p[contains(@class, "v__title")]'
    privateResidenceLoc = '//div[@id="classification_privateResidence"]//p[contains(@class, "v__title")]'
    stepsOneOfThree = '//div[@data-wdio="lyp-progress-bar"]'
    seeHowMuchYouLoc = '//h1[@class="bed-and-bath__title"]'
    increaseBedroomBttn ='//button[@aria-label="Increase bedrooms"]'
    increaseBathroomBttn = '//button[@aria-label="Increase bathrooms"]'
    nextButtonLoc = '//button[@data-wdio="next-button"]'
    stepsTwoOfThree = '//div[@class="ulx-stepper"]'
    whereIsYourPropertyLoc = '//h1[contains(text(), "property located")]'
    addressField = '//input[@id="locationTypeAhead"]'
    autoSugguestions = '//li[@class="typeahead-prediction-item fds-list-item"]'
    mapLoc = '//div[@data-wdio="google-map-component"]'
    // '//div[@aria-label="Map"]'
    pinLocator = '//div[@aria-label="Map"]//img[1]'
    pinDisclaimerMsg = '//div[@class="ulx-pin-disclaimer" and text()="Pin location may not be exact."]'
    '//div[text()="Pin location may not be exact."]'
    

    async clickListProperty() {
        await this.commands.clickWebElement(this.listPropertyLink)
    }

    async getWhatToListIsText() {
        return await this.commands.getTextFromWebElement(this.whatToListMsg)
    }

    async isWhatToListDisplayed() {
        return await this.commands.isWebElementDisplayed(this.whatToListMsg)
    }

    async switchToNewWindow() {
        await this.commands.switchWindowHandle()
    }

    async getTextLodgingElem() {
        return await this.commands.getTextFromWebElement(this.lodginngLoc)
    }

    async getTextPrivateResElem() {
        return await this.commands.getTextFromWebElement(this.privateResidenceLoc)
    }

    async clickOnPrivateResidence() {
        await this.commands.clickWebElement(this.privateResidenceLoc)
    }

    async textStepOneOfThree() {
        return this.commands.getTextFromWebElement(this.stepsOneOfThree)
    }

    async textSeeHowMuchMsg() {
        return this.commands.getTextFromWebElement(this.seeHowMuchYouLoc)
    }

    async clickAddBedroomQuantity(numberOfClicks) {
        await this.commands.multiClickWebEl(this.increaseBedroomBttn, numberOfClicks)
    }

    async clickAddBathroomQuantity(numberOfClicks) {
        await this.commands.multiClickWebEl(this.increaseBathroomBttn, numberOfClicks)
    }

    async clickOnNextBttn() {
        await this.commands.clickWebElement(this.nextButtonLoc)
    }

    async textStepTwoOfThree() {
        return this.commands.getTextFromWebElement(this.stepsTwoOfThree)
    }

    async textWhereYourProperty() {
        return this.commands.getTextFromWebElement(this.whereIsYourPropertyLoc)
    }

    async typeInAdress(data) {
        await this.commands.typeInWebElement(this.addressField, data)
    }

    async clickInAddressField() {
        await this.commands.clickWebElement(this.addressField)
    }

    async chooseFromAutoSuggestions(userInput) {
        // const element = await this.commands.getTextFromWebElement(this.autoSugguestions)
        // console.log(`\n\nEK->${element}}\n\n`);
        await this.commands.chooseFromAutoSuggestion(this.autoSugguestions, userInput)
    }

    async isMapDisplayed() {
        return await this.commands.isWebElementDisplayed(this.mapLoc)
    }

    async isPinDisplayed() {
        return await this.commands.isWebElementDisplayed(this.pinLocator)
    }

    async getNextElementAfterMap() {
        return await this.commands.getNextSiblingElemInDOM(this.mapLoc)
    }

    async pinMsgDisclaimer() {
        return await this.commands.findWebElement(this.pinDisclaimerMsg)
    }

}
module.exports = Property