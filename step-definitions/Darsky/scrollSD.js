const { Given, Then, When } = require("@wdio/cucumber-framework");
const Landingpage = require("../../Pages/Darsky/Landingpage")
const landPage = new Landingpage()

Given(/^I am on darksky landing page$/, async function () {
    await browser.url('https://darksky.net/')
    await browser.pause(2000)
})

Then(/^I click on Time Machine button$/, async function () {
    await landPage.scrollTimeMachieInView()
    await browser.pause(2000)
    await landPage.clickTimeMachineBttn()
    await browser.pause(2000)
})