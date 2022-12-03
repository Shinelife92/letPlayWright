import {Browser, BrowserContext, chromium, Page} from "playwright"

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
        await page.goto("https://letcode.in/frame"); //Cần đăt await ở đay

    })
    test("Interact with frame", async () => {
        const noFrame: number = page.frames().length;
        console.log("Số frame in page is " + noFrame)
        const frame = page.frame({name : "firstFr"});
        if(frame != null){
            await frame.fill("input[name='fname']", "DinhPX");
            await frame.fill("input[name='lname']", "Automation with Playwright")
        }else throw Error ("No such a frame");
        
        const frames = frame.childFrames();
        console.log('No of inner frame',frames.length )
        await frames[0].fill("input[name='email']", 'dinhpx@kaopiz.com');
        //await frame.fill("input[name = 'lname']", "Letcode"); Frame cha
        
        const parent = frames[0].parentFrame();  //Xác định frame cha từ con
        parent?.fill("input[name='lname']", "Automation with Webdriver IO")
    })
})