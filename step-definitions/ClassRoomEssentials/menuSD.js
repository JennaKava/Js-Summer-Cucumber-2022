const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect, assert } = require("chai");
const MainPage = require("../../Pages/ClassRoomEssentials/mainpage")
const mainPage = new MainPage

Given(/^I launch classroomessentialsonline.com website$/, async function() {
    await browser.url('https://classroomessentialsonline.com/');
    await browser.pause(2000)
})
 
When(/^I move mouse on Church Chairs menu$/, async function() {
    await mainPage.mouseOverMenue()
    await browser.pause(2000)
})

Then(/^I verify 7 option is displayed$/, async function() {
    const churchChairsMenu = await mainPage.getAllMenueElements()
    expect(churchChairsMenu.length, 'Church chairs menu list count is not as expected').to.equal(7);
})