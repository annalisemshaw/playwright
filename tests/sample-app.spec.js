const { test } = require('@playwright/test')
const { SampleAppPage } = require('../models/sample-app.model')

test.describe.parallel('suite', () => {
  test('log in success', async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page)
    await sampleAppPage.navigateToSampleApp()
    await sampleAppPage.fillUsernameField("Percival Picklepants")
    await sampleAppPage.fillPasswordField('pwd')
    await sampleAppPage.clickLoginButton()
    await sampleAppPage.expectedLoginTextToBe("Welcome, Percival Picklepants!")
  });
  
  
  test('wrong password', async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page)
    await sampleAppPage.navigateToSampleApp()
    await sampleAppPage.fillUsernameField("Annalise Shaw")
    await sampleAppPage.fillPasswordField('password') // correct password is: pwd, so we'll use password to get the error
    await sampleAppPage.clickLoginButton()
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
  });
  
  test('no username', async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page)
    await sampleAppPage.navigateToSampleApp()
    //skip filling out the username
    await sampleAppPage.fillPasswordField('pwd')
    await sampleAppPage.clickLoginButton()
    await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
  });
  
  test('log out success', async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page)
    await sampleAppPage.navigateToSampleApp()
    await sampleAppPage.fillUsernameField("annalise")
    await sampleAppPage.fillPasswordField('pwd')
    await sampleAppPage.clickLoginButton()
    await sampleAppPage.expectedLoginTextToBe("Welcome, annalise!")
    await sampleAppPage.clickLogoutButton
    await sampleAppPage.expectedLoginTextToBe("User logged out.")
  });
})