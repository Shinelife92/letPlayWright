import {Browser, BrowserContext, chromium, Page} from "playwright";
describe("", () => {
    let browser : Browser;
    let context : BrowserContext;
    let page: Page;
    beforeAll(async () => {
        browser = await chromium.launch({
            headless : false
        })
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://letcode.in/windows"); //Cần đăt await ở đay

    })
    test("Test Home Page", async() =>{
        console.log(await page.title());
        expect(await page.title()).toBe("Window handling - LetCode");
    })
    /*
    test("Single Page Handing",async () => {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#home")
        ])
        await newWindow.waitForLoadState();
        expect(newWindow.url()).toContain("test");
        await newWindow.click("'Log in'");
        //await newWindow.waitForNavigation();
        expect(newWindow.url()).toContain("signin");
        //await newWindow.close(); //Close tab
        await page.bringToFront();  //Giúp đưa tab ở page gốc dc hiển thị lên trước
        await page.locator('text=Courses').click();
       
    })
    */
   test("Multiple handing", async () => {
        const [multipage] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#multi")

        ])
        await multipage.waitForLoadState();
        const allWindows = multipage.context().pages();
        const sotrang : number = allWindows.length;
        console.log("Số trang " + sotrang);
        allWindows.forEach(page => {
            console.log(page.url());
        });
        await allWindows[1].bringToFront();
        allWindows[1].on("dialog",  (dialog) =>{
            console.log('Message ' + dialog.message());
            dialog.accept();
        })
        await allWindows[1].click("id=accept");
   })

   
    afterAll(async ()=> {
       await page.close();
        await context.close();
        await browser.close();
    })
})