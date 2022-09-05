const Commands = require("../Commands");

class Loginpage {

    commands = new Commands();

    // Locators of login page webElementile number")]
    loginErrorLocator = '//div[contains(text(), "The email or mobile number you entered")]'


    // Function in order to interact with login page web elements

    /**
     * function to get if login error is displayed
     */
    async isLoginErrDisplayed() {
        return await this.commands.isWebElementDisplayed(this.loginErrorLocator);
    }
}
module.exports = Loginpage;