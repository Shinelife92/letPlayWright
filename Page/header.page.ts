import { Page } from "playwright";

export default class HeaderPage{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }
    public  get  LoginBtnEle (){
        this.page.waitForLoadState();
        const LoginBtn = this.page.$("text=Log in");
        if(LoginBtn != null){
            return LoginBtn;
        }else{
            throw new Error("No element")
        }
       
    }

    public get SignoutBtnEle(){
        this.page.waitForLoadState();
        const SignoutBtn = this.page.$("text=Sign out");
        return SignoutBtn;
    }

    public async clickLoginLink(){
        const ele = await this.LoginBtnEle;
        await ele?.click();
    }

    public async clickSignoutLink(){
        const ele = await this.SignoutBtnEle;
        await ele?.click();
    }
}