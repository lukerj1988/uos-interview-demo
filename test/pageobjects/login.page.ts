import { $ } from '@wdio/globals'
import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    protected title = 'Online Services - The University of Sheffield'

    protected url = 'https://login.shef.ac.uk/cas/login'

    public get inputUsername() { return $("#username")}
    public get inputPassword() { return $("#password")}
    public get loginButton() { return $("input[value='Log in']")}
    public get invalidCredentials() { return $("//span[normalize-space()='Invalid credentials.']")}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();
