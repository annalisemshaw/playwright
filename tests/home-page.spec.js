const { test, expect } = require('@playwright/test')
const { HomePage } = require('../models/home-page.model')
const { log } = require('console')

test('navigate to homepage', async ({page}) => {
    const homePage = new HomePage(page)
    await homePage.navigateToHomePage()
    let allLinks = await homePage.getAllLinkTags()
    console.log(allLinks.length)
    console.log(allLinks[11])
    await expect(allLinks.indexOf("Click").toBe(11))
})