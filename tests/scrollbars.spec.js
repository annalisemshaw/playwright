const { test } = require("@playwright/test");
const { ScrollbarsPage } = require("../models/scrollbars.model");
const { HomePage } = require("../models/home-page.model");

test('clicking hidden button', async ({page}) => {
    const scrollBarPage = new ScrollbarsPage(page)
    await scrollBarPage.navigateToScrollbarPage()
    await scrollBarPage.clickHidingButton()
})