const { currentDay } = require("../../Utils/MyMomentFunctions")
const Commands = require("../Commands")
class Dates {
    commands = new Commands()
    goingToFieldLocator = '//button[contains(@data-stid, "destination_form_field")]'
    typeInDestinationLocator = '//*[@id="destination_form_field"]'
    destinationsAutoSugestions = '//div[@class="truncate"]//strong'
    distinationsSubtextLoc = '//div[@class="uitk-typeahead-button-label truncate"]'
    datePickerElement = '//button[@data-stid="open-date-picker"]'
    goToPreviousMonthLocator = '//button[@data-stid="date-picker-paging"][1]'
    goToNextMonthBttn = '//button[@data-stid="date-picker-paging"][2]'
    monthLocator = '//div[@data-stid="date-picker-month"]//h2'
    allDatesLocator = '//button[@class="uitk-date-picker-day"]'
    sepDateLocator = '//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]'
    octDateLocator = '//h2[text()="October 2022"]/following-sibling::table//button[not(@disabled)]'
    sepDisabledDates = '//h2[text()="September 2022"]/following-sibling::table//button[contains(@aria-label, "disabled")]'
    octDisabledDates = '//h2[text()="October 2022"]/following-sibling::table//button[contains(@aria-label, "disabled")]'
    calendarDoneBttn = '//button[@data-stid="apply-date-picker"]'
    searchSubmitBttn = '//button[@aria-label="Search"]'
    locationDisplayedLoc = '//button[@class="uitk-fake-input uitk-form-field-trigger"]'
    checkInDateLoc = '//button[@id="hotels-check-in-btn"]'
    checkOutDateLoc = '//button[@id="hotels-check-out-btn"]'
    howCanWeImproveMsg = '//div[@data-stid="shared-ui-voice-of-the-customer"]//span'
    shareFeedbackBttn = '//a[contains(@aria-label, "Share feedback")]'
    starRatingLoc = '//span[@class="uitk-type-300"]'
    sortByMenuLoc = '//select[@id="sort"]'
    fiveStarRatingLoc = '//span[text()="5.0 out of 5"]'
    hotelPriceLoc = '//div[contains(text(), "The price is")]'




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
        await this.commands.selectFromAutoSuggestions(this.destinationsAutoSugestions, userInput)
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

    async clickSearcBttn() {
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

    async selecDates(dateToSelect) {
        await this.commands.selectDateFromCalendar(this.monthLocator, this.goToNextMonthBttn, this.allDatesLocator, dateToSelect)
    }

    async scrollToButtom() {
        await this.commands.scrollElementIntoView(this.howCanWeImproveMsg)
    }

    async getTextHowCanWeImprove() {
        return await this.commands.getTextFromWebElement(this.howCanWeImproveMsg)
    }
    async isShareFeedbackDisplayed() {
        return await this.commands.isWebElementDisplayed(this.shareFeedbackBttn)
    }

    async isShareFeedbackEnabled() {
        return await this.commands.isWebElementEnabled(this.shareFeedbackBttn)
    }

    async scrollToShareYourFeedback() {
        await this.commands.scrollElementIntoView(this.shareFeedbackBttn)
    }

    async selectDestinationWithSubtext(valueToSelect) {
        await this.commands.autoSugSelectorWithSubtext(this.distinationsSubtextLoc, valueToSelect)
        
    }

    async selectFiveStarRating(selectThis) {
        await this.commands.selectFromMultipleElements(this.starRatingLoc, selectThis)
    }

    async scrollToStarRating() {
        await this.commands.scrollElementIntoView(this.starRatingLoc)
    }

    async selectFromSortBy(selectThis) {
        await this.commands.selectFromDropdown(this.sortByMenuLoc, selectThis)
    }

    async allStarRatingsElmements() {
        return await this.commands.findWebElements(this.fiveStarRatingLoc)
    }

   
    async areAllElmentsInArrayEqualThisValue(allElements, userInput){
        for(let i = 0; i < allElements.length; i++) {
            const element = await allElements[i].getText()
            if(element.substring(0, 1).localeCompare(userInput) !== 0) {
                return false
            }
        }
        return true;
    }

    async allPriceElements() {
        return await this.commands.findWebElements(this.hotelPriceLoc)
    }

    async ifPriceElmInIncreasingOrder(arrayOfElements) {
        return await this.commands.allElementsInArrayInIncreasigOrder(arrayOfElements)
    }


   
}
module.exports = Dates