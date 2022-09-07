const Commands = require("../Commands")

class LandingPage {
    commands = new Commands()
    feelsLikeTempLocator = '.feels-like-text'
    lowTempocator = '.low-temp-text'
    highTempLocator = '.high-temp-text'
    currentLocFieldLocator = '//div[@id="header"]//form[@id="searchForm"]//input[@type="text"]'
    searchButtonLocator = '//img[@alt="Search Button"]'//'a[class="searchButton"]'
    tempForZipCodeLocator = '//div[@id="title"]//span[@class="summary swap"]'

    async getTempValue(locator) {
        return await this.commands.getNumberVlueFromString(locator)
    }

    async getFeelsLikwTempValue() {
        return await this.getTempValue(this.feelsLikeTempLocator)
    }
    async getLowTempValue() {
        return await this.getTempValue(this.lowTempocator)
    }
    async getHighTempValue() {
        return await this.getTempValue(this.highTempLocator)
    }
    async setNewLocation(zipCode) {
        await this.commands.typeInWebElement(this.currentLocFieldLocator, zipCode)
        // await this.clickSearchLocation(this.searchButtonLocator)
    }
    async clickSearchLocation() {
        await this.commands.clickWebElement(this.searchButtonLocator)
    }
    async currentTempForThisArea() {
        const element = await this.commands.findWebElement(this.tempForZipCodeLocator)
        await element.waitForDisplayed({timeout: 4000, timeoutMsg: 'temp is NOT displayed with in 2-seconds'})
        return await this.commands.getTextFromWebElement(element)
    }
        
}

module.exports = LandingPage