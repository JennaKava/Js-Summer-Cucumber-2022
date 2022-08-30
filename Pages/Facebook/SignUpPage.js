const MyStringFunctions = require("../../Utils/MyStringFunctions");
const Commands = require("../Commands");

class SignUpPage {

    commands = new Commands();
    // Locators for web-elements on the Sign up page (variables)
    dateLocator = '#day';
    monthLocator = '#month';
    yearLocator = '#year';
    selectedDateLocator = "//select[@aria-label='Day']//option[@selected]";


    // Functions in order to interact with the web-elements on the Sign up page
    
    // async selectBirthDate(date, month, year) {
    //     await this.commands.selectFromDropdown(this.dateLocator, date);
    //     await this.commands.selectFromDropdown(this.monthLocator, month);
    //     await this.commands.selectFromDropdown(this.yearLocator, year);
    // }

    async selectBirthDate(birthDate) {
        /**
         *  split birthDate by ' '  ['12', 'nOv', '1990']
         *  use a helper-function to convert month into Titlecase (eg:Abc)
         */
        const birthDateValues = birthDate.split(' ');
        birthDateValues[1] = MyStringFunctions.toTitleCase(birthDateValues[1])  // Nov
        await this.commands.selectFromDropdown(this.dateLocator, birthDateValues[0]);
        await this.commands.selectFromDropdown(this.monthLocator, birthDateValues[1]);
        await this.commands.selectFromDropdown(this.yearLocator, birthDateValues[2]);
    }

    async getSelectedBirthDay() {
        return await this.commands.getTextFromWebElement(this.selectedDateLocator);
    }




}
module.exports = SignUpPage;