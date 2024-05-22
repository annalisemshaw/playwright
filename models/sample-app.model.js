const { expect } = require('@playwright/test');

exports.SampleAppPage = class SampleAppPage { //exports a class named SampleAppPage
    constructor(page) { // a constructor of the class, with the page fixture to represent the browser page. 
        this.page = page  // our page
        this.url = page.goto("/sampleapp")
        this.userNameField = page.getByPlaceholder('User Name') // find by placeholder
        this.passwordField = page.getByPlaceholder('********') // find by placeholder
        this.loginButton = page.getByRole('button', { name: 'Log In' }) // find button element with the name of Log In
        this.logoutButton = page.getByRole('button', { name: 'Log Out' }) // find button element with the name of Log Out
        this.loginText = page.locator("#loginstatus") // Finds an element with the ID 'loginstatus'
    }  

    // below will utilize the above elements 
    async navigateToSampleApp() { 
        await this.url  // go to sample app page
    }
    async fillUsernameField(username) { 
        await this.userNameField.fill(username) //  Fills the username field with the provided username
    } 
    async fillPasswordField(password) { 
        await this.passwordField.fill(password)  // Fills the username field with the provided password
    } 
    async clickLogoutButton() { 
        await this.logoutButton.click() // Clicks the logout button.
    } 
    async clickLoginButton() { 
        await this.loginButton.click() // Clicks the login button.
    } 
    async expectedLoginTextToBe(text) { 
        await expect(this.loginText).toHaveText(text) // Asserts that the loginText element has the specified text.
    } 
}