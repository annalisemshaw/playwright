exports.ClassAttributePage = class ClassAttributePage {
    constructor(page) {
        this.page = page
        this.classAtrributeUrl = page.goto("/classattr")
        this.blueButton = page.locator(".btn-primary")
    }
    async navigateToClassAttributePage() {
        await this.classAtrributeUrl
    }
    async clickBlueButton() {
        await this.blueButton.click()
    }
}