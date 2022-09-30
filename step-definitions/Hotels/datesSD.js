const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect, assert } = require("chai");
const Dates = require('../../Pages/Hotels/Dates')
const dPage = new Dates()


Given(/^I am on hotels landing page$/, async function() {
    await browser.url('https://www.hotels.com/')
    await browser.pause(2000)
})

When(/^I click in destination field and type (.*)$/, async function (destination) {
    await dPage.clickInDestField()
    await browser.pause(1000)
    await dPage.clickDestinationFieldPopUp()
    await browser.pause(1000)
    await dPage.typeInDestField(destination)
    await browser.pause(1000)
})

When(/^I select (.*) from autosuggestions list$/, async function(destination) {
    await dPage.selectDestination(destination)
    await browser.pause(2000)
})

When(/^I click in date field$/, async function() {
    await dPage.clikDatePicker()
    await browser.pause(2000)
})

When(/^I select check in September (.*) date$/, async function(date) {
    await dPage.selectSepDates(date)
    await browser.pause(1000)
})

When(/^I select check out October (.*) date$/, async function(date) {
    await dPage.selectOctDates(date)
    await browser.pause(2000)
})

When(/^I click done button$/, async function() {
    await dPage.clickCalendarDone()
    await browser.pause(1000)
})

When(/^I click Search button$/, async function() {
    await dPage.clickSearcBttn()
    await browser.pause(2000)
})

Then(/^I verify page displayes correct destination and dates$/, async function() {
    const locationCheck = await dPage.locationDisplayed()
    await browser.pause(1000)
    expect(locationCheck.includes('Manila'), 'Locations check is NOT as expected').to.be.true
    const checkInDate = await dPage.checkInDate()
    console.log(`\n${checkInDate}\n`);
    // await browser.pause(1000)
    const checkOutDate =await dPage.checkOutDate()
    console.log(`\n${checkOutDate}\n`);
    await browser.pause(1000)
})

When(/^I go to current month of (.*) if not shown$/, async function(monthName) {
    await dPage.goToPreviousMonth(monthName)
    await browser.pause(3000)
})

Then(/^I verify for this month past dates are disabled$/, async function() {
    const allDates = await dPage.previousDates()
    await browser.pause(3000)
    expect(await dPage.arePrevousDatesEnabbled(allDates), 'Array conatins elements that are NOT disabled').to.be.false
    
})

When(/^I verify back button on present month is disabled$/, async function() {
    const leftArrowBttn = await dPage.isPreviousMonthBttnEnabled()
    await browser.pause(1000)
    expect(leftArrowBttn, 'The previous month arrow button IS enabled').to.be.false
})

When(/^I select (.+) as Check-in$/, async function(dateToSelect) {
    await dPage.clikDatePicker()
    await dPage.selecDates(dateToSelect)
    await browser.pause(1000)

})

When(/^I select (.+) as Check-out$/, async function(dateToSelect) {
    await dPage.selecDates(dateToSelect)
    await browser.pause(1000)

})

Then(/^I verify Tell us how we can improve our site is displayed$/, async function() {
    await dPage.scrollToButtom()
    await browser.pause(1000)
    const improveMsg = await dPage.getTextHowCanWeImprove()
    const expectedMsg = 'Tell us how we can improve our site'
    expect(improveMsg, 'Message is NOT displayed').to.equal(expectedMsg)
})

When(/^I verify button Share feedback is displayed and enabled$/, async function() {
    const shareBttnDisp = await dPage.isShareFeedbackDisplayed()
    expect(shareBttnDisp, 'Share feedback is NOT displayed').to.be.true
    const shareBttnEnabl = await dPage.isShareFeedbackEnabled()
    expect(shareBttnEnabl,'Share feedback is NOT').to.be.true
})

When(/^I search (.+) and select$/, async function(valueToSelect) {
    await dPage.clickInDestField()
    await browser.pause(1000)
    await dPage.typeInDestField(valueToSelect)
    await browser.pause(1000)
    await dPage.selectDestinationWithSubtext(valueToSelect)
})

When(/^I click on “search” button$/, async function() {
    await dPage.clickSearcBttn()
    await browser.pause(1000)
})

When(/^I click on (.+) from star-rating filter$/, async function(selectThis) {
    await dPage.scrollToStarRating()
    await dPage.selectFiveStarRating(selectThis)
    await browser.pause(1000)
})

When(/^I select “(.+)” from sort-by dropdown$/, async function(selectThis) {
    await dPage.selectFromSortBy(selectThis)
    await browser.pause(3000) 
})

Then(/^I verify all hotels in search results are (.+)★-rated as selected in above step$/, async function(userInput) {
    await dPage.scrollToShareYourFeedback()
    await browser.pause(1000)
    const allStarElemnts = await dPage.allStarRatingsElmements()
    expect(await dPage.areAllElmentsInArrayEqualThisValue(allStarElemnts, userInput), 'All hotels search results are NOT 5-star rated').to.be.true
    await browser.pause(1000)
})

When(/^I verify all hotels are listed in increasing order by price$/, async function() {
    const allPriceElements = await dPage.allPriceElements()
    expect(await dPage.ifPriceElmInIncreasingOrder(allPriceElements)).to.be.true
    await browser.pause(1000)
})



    
