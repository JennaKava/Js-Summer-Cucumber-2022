const { Given, Then, When } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Darksky/LandingPage")
const landPage = new LandingPage()

Given(/^I am on darksky website$/, async function () {
    await browser.url('https://darksky.net/')
    await browser.pause(2000)
})

Then(/^I click on Time Machine button$/, async function () {
    await landPage.scrollTimeMachieInView()
    await browser.pause(2000)
    await landPage.clickTimeMachineBttn()
    await browser.pause(2000)
})