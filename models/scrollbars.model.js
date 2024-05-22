exports.ScrollbarsPage = class Scrollbars {
    constructor(page) {
        this.page = page
        this.scrollBarUrl = page.goto("/scrollbars")
        this.hidingButton = page.locator('#hidingButton')
    }
    async navigateToScrollbarPage() {
        await this.scrollBarUrl
    }
    async clickHidingButton() {
        await this.hidingButton.click()
    }
}