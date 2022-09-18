const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect, assert } = require("chai");

const Homepage = require("../../Pages/Yahoo/Homepage");
const homepage = new Homepage

Given(/^I Launch yahoo landing page$/, async function() {
    await browser.url('https://www.yahoo.com/')
    await browser.pause(2000)
})

When(/^I move mouse on bell icon$/, async function() {
    await homepage.mousOverBellIcon()
    await browser.pause(2000)
})

Then(/^I verify the notifications is displayed$/, async function() {
    expect(await homepage.isNotificationDisplayed(), 'Notification menue is NOT displayed').to.be.true
 })