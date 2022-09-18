const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect, assert } = require("chai");
const Homepage = require("../../Pages/Facebook/Homepage")
const Commands =require("../../Pages/Commands")
const commands = new Commands()
const homePage = new Homepage()



Given(/^I am on facebook.com$/, async function() {
    await browser.url('/');
    await browser.pause(2000)
});

When(/^I click on Instagram$/, async function() {
    await homePage.clickInstagramLink()
    await browser.pause(2000)
})

When(/^I verify new window opened$/, async function() {
    const allHandles = await commands.getNumberofWindHadls()
    expect(allHandles.length, 'Instagram should have opened a new window').to.equal(2);
})

When(/^I verify I am on Facebook window$/, async function() {
    const fbTitle = await commands.getWindTitle()
    const expFbTitle = 'Facebook - log in or sign up';
    expect(fbTitle, 'Facebook page is not seen').to.equal(expFbTitle); 
})

When(/^I switch from Facebook to a newly opened window$/, async function() {
    await commands.switchWindowHandle()
})

Then(/^Verify Instagram opened in Scenarioa new window$/, async function() {
    const instagramTitle = await commands.getWindTitle()
        const expInstagramTitle = 'Instagram'
        expect(instagramTitle, 'Instagram page is not seen').to.equal(expInstagramTitle);
})

When(/^I click on Portal$/, async function() {
    await homePage.clickPortalLink()
})

When(/^I click on Oculus$/, async function() {
    await homePage.clickOculusLink()
})

When(/^I click on Facebook Pay$/, async function() {
    await homePage.clickFbLink()
})

Then(/^I close all pages except Facebook Pay page$/, async function() {
    await homePage.closeAllButFbPayWndw()
})