import{Browser, BrowserContext, chromium, Page} from "playwright"

describe ("Handle Alert", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    beforeAll(async () =>{
        browser = await chromium.launch({
            headless : false
        })
        context = await browser.newContext();
        page = await context.newPage();
        page.goto("https://letcode.in/alert");
    })

    /*
    test("Handle Prompt Alert", async () => {
        const ele = page.locator("#prompt"); //Dùng cách này hơn dùng dấu $ dễ bị lỗi navigate
        page.on("dialog",  (dialog) =>{
            console.log('Message ' + dialog.message());
            console.log(`Default values is ` + dialog.defaultValue());
            console.log(`Dialog type is ` + dialog.type());
            dialog.accept("Hello DinhPX")
            //dialog.dismiss();
        })
        await ele?.click();//dòng này phải để ở đây vs case accept
      

    })
    */
   /*
    test("Handle Simple Alert", async () => {
        const ele = page.locator("#accept"); //Dùng cách này hơn dùng dấu $ dễ bị lỗi navigate

        page.on("dialog",  (dialog) =>{
            console.log('Message ' + dialog.message());
            //console.log(`Default values is ` + dialog.defaultValue());
            console.log(`Dialog type is ` + dialog.type());
            dialog.accept();
        })
        await ele?.click();
      

    })
    */
   /*
    test("Handle Confirm Alert", async () => {
        const ele = page.locator("#confirm"); //Dùng cách này hơn dùng dấu $ dễ bị lỗi navigate

        page.on("dialog",  (dialog) =>{
            console.log('Message ' + dialog.message());
            console.log(`Dialog type is ` + dialog.type());
            //dialog.accept();
            dialog.dismiss();
        })
        await ele?.click();
      

    })
    */
    test("Handle Sweet Alert", async () => {
        const ele = page.locator("#modern"); //Dùng cách này hơn dùng dấu $ dễ bị lỗi navigate
        await ele?.click();
       let text = await page.locator('[class=title]').textContent();
       console.log("Message là " + text);
       await page.locator('[aria-label="close"]').click();
      

    })

    // afterAll(async ()=> {
    //    await page.close();
    //     await context.close();
    //     await browser.close();
    // })

})