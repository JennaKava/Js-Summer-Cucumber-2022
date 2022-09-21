const Commands = require("../Commands")

class FeedbackPg {
    commands = new Commands()
    submitBttnLoc = '//div[@id="footer"]/preceding::button[contains(text(), "Submit")]'
    starRatingLoc = '//div[@class="radio-group"]//label[contains(@for, "page-rating-")]'
    starRatingGroup = '//div[@class="radio-group"]'
    errorMsgLoc = '//div[@id="validation_header"]//p[contains(text(), "Please fill in")]'
    redDotBoxLoc = '//fieldset[@id="required_box_page_rating"]'
    footerLinkLoc = '//h5[@class="privacy"]//a'

    async clickSubmitBttn() {
        await this.commands.clickWebElement(this.submitBttnLoc)
    }

    async scrollToViewContBttn() {
        await this.commands.scrollToTheView(this.footerLinkLoc)
    }
    
    async findParentOfStarRating() {
        return await this.commands.findParentElement(this.starRatingGroup, 'id')
    }

    async getEmpryFormErrorText() {
        return await this.commands.getTextFromWebElement(this.errorMsgLoc)
    }
}
module.exports = FeedbackPg