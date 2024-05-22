const { test } = require("@playwright/test");
const { DynamicTablePage } = require("../models/dynamic-table.model");

test('Match the chrome cpu values', async ({page}) => {
    //new instance of table page
    const dynamicTablepage = new DynamicTablePage(page)
    //navigate to dynamic table web page
    await dynamicTablepage.navigateToDynamicTablePage()
    //get the chrome cpu percentage via its index
    let chromeCpuPercentage = await dynamicTablepage.getChromeCPUpercentage()
    //grabs the validation message to ensure our result mathes the inner text of the alert
    let validationMessage = await dynamicTablepage.getChromeValidationMessage()
    expect(chromeCpuPercentage).toMatch(validationMessage)
})