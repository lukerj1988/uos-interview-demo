import { expect } from '@wdio/globals'
import { navigateToPage } from '../actions/navigation.ts'
import homePage from '../pageobjects/home.page.ts'
import loginPage from '../pageobjects/login.page.ts'
import staffHubPage from '../pageobjects/staff.hub.page.ts'

//This edit was added as part of the UoS Github Demo video
//Second edit

describe('Should be able to navigate to the University of Sheffield Home Page', async function () {

    before(async function () {
        await navigateToPage(homePage)
    })
    
    it('Can view the copyright footer containing © 2023 The University of Sheffield', async function () {
        // Further abstraction can be used to simplify code - getText as a utility to combine scrollIntoView and getText to return the text
        // Have left code un-abstracted to demonstrate steps taken more clearly
        await homePage.copyrightFooter.scrollIntoView()
        const copyrightText = await homePage.copyrightFooter.getText()
        await expect(copyrightText).toEqual('© 2023 The University of Sheffield')
    })
})

describe('Should be able to login with valid staff user details', async function () {
    
    beforeEach(async function () {
        await navigateToPage(loginPage)
    })

    it('Can log in with valid staff user details', async function () {
        // Login details can be abstracted to user details types for different users
        // Or stored in a .env file to avoid sharing via git
        await loginPage.login('incorrect', 'willfail')
        await expect(await browser.getTitle()).toEqual(staffHubPage.getTitle())
        await expect(await browser.getUrl()).toEqual(staffHubPage.getUrl())
    })

    it('Can login with valid staff credentials without seeing an error', async function () {
        await loginPage.login('incorrect', 'willfail')
        await expect(await loginPage.invalidCredentials.isDisplayed()).toBe(false)
    })
})