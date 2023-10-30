// Wait utility for the navigation functions. Waits until the page has loaded before continuing.

export async function waitForPageLoad(): Promise<void> {
    browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
            timeout: 60 * 1000, // 60 seconds
            timeoutMsg: 'Message on failure'
        }
    )
}