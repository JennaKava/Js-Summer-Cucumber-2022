const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect, assert } = require("chai");
const Homepage = require("../../Pages/Facebook/Homepage");
const Loginpage = require("../../Pages/Facebook/Loginpage");
const homepage = new Homepage()
const loginpage = new Loginpage()

Given(/^I am on facebook landing page$/, async function() {
    await browser.url('/');
});

Then(/^I verify login username field is enabled$/, async function() {
    expect(await homepage.isLoginEmailFieldEnabled(), 'Login email field is NOT enabled').to.be.true;
});

Then(/^I verify login password field is enabled$/, async function() {
    expect(await homepage.isLoginPwdFieldEnabled(), 'Login password field is NOT enabled').to.be.true;
});

Then(/^I verify login button field is enabled$/, async function() {
    expect(await homepage.isLoginBtnEnabled(), 'Login button is NOT enabled').to.be.true;
});

When(/^I enter "(.*)" as username$/, async function(username) {
    await homepage.enterLoginEmail(username);
});

When(/^I enter "(.*)" as password$/, async function(password) {
    await homepage.enterLoginPassword(password);
});

When(/^I click login button$/, async function() {
    await homepage.clickLoginButton();
});

Then(/^I verify error is displayed$/, async function() {
    expect(await loginpage.isLoginErrDisplayed(), '').to.be.true;
});