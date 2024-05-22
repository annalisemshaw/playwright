const { expect } = require('@playwright/test');

exports.TextInputPage = class TextInputPage {
    constructor(page) {
        this.page = page
        this.url = page.goto('/textinput')
        this.inputBox = page.locator('#newButtonName')
        this.updatingButton = page.locator('#updatingButton')
    }
    async navigateToTextInputPage() {
        await this.url
    }
    async fillTextInput(text) {
        await this.inputBox.fill(text)
    }
    async clickUpdateButton() {
        await this.updatingButton.click()
    }
    async expectButtonTextToBe(text) {
        await expect(this.updatingButton).toHaveText(text)
    }
}
