const Commands = require("../Commands");

class MainPage {
    commands = new Commands

    churchChairMenuElLoc = '//a[@href="/church-chairs/"]'
    churchChairMenu = '//a[@href="/church-chairs/"]/following-sibling::div//li//a'

    async mouseOverMenue() {
        await this.commands.mouseOver(this.churchChairMenuElLoc)
    }

    async getAllMenueElements() {
        return await this.commands.findWebElements(this.churchChairMenu)
    }
}
module.exports = MainPage