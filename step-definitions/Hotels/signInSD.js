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

When(/^I enter invalid email address "(.*)"$/, async function(signInEmail) {
    await signInPage.typeInEmail(signInEmail)
})

When(/^I enter invalid password "(.*)"$/, async function(signInPwd) {
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

When(/^I click on SignIn link$/, async function() {
    await signInPage.clickSignIn()
    await browser.pause(2000)
})

When(/^I click on SignUp link$/, async function() {
    await signInPage.clickSignUp()
    await browser.pause(1000)
})

When(/^I enter invalid email address with at least '@' symbol "(.*)"$/, async function(invalidEmail) {
    await signInPage.typeInInvalidEmail(invalidEmail)
    await signInPage.clickInFrstNameField()
})

When(/^I verify error message is displayed$/, async function() {
    const emailErrorMsg = await signInPage.emailErrMsgText()
    const expectedErrorMsg = 'Enter a valid email address'
    expect(emailErrorMsg, 'Error message is NOT as expected').to.be.equal(expectedErrorMsg)
    await browser.pause(1000)
    await signInPage.clearEmailField()
    await signInPage.typeInValidEmail('mail@gmail.com')
})

When(/^I Enter invalid first name "(.*)"$/, async function(invalidFstName) {
    await signInPage.typeInInvalidFirstName(invalidFstName)
    await signInPage.clickInLastNameField()
})

When(/^I verify error for first name is visible$/, async function() {
    const firstNameErr = await signInPage.frstNameErrMsgText()
    const expFrstNameErr = 'First name cannot contain special characters'
    expect(firstNameErr, 'Error message is NOT as expected').to.be.equal(expFrstNameErr)
})

When(/^I enter invalid last name "(.*)"$/, async function(invalidLstName) {
    await signInPage.typeInInvalidLastName(invalidLstName)
    await signInPage.clickInPswrdField()
})

When(/^I verify error for last name paramiters is displayed$/, async function() {
    const lastNameErr = await signInPage.lastNameErrMsgText()
    const expLstNameErr = 'Last name cannot contain special characters'
    expect(lastNameErr, 'Error message is NOT as expected').to.be.equal(expLstNameErr)
})

When(/^I enter password "(.*)"$/, async function(password) {
    await signInPage.typeInSignUpPsswrd(password)
})

Then(/^I verify “Keep me signed in” checkbox is displayed and enabled$/, async function() {
    const checkBoxDisplayed = await signInPage.isCheckBoxDisplayed()
    expect(checkBoxDisplayed, 'Keep me signed in checkbox is NOT displayed').to.be.true
    const checkBoxIsEnabled = await signInPage.isCheckBoxEnabled()
    expect(checkBoxIsEnabled, 'Keep me signed in checkbox is NOT enabled').to.be.true
})

When(/^I verify “Continue” button is displayed but NOT enabled$/, async function() {
    const contBttnDisplayed = await signInPage.isCheckBoxDisplayed()
    expect(contBttnDisplayed, 'Continue button is NOT displayed').to.be.true
    const contBttnDisabled = await signInPage.isContinueBttnEnabled()
    expect(contBttnDisabled, 'Continue button IS enabled').to.be.false
})

When(/^I click “Terms and Conditions” link$/, async function() {
    await signInPage.clickTermsCondLink()
})

When(/^I verify “Terms and Conditions” page opens in new tab$/, async function() {
    await signInPage.switchWindow()
    const pageTitle = await signInPage.getTermsPgTitle()
    const expectedTitle = 'Terms of Service'
    expect(pageTitle, 'Terms and conditions page did NOT open').to.be.equal(expectedTitle) 
    await signInPage.switchWindow()
    await browser.pause(1000)
})

When(/^I click “Privacy Statement” link$/, async function() {
    await signInPage.clickPrivacyLink()
    await browser.pause(1000)
})

Then(/^I verify “Privacy Statement” page opens in new tab$/, async function() {
    await signInPage.switchWindow()
    const pageNewTitle = await signInPage.getTermsPgTitle()
    const expectedNewTitle = 'Hotels.com - Deals & Discounts'
    expect(pageNewTitle, 'Terms and conditions page did NOT open').to.include(expectedNewTitle)
})