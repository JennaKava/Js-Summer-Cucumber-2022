class Commands {


    /**
     * Generic function to find a webElement
     * Input: locator
     */
    async findWebElement(locator) {
        return await $(locator);
    }

    /**
     * Generic function to find webElements
     * Input: locator
     */
    async findWebElements(locator) {
        return await $$(locator);
    }

    /**
     * Generic function to click a webElement
     * Input: locator
     */
    async clickWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.click();
    }
    async mouseOver(locator) {
        const element = await this.findWebElement(locator)
        await element.moveTo()
    }

    async scrollElementIntoView(locator) {
        const element = await $(locator);
        await element.scrollIntoView();
    }
    /**
     * Generic function to type a webElement
     * Input: locator, data
     */
    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator);
        await element.setValue(data);
    }

    /**
     * Generic function to find if WebElement is enabled
     * Input: locator
     */
    async isWebElementEnabled(locator) {
        const element = await this.findWebElement(locator);
        return await element.isEnabled();
    }

    /**
     * Generic function to find if WebElement is displayed
     * Input: locator
     */
    async isWebElementDisplayed(locator) {
        const element = await this.findWebElement(locator);
        return await element.isDisplayed();
    }

    /**
     * Generic function to select value form Dropdown (with select-tag)
     * Input: locator, selectThis
     */
    async selectFromDropdown(locator, selectThis) {
        const dropdownElement = await this.findWebElement(locator);
        await dropdownElement.selectByVisibleText(selectThis);
    }

    async getTextFromWebElement(locator) {
        const element = this.findWebElement(locator);
        return await element.getText();
    }

    /**
     * Generic function to select value from auto suggestion
     * Input: valueToSelect, locatorForAutoSuggestionElements
     */
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

    async getNumberofWindHadls() {
        return await browser.getWindowHandles()
    }

    async getWindTitle() {
        return await browser.getTitle();
    }
    //switch handle from current opend window, works for two open windows
    async switchWindowHandle() {
        const allHandles = await this.getNumberofWindHadls()
        const windowHandle = await browser.getWindowHandle();   // h1

        for (const handle of allHandles) {        // allHandles = [h1, h2]
            if (handle != windowHandle) {
                await browser.switchToWindow(handle);
            }
        }
    }

    async closeAllWindsExptThis (locator) {
        const allHandles = await browser.getWindowHandles();

        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const pageTitle = await browser.getTitle();
            if (!pageTitle.includes(locator)) {
                await browser.closeWindow();
            }
        }
    }


}
module.exports = Commands;