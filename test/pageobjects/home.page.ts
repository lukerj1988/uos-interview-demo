import Page from "./page.ts";

class HomePage extends Page {
    
    protected title = 'Home | The University of Sheffield'

    protected url = 'https://www.sheffield.ac.uk/'

    public get copyrightFooter() { return $(".large-5.columns.copyright")}
}

export default new HomePage()