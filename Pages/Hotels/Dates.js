const { currentDay } = require("../../Utils/MyMomentFunctions")
const Commands = require("../Commands")
class Dates {
    commands = new Commands()
    goingToFieldLocator = '//button[contains(@data-stid, "destination_form_field")]'
    typeInDestinationLocator = '//*[@id="destination_form_field"]'
    destAutoSugestions = '//div[@class="truncate"]//strong'
    datePickerElement = '//button[@data-stid="open-date-picker"]'
    goToPreviousMonthLocator = '//button[@data-stid="date-picker-paging"][1]'
    // '//button[@data-stid="date-picker-paging"]//*[@aria-label="Previous month"]'
    monthLocator = '//div[@data-stid="date-picker-month"]//h2'
    sepDateLocator = '//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]'
    octDateLocator = '//h2[text()="October 2022"]/following-sibling::table//button[not(@disabled)]'
    sepDisabledDates = '//h2[text()="September 2022"]/following-sibling::table//button[contains(@aria-label, "disabled")]'
    octDisabledDates = '//h2[text()="October 2022"]/following-sibling::table//button[contains(@aria-label, "disabled")]'
    calendarDoneBttn = '//button[@data-stid="apply-date-picker"]'
    searchSubmitBttn = '//button[@id="submit_button"]'
    locationDisplayedLoc = '//button[@class="uitk-fake-input uitk-form-field-trigger"]'
    checkInDateLoc = '//button[@id="hotels-check-in-btn"]'
    checkOutDateLoc = '//button[@id="hotels-check-out-btn"]'



    async clickInDestField() {
        await this.commands.clickWebElement(this.goingToFieldLocator)
    }

    async clickDestinationFieldPopUp() {
        await this.commands.clickWebElement(this.typeInDestinationLocator)
    }

    async typeInDestField(userInput) {
        await this.commands.typeInWebElement(this.typeInDestinationLocator, userInput)
    }

    async selectDestination(userInput) {
        await this.commands.selectFromAutoSuggestions(this.destAutoSugestions, userInput)
    }

    async clikDatePicker() {
        await this.commands.clickWebElement(this.datePickerElement)
    }

    async selectSepDates(thisDate) {
        await this.commands.chooseDate(this.sepDateLocator, 'data-day', thisDate)
    }

    async selectOctDates(thisDate) {
        await this.commands.chooseDate(this.octDateLocator, 'data-day', thisDate)
    }

    async clickCalendarDone() {
        await this.commands.clickWebElement(this.calendarDoneBttn)
    }

    async clickSearcDestBttn() {
        await this.commands.clickWebElement(this.searchSubmitBttn)
    }

    async locationDisplayed() {
        return await this.commands.getTextFromWebElement(this.locationDisplayedLoc)
    }

    async checkInDate() {
        return await this.commands.getTextFromWebElement(this.checkInDateLoc)
    }

    async checkOutDate() {
        return await this.commands.getTextFromWebElement(this.checkOutDateLoc)
    }

    async goToPreviousMonth(monthName) {
        await this.commands.selectPreviousMonthFromCalander(this.monthLocator, this.goToPreviousMonthLocator, monthName)
    }
    

    async previousDates() {
        const datesArray = await this.commands.findWebElements(this.sepDisabledDates)
        const currentDate = currentDay()
        let allDates = []
        for (let i = 0; i < datesArray.length; i++) {
            let date = await datesArray[i].getAttribute('data-day')
            if (date < currentDate) {
                allDates.push(datesArray[i])
            } 
        }
        return allDates
    }

    async arePrevousDatesEnabbled(allDates) {
        return await this.commands.isAnyElemInArrayEnabled(allDates)
    }

    async isPreviousMonthBttnEnabled() {
        return await this.commands.isWebElementEnabled(this.goToPreviousMonthLocator)
    }
    
}
module.exports = Dates