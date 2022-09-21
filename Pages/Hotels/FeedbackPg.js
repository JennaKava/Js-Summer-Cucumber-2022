const Commands = require("../Commands")

class FeedbackPg {
    commands = new Commands()
    submitBttnLoc = '//div[@id="footer"]/preceding::button[contains(text(), "Submit")]'
    fourStarRatingLoc = '//div[@class="radio-group"]//label[contains(@for, "page-rating-4")]'
    starRatingGroup = '//div[@class="radio-group"]'
    errorMsgLoc = '//div[@id="validation_header"]//p[contains(text(), "Please fill in")]'
    redDotBoxLoc = '//fieldset[@id="required_box_page_rating"]'
    footerLinkLoc = '//h5[@class="privacy"]//a'
    commentBoxLoc = '//textarea[@id="verbatim"]'
    returnDropDownLoc = '//select[@id="will-you-return"]'
    dropDownSelection = '//option[@value="Somewhat likely"]'
    bookdBeforeNoBttn = '//span[@data-localization="booked-before-no"]'
    completePgYesBttn = '//span[@data-localization="were-you-successful-yes"]'
    thankYouMsg = '//div[@id="thank-you"]//h5[contains(text(), "THANK YOU")]'





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

    async selectFourStarRatng() {
        await this.commands.clickWebElement(this.fourStarRatingLoc)
    }

    async typeInCommentBox(data) {
        await this.commands.typeInWebElement(this.commentBoxLoc, data)
    }

    async slctLikelyFrmDropDwn() {
        await this.commands.clickWebElement(this.returnDropDownLoc)
        await this.commands.clickWebElement(this.dropDownSelection)
    }

    async selctNoFrBookBfr() {
        await this.commands.clickWebElement(this.bookdBeforeNoBttn)
    }

    async slctYesFrAccomplish() {
        await this.commands.clickWebElement(this.completePgYesBttn)
    }

    async getThankYouMsgText() {
        return await this.commands.getTextFromWebElement(this.thankYouMsg)
    }
}
module.exports = FeedbackPg