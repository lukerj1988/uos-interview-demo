import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {


    protected title: string
    protected url: string

    public open (path: string) {
        return browser.url(path)
    }

    public getTitle(): string {
        return this.title
    }

    public getUrl(): string {
        return this.url
    }

    public async checkPageLoaded(elm: WebdriverIO.Element): Promise<void> {
        expect(elm).toExist
    }

    public async checkPageHeaderLoaded(elm: WebdriverIO.Element, text: string): Promise<void> {
        expect(await elm.getText()).toEqual(text)
    }
}
