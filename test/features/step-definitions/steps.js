const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../../pageobjects/login.page');
const SecurePage = require('../../pageobjects/secure.page');

const reporter = require('../../helper/reporter')


const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    // console.log(world.pickle.name.split(/:/).testid)
    // reporter.addStep(this.testid, "info", "I am on the login page")
    // browser.debug();
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    // reporter.addStep(this.testid, "info", `I login with ${username} and ${password}`)
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // reporter.addStep(this.testid, "info", `should see a flash message saying ${message}`)
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

