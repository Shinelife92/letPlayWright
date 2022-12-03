import { Page } from "playwright";

export default class CommonFunction{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    // public get toast(){
    //     const Toaster = this.page.waitForSelector("div[role='alertdialog']");
    //     return Toaster;
    // }

    toast = async () => await this.page.waitForSelector("div[role='alertdialog']");

  
}