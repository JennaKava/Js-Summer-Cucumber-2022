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
    await browser.pause(2000)
    await dPage.clickDestinationFieldPopUp()
    await browser.pause(2000)
    await dPage.typeInDestField(destination)
    await browser.pause(2000)
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

When(/^I click button done$/, async function() {
    await dPage.clickCalendarDone()
    await browser.pause(2000)
})

When(/^I click button search$/, async function() {
    await dPage.clickSearcDestBttn()
    await browser.pause(3000)
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

    
