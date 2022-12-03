import { Page } from "playwright";

export default class LoginPage{
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }
    // public get emailTextEle(){
    //     const EmailTextBox = this.page.$("input[name='email']");
    //     return EmailTextBox;
    // };
    emailTextEle = async () => await this.page.$("input[name='email']");  //Chuyển thành arrow function vì hàm hay đơn giản thân hàm chỉ có hàm nhỏ

    // public get passwordTextEle(){
    //     const PassWordTextBox = this.page.$("input[name='password']");
    //     return PassWordTextBox;
    // }
    passwordTextEle = async () => await this.page.$("input[name='password']");

    public get LoginBtnEle(){
        const LoginBtn = this.page.$("//button[text()='LOGIN']");
        return LoginBtn;
    }
    public async loginAction(email: string, pass: string){
        const Email = await this.emailTextEle();
        await Email?.fill(email);
        const Pass = await this.passwordTextEle();
        await Pass?.fill(pass);
        const LoginButton  = await this.LoginBtnEle;
        LoginButton?.click();
    }
}