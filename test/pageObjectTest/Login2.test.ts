import { Browser, BrowserContext, Page, chromium} from "playwright";
import CommonFunction from "../../Page/common.page";
import HeaderPage from "../../Page/header.page";
import LoginPage from "../../Page/login.page";
import * as data from "../../data/login.cred.json";
import 'setimmediate'; //Phải cho dòng này mới gọi dc page


describe("TC001",  () => {
    let browser : Browser;
    let context : BrowserContext;
    let page: Page;
    let headerPage : HeaderPage;
    let loginPage : LoginPage;
    let commonPage: CommonFunction;
    beforeAll(async () => {
        browser = await chromium.launch({
            headless : false
        })
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/"); //Cần đăt await ở đay
        headerPage = new HeaderPage(page);
        loginPage = new LoginPage(page);
        commonPage = new CommonFunction(page);

    })
    test("Login Positive",async () => {
        expect(page.url()).toBe("https://letcode.in/");
        await headerPage.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin");
        await loginPage.loginAction(data.email, data.pass);
        const toastMess = await commonPage.toast();
        expect(await toastMess?.textContent()).toContain("Welcome");
        await headerPage.clickSignoutLink();
       
    })
})