exports.DynamicTablePage = class DynamicTablePage {
    constructor(page) {
        this.page = page
        this.dynamicTableUrl = page.goto("/dynamictable")
        this.getCells = page.getByRole("cell")
        this.getHeaders = page.getByRole("columnheader")
        this.validationMessage = page.locator(".bg-warning")
    }
    async navigateToDynamicTablePage() {
        await this.dynamicTableUrl
    }
    async getChromeCellContent(i) {
        //maps through each element and store the cells text content into an array for us to read from
        let cells = await this.getCells.evaluateAll((elements) => elements.map((el) => el.textContent ))
        let chromeCPUindex = cells.slice(cells.indexOf("Chrome"), cells.indexOf("Chrome") + 5)
        return chromeCPUindex[i]
    }
    async getHeaderCPUindex() {
        let headers = await this.getHeaders.evaluateAll((elements) => elements.map((el) => el.textContent ))
        return headers.indexOf("CPU")
    }
    async getChromeCPUpercentage() {
        let chromeCpuPercentage = await this.getChromeCellContent(await this.getHeaderCPUindex())
        return `Chrome CPU ${chromeCpuPercentage}`
    }
    async getChromeValidationMessage() {
        let validationMessage = await this.validationMessage.innerText()
        return validationMessage
    }
}