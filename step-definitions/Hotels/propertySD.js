const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect, assert } = require("chai");
const Property = require('../../Pages/Hotels/Property')
const property = new Property()

Given(/^I go to hotels home page site$/, async function() {
    console.log(`ek`);
    await browser.url('https://www.hotels.com/')
    await browser.pause(2000)
})

When(/^I click on “List your property”$/, async function() {
    await property.clickListProperty()
    await browser.pause(2000)
    await property.switchToNewWindow()
})

When(/^I verify What would you like to list is displayed$/, async function() {
    const listMsg = await property.getWhatToListIsText()
    const expectedMsg = 'What would you like to list?'
    expect(listMsg, 'Message What would you like to list is NOT displayed').to.equal(expectedMsg)
})

When(/^I verify Lodging and Private residence options are displayed$/, async function() {
    const lodgingElem = await property.getTextLodgingElem()
    expect(lodgingElem, 'Lodging option is NOT displayed').to.equal('Lodging')
    const privateElem = await property.getTextPrivateResElem()
    expect(privateElem, 'Private residence option is NOT displayed').to.equal('Private residence')
})

When(/^I click on “Private residence“$/, async function() {
    await property.clickOnPrivateResidence()
    await browser.pause(2000)
})

When(/^I verify ”Step 1 of 3” is displayed$/, async function() {
    const stepOneofThree = await property.textStepOneOfThree()
    expect(stepOneofThree, 'Step 1 of 3 is NOT displayed').to.equal('Step 1 of 3')
})

When(/^I verify “See how much you could earn!” is displayed$/, async function() {
    const howMuchMsg = await property.textSeeHowMuchMsg()
    const expectedMsg = 'See how much you could earn!'
    expect(howMuchMsg, 'See how much you could earn! is NOT displayed').to.equal(expectedMsg)
})

When(/^I enter ”4“ as bedroom quantity clicking plus (.+) times$/, async function(numberOfClicks) {
    await property.clickAddBedroomQuantity(numberOfClicks)
    await browser.pause(1000)
})

When(/^I enter “2.5“ as bathroom clicking plus (.+) times$/, async function(numberOfClicks) {
    await property.clickAddBathroomQuantity(numberOfClicks)
    await browser.pause(1000)
})

When(/^I click on “Next” button$/, async function() {
    await property.clickOnNextBttn()
    await browser.pause(1000)
})

When(/^I verify ”Step 2 of 3” is displayed$/, async function() {
    const stepTwoofThree = await property.textStepTwoOfThree()
    expect(stepTwoofThree, 'Step 2 of 3 is NOT displayed').to.equal('Step 2 of 3')
})

When(/^I verify Where is your property located is displayed$/, async function() {
    const whereIsMsg = await property.textWhereYourProperty()
    const expectedMsg = 'Where is your property located?'
    expect(whereIsMsg, 'Where is your property located? is NOT displayed').to.equal(expectedMsg)
})

When(/^I enter (.+) in address$/, async function(data) {
    await property.clickInAddressField()
    await browser.pause(1000)
    await property.typeInAdress(data)
    await browser.pause(1000)
})

When(/^I select (.+) from auto-suggestion$/, async function(userInput) {
    await property.chooseFromAutoSuggestions(userInput)
    await browser.pause(1000)
})

Then(/^I verify graph is displayed$/, async function() {
    const mapElement = await property.isMapDisplayed()
    expect(mapElement, 'Graph is NOT displayed').to.be.true   
})

When(/^I verify pin in graph is displayed$/, async function() {
    const pinElement = await property.isPinDisplayed()
    expect(pinElement, 'Pin in graph is NOT displayed').to.be.true
    await browser.pause(1000)
})

When(/^I verify “Pin location may not be exact.“ is displayed below graph$/, async function() {
    const elementNextToMap = await property.getNextElementAfterMap()
    console.log(`ek1->${elementNextToMap}`)
    const pinDisclamerMsg = await elementNextToMap.getText()
    const expectedMsg = 'Pin location may not be exact.'
    expect(pinDisclamerMsg).to.equal(expectedMsg)
    await browser.pause(1000)
})
