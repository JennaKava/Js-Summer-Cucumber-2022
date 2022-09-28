const { Given, Then, When } = require("@wdio/cucumber-framework")
const { expect, assert } = require("chai");
const HomePage = require("../../Pages/Hotels/HomePage")
const hPage = new HomePage

Given(/^I go to Hotels.com$/, async function() {
    await browser.url('https://www.hotels.com/')
    await browser.pause(2000)
})

When(/^I scroll to “Get the app“ button$/, async function() {
    await hPage.scrollToGetAppBttn()
    await browser.pause(1000)
})

When(/^I enter (.+) in Phone number$/, async function(data) {
    await hPage.typeInPhoneField(data)
    await browser.pause(1000)
})

When(/^I click on Get the app button$/, async function() {
    await hPage.clickGetAppBttn()
})

Then(/^I verify “Please enter a valid phone number.“ error is displayed$/, async function() {
    const phoneErrMsg = await hPage.getTextPhoneErrMsg()
    const expectedMsg = 'Please enter a valid phone number.'
    expect(phoneErrMsg, 'Error message is NOT displayed').to.equal(expectedMsg)
    await browser.pause(1000)
})