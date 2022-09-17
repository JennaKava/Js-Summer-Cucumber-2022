const { Given, Then, When } = require("@wdio/cucumber-framework")
const { expect, assert } = require("chai");
const Messenger =require('../../Pages/Facebook/Messenger')
const msngrPage = new Messenger()

Given(/^Given I am on facebook landing page$/, async function() {
    await browser.url('/') 
    await browser.pause(3000)
})

When(/^I click messenger link$/, async function() {
    await msngrPage.clickMsngrLink()
    await browser.pause(2000)
})

When(/^I verify "Keep me sign in" check box is not selectd$/, async function() {
    const keepMeSignInNotSelected = await msngrPage.isKeepMeSignInSelected()
    expect(keepMeSignInNotSelected, 'Keep me signed in IS selcted').to.be.false
    await browser.pause(2000)
})

When(/^I click sign in button$/, async function() {
    await msngrPage.clickLogInBttn()
    await browser.pause(2000)
})

When(/^I verify error messege error message is displayed$/, async function() {
    const linkText = await msngrPage.errorMsgLogIn()
    const expectLinkText = 'Find your account and log in.'
    expect(linkText, 'Link text is NOT as expected').to.equal(expectLinkText)
    await browser.pause(2000)
})

When(/^I verify continue button is enabled$/, async function() {
    const continueBtnEnabled = await msngrPage.continBttnIsEnabled()
    expect(continueBtnEnabled, 'Continue button is NOT enabled').to.be.true
})

When(/^I verify "Stay signed in" checkbox is not selected$/, async function() {
    const staySignedInBox = await msngrPage.isStaySignSelected()
    expect(staySignedInBox, 'Stay Signed In box is selected').to.be.false
})

When(/^I click "Stay signed in" checkbox$/, async function() {
    await msngrPage.clickCheckBox()
    await browser.pause(2000)
})

Then(/^I veify "Stay signed in" checkbox is selected$/, async function() {
    const selectedSignInBox = await msngrPage.isStaySignSelected()
    expect(selectedSignInBox, 'Stay Signed In box is NOT selected').to.be.true
})


