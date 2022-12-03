import { Browser, BrowserContext, chromium, Page } from "playwright";

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
        await page.goto("https://letcode.in/elements"); //Cần đăt await ở đay

    })
    
    test("Enter Git Username", async () => {
        const filePath = '../videos/Envidence/';
        await page.locator("nav[role='navigation']").screenshot({path: filePath + Date.now() + 'ScreenShot.png'});
        await page.waitForLoadState();
        const ele = await page.$("input[name='username']");
        await ele?.fill("ortonik");
        //await ele?.press("Enter");
    })
    
    
    test("Print All Repo", async () =>{
        await page.waitForSelector("app-gitrepos ol li", {timeout : 5000});
        const repos = await page.$$("app-gitrepos ol li");
        console.log(repos.length)
        //Cách 1
        for await (const repo of repos){
             console.log(await repo.innerText())
        }
        //Cách 2 tự viết
         repos.forEach( async (repo) => {
            console.log( await repo.innerText())
        })

       const allUrls = await Promise.all(repos.map(async (repo, i) => {
            return await repo.innerText()
        }));
        console.log(allUrls);

    }) 
    
    afterEach( async ()=>{
        const filePath = '../videos/Envidence/';
        await page.screenshot({path: filePath + Date.now() + 'ScreenShot.png', fullPage : true})
       
    } )
    afterAll(async ()=> {
        await page.close();
         await context.close();
         await browser.close();
     })
})