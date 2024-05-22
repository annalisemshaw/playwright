const { test } = require('@playwright/test')
const { TextInputPage } = require('../models/text-input.model')

test('test updating button', async ({page}) => {
    const textInputPage = new TextInputPage(page)
    await textInputPage.navigateToTextInputPage()
    await textInputPage.fillTextInput('this is a button')
    await textInputPage.clickUpdateButton()
    await textInputPage.expectButtonTextToBe('this is a button')
})