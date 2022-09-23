const Commands = require("../Commands")

class TravelersPg {
    commands = new Commands()
    travelersField = '//button[contains(@class, "uitk-menu-trigger uitk-fake-input uitk-form-field-trigger")]'
    plusAdultsBttn = '//*[@aria-label="Increase the number of adults in room 1"]'
    //plusChildBttn = '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button[@type="button"]//span[@class="uitk-step-input-button"]'
    disPlusChildBttn = '//input[contains(@id, "children_step_input")]/following-sibling::button[@class="uitk-layout-flex-item uitk-step-input-touch-target"]'
    plusChildBttn = '//*[@aria-label="Increase the number of children in room 1"]'
    minusChildBttn = '//*[@aria-label="Decrease the number of children in room 1"]'
    disMinusChildBttn = '//input[contains(@id, "children_step_input")]/preceding-sibling::button[@class="uitk-layout-flex-item uitk-step-input-touch-target"]'
    childAgeOneDD = '#age-traveler_selector_children_age_selector-0-0'
    childAgeTwoDD = '#age-traveler_selector_children_age_selector-0-1'
    ChildAgeDD = '//select[contains(@id, "children_age_selector")]'

    async clickOnTravelersMenu() {
        await this.commands.clickWebElement(this.travelersField)
    }

    async addKidsRoomOne(numberOfClicks) {
        await this.commands.multiClickWebEl(this.plusChildBttn, numberOfClicks)
    }

    async removeKidsRoomOne(numberOfClicks) {
        await this.commands.multiClickWebEl(this.minusChildBttn, numberOfClicks)
    }
    
    async numberOfKidsDropdown() {
        const elementsArray = await this.commands.findWebElements(this.ChildAgeDD)
        return await elementsArray.length
    }

    async isPlusBttnEnabled() {
        return await this.commands.isWebElementEnabled(this.plusChildBttn)
    }

    async isPlusBttnDisabled() {
        return await this.commands.isWebElementEnabled(this.disPlusChildBttn)
    }

    async isMinusBttnEnabled() {
        return await this.commands.isWebElementEnabled(this.minusChildBttn)
    }

    async isMinusBttnDisabled() {
        return await this.commands.isWebElementEnabled(this.disMinusChildBttn)
    }

    async isKidsDropdowDisplayed() {
        return await this.commands.isWebElementDisplayed(this.childAgeOneDD)
    }

}
module.exports = TravelersPg