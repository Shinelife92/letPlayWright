import {chromium} from "playwright";
describe('Launch browser', () =>{
     test('open letcode', async () => {
       const browser =  await chromium.launch({
        headless: false
       });
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto('https://www.sendgb.com/');
       await page.locator('"OK"').click();
       await page.locator("input[name = 'qqfile']").click();
      
       await browser.close();
     })
})