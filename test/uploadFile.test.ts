import {chromium} from "playwright";

describe("Upload file", ()=> {
    test(" Upload file to web", async() =>{
        const browser = await chromium.launch({
            headless: false
        });
        const filePath0 = '../videos/a.webm';
        const filePath1 = '../videos/b.webm';
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.sendgb.com/');
        await page.locator('"OK"').click();
        await page.setInputFiles("input[name = 'qqfile']",[filePath0, filePath1]);
        await browser.close();
    })
    test(" Upload file using on function", async() =>{
        const browser = await chromium.launch({
            headless: false
        });
        const filePath0 = '../videos/a.webm';
        const filePath1 = '../videos/b.webm';
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://the-internet.herokuapp.com/upload');
        page.on("filechooser", async (filechooser) => {
            await filechooser.setFiles([filePath0, filePath1]);
        })
        await page.click("div[id='drag-drop-upload']", {force : true});
        //await page.setInputFiles("input[id='file-upload']",filePath0);
        await page.locator("input[id= 'file-submit']").click();
    })
})