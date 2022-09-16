const Commands = require("../Commands");

class Landingpage {
    commands = new Commands
    timeMachineLoc = '//div[@id="timeMachine"]//a'
    
    async scrollTimeMachieInView () {
        await this.commands.scrollElementIntoView(this.timeMachineLoc)
    }

    async clickTimeMachineBttn () {
        await this.commands.clickWebElement(this.timeMachineLoc)
    }

}
module.exports = Landingpage