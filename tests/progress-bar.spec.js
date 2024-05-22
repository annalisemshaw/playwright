const { test } = require("@playwright/test");
const { ProgressBarPage } = require("../models/progress-bar.model");

test('check progress bar is 75%', async ({page}) => {
    const progressBarPage = new ProgressBarPage(page)
    await progressBarPage.navigateToProgressBarPage()
    await progressBarPage.clickStartButton()
    while(await progressBarPage.progressBarPercent() < "75%") {
        console.log(`current percentage is ${await progressBarPage.progressBarPercent()}`)
    }
    await progressBarPage.clickStopButton()
})