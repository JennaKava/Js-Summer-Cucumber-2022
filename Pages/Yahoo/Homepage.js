
const Commands = require("../Commands");
class Homepage {
    commands = new Commands()

    bellIconLoc = '#ybarNotificationMenu'
    notificMenueLoc = '//div[@id="notifDropdownContainer"]'

    async mousOverBellIcon() {
        await this.commands.mouseOver(this.bellIconLoc)
    }

    async isNotificationDisplayed() {
        return await this.commands.isWebElementDisplayed(this.notificMenueLoc)
    }
}
module.exports = Homepage