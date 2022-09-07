class Commands {

    async findWebElement(locator){
        return await $(locator)
    }

    async clickWebElement(locator){
        const element = await this.findWebElement(locator)
        //await element.waitForClickable({ timeout: 2000, timeoutMsg: 'serch button is not displayed'})
        await element.click()
    }
    
    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator)
        await element.setValue(data)
        
    }
    
    async isWebElementSelected(locator) {
        const element = await this.findWebElement(locator)
        return element.isSelected()
    }

    async isWebElementEnabled(locator) {
        const element = await this.findWebElement(locator)
        return await element.isEnabled()
    }

    async selectFromDropdown(locator, selectThis){
        const dropdownElement = await this.findWebElement(locator)
        await dropdownElement.selectByVisibleText(selectThis)
    }

    async getTextFromWebElement(locator) {
        const element = await this.findWebElement(locator);
        return await element.getText();
    }

    async getNumberVlueFromString(locator) {
        const element = await this.findWebElement(locator)
        return parseFloat(await element.getText())
    }

    async getAutoSugText(locator, userInput) {
        const autoSuggestions = await $$(locator)
        for(const selectedText of autoSuggestions) {
            const autoSuggestText = await selectedText.getText()
            if (autoSuggestText.toLowerCase().localeCompare(userInput.toLowerCase()) === 0) {
                await selectedText.click()
                break;
            }
        }
    }

    async chooseDate(locator, searchBy, thisDate) {
        const allDates = await $$(locator);
        for(const selectedDate of allDates){
            const date = await selectedDate.getAttribute(searchBy)
            if(date.localeCompare(thisDate) === 0) {
                await selectedDate.click()
                break;
            }
        }
    }
    // /**
    //  * Generic function to find a webElement
    //  * Input: locator
    //  */
    // async findWebElement(locator) {
    //     return await $(locator);
    // }

    // /**
    //  * Generic function to find webElements
    //  * Input: locator
    //  */
    async findWebElements(locator) {
        return await $$(locator);
    }

    // /**
    //  * Generic function to click a webElement
    //  * Input: locator
    //  */
    // async clickWebElement(locator) {
    //     const element = await this.findWebElement(locator);
    //     await element.click();
    // }

    // /**
    //  * Generic function to type a webElement
    //  * Input: locator, data
    //  */
    // async typeInWebElement(locator, data) {
    //     const element = await this.findWebElement(locator);
    //     await element.setValue(data);
    // }

    // /**
    //  * Generic function to find if WebElement is enabled
    //  * Input: locator
    //  */
    // async isWebElementEnabled(locator) {
    //     const element = await this.findWebElement(locator);
    //     return await element.isEnabled();
    // }

    // /**
    //  * Generic function to find if WebElement is displayed
    //  * Input: locator
    //  */
    // async isWebElementDisplayed(locator) {
    //     const element = await this.findWebElement(locator);
    //     return await element.isDisplayed();
    // }

    // /**
    //  * Generic function to select value form Dropdown (with select-tag)
    //  * Input: locator, selectThis
    //  */
    // async selectFromDropdown(locator, selectThis) {
    //     const dropdownElement = await this.findWebElement(locator);
    //     await dropdownElement.selectByVisibleText(selectThis);
    // }

    // async getTextFromWebElement(locator) {
    //     const element = this.findWebElement(locator);
    //     return await element.getText();
    // }

    // /**
    //  * Generic function to select value from auto suggestion
    //  * Input: valueToSelect, locatorForAutoSuggestionElements
    //  */
    async selectFromAutoSuggestions(locatorForAutoSuggestionElements, valueToSelect) {
        const autoSuggestionElements = await this.findWebElements(locatorForAutoSuggestionElements);

        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare(valueToSelect.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }
    }

    async selectDateFromCalendar(monthHeadingLocator, goToNextMonthLocator, allDatesLocator, dateToSelect) {
        for (let i=1 ; i <= 12 ; i++) {
            const monthSeen = await this.isWebElementDisplayed(monthHeadingLocator);
            if (monthSeen) {
                break;
            }
            await this.clickWebElement(goToNextMonthLocator);
        }
        const allDateElements = await this.findWebElements(allDatesLocator);
        for (const dateElement of allDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare(dateToSelect) === 0) {
                await dateElement.click();
                break;
            }
        }
    }


}
module.exports = Commands;