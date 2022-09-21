const { Given, Then, When } = require("@wdio/cucumber-framework")
const { expect, assert } = require("chai");
const FeedbackPg = require("../../Pages/Hotels/FeedbackPg")
const feedbackPg = new FeedbackPg()
const SignInPage = require("../../Pages/Hotels/SignInPage")
const signInPg = new SignInPage()

Given(/^I launch Hotels.com landing page$/, async function() {
    await browser.url('https://www.hotels.com/')
    await browser.pause(2000)
})

When(/^I click on Sign In$/, async function() {
    await signInPg.clickSignIn()
    await browser.pause(1000)
})

When(/^I click “Feedback”$/, async function() {
    await signInPg.clickFeedbackLink()
    await browser.pause(2000)
    await signInPg.switchWindow()
})

When(/^I click on Submit button$/, async function() {
    // await feedbackPg.scrollToViewContBttn()
    await browser.pause(2000)
    await feedbackPg.clickSubmitBttn()
})

Then(/^I verify error message is displayed$/, async function() {
    const emptyFormErrorMsg = await feedbackPg.getEmpryFormErrorText()
    const expectedError = 'Please fill in the required information highlighted below.'
    expect(emptyFormErrorMsg, 'Error message is NOT as expected').to.be.equal(expectedError)
})

When(/^I verify star boxes section is in a red dotted box$/, async function() {
    const starGroupElem = await feedbackPg.findParentOfStarRating()
    const expectedParentIdAttribute = 'required_box_page_rating'
    expect(starGroupElem,'').to.be.equal(expectedParentIdAttribute)
})

