const { default: BrowserstackService } = require("@wdio/browserstack-service");
const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect, assert } = require("chai");
const SignInPage = require("../../Pages/Hotels/SignInPage")
const signInPage = new SignInPage()

Given(/^I am on hotels website$/, async function() {
    await browser.url('https://www.hotels.com/')
    await browser.pause(2000)
})

When(/^I click on “Sign in” link$/, async function() {
    await signInPage.clickSignIn()
    await browser.pause(2000)
    await signInPage.clickSignInPopUp()
})

When(/^I enter invalid email address (.*)$/, async function(signInEmail) {
    await signInPage.typeInEmail(signInEmail)
})

When(/^I enter invalid password (.*)$/, async function(signInPwd) {
    await signInPage.typeInPassword(signInPwd)
})

When(/^I click on Sign in button$/, async function() {
    await signInPage.clickSubmitSignIn()
})

Then(/^I verify Verification message is displayed$/, async function() {
    const errorMsg = await signInPage.getErrorMsgText()
    const expectedMsg = "Email and password don't match. Try again."
    expect(errorMsg, 'Messege displayed is NOT as expected').to.be.equal(expectedMsg)
})