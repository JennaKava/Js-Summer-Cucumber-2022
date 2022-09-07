const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect , assert } = require("chai");
const LandingPage = require("../../Pages/Darsky/LandingPage");
const lPage = new LandingPage() 

Given(/^I am on darksky landing page$/, async function() {
    await browser.url('https://www.darksky.net');
})

Then(/^I verify "feels like temp" is above "min temp"$/, async function() {
    const feelsLikeField = await lPage.getFeelsLikwTempValue()
    const lowTempField = await lPage.getLowTempValue()
    expect (feelsLikeField, 'Feels like temp is NOT above min temp').to.be.above(lowTempField)
})

Then(/^I veryfy "feels like temp" is below "max temp"$/, async function() {
    const feelsLikeField = await lPage.getFeelsLikwTempValue()
    const highTempField = await lPage.getHighTempValue()
    expect (feelsLikeField, 'Feels like temp is NOT below max temp').to.be.below(highTempField)
})

When(/^I verify temperature for current location$/, async function() {
    const tempForDefaultLoc = await lPage.currentTempForThisArea()
    console.log(`\n${tempForDefaultLoc}\n`);
})

When(/^I enter (".*") zipcode$/, async function(zipCode) {
    await lPage.setNewLocation(zipCode)

    const tempForEnteredLoc = await lPage.currentTempForThisArea()
    console.log(tempForEnteredLoc);
    await browser.pause(2000)
})

When(/^I click search button$/, async function() {
    await lPage.clickSearchLocation()
    await browser.pause(2000)
})

Then(/^I verify that temperature displayed is based on zipcode$/, async function() {
    const tempForEnteredLoc = await lPage.currentTempForThisArea()
    this.log(tempForEnteredLoc) 
})
