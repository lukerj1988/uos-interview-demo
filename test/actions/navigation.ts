import Page from "../pageobjects/page.ts"
import { waitForPageLoad } from "../utilities/wait.ts"

// Generic navigation function. 
// Requires call to page object for URL and Title
export async function navigateToPage(page: Page): Promise<void> {
    console.log(page.getUrl())
    await browser.navigateTo(page.getUrl())
    await waitForPageLoad()
    await expect(browser).toHaveTitle(page.getTitle())
}