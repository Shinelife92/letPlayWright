import {chromium} from "playwright";
describe('Launch browser', () =>{
     test('open letcode', async () => {
       const browser =  await chromium.launch({
        headless: false
       });
       const context = await browser.newContext({
          recordVideo:{
            dir: "./videos/"
          }
       });
       const page = await context.newPage();
       await page.goto('https://letcode.in/');
       await page.locator('"Log in"').click();
       await page.fill("input[name = 'email']", 'koushik350@gmail.com');
       await page.fill("input[name = 'password']", 'Pass123@');
       await page.locator("button:text('LOGIN')").click();
       await page.locator('"Sign up"').click();
       await browser.close();


       
     })
})