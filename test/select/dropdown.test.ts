import {Browser, BrowserContext, chromium, Page} from "playwright";
describe("Input field", () =>{
    let browser: Browser;
    let context : BrowserContext;
    let page: Page;
    beforeAll(async ()=>{
        browser = await chromium.launch({
            headless: false
        })
        context = await browser.newContext();
        page = await context.newPage();
        page.goto("https://letcode.in/dropdowns");
        

    })
    // test("Select Apple", async() => {
    //     const fruits =  page.locator("#fruits"); 

    //     await fruits.selectOption("1");
    //     const message =await page.locator("p[class=subtitle]").textContent();
    //     if(message){
    //         expect(message).toContain("Mangso");
    //     }
        
        
    // })
    /*
    test("Select Multiple", async() => {
        const superheros =  page.locator("#superheros"); 

        //superheros.selectOption([{value: "am"}, {value: "bt"}, {value: "dd"}]);

        //superheros.selectOption([{index: 1}, {index: 2}, {index: 3}]);
        superheros.selectOption([{label: "Ant-Man"}, {label: "Aquaman"}, {label: "The Avengers"}, {label: "Batwoman"}]);
        // const message =await page.locator("p[class=subtitle]").textContent();
        // if(message){
        //     expect(message).toContain("Ant-Man");
        // }
        
        
    })
    */

     test("count of the select", async() => {
        await page.locator("#lang").waitFor();  //Cách này có vẻ tối ưu hơn để ko bị lỗi navigate
        const lang =  await page.$$("#lang option"); //Cú pháp này giống findElements trong selenium. Thêm chữ option vào để lấy dc toàn bộ array
       console.log("Length là " + lang.length)
        
        
     })

     /*
    test("get select text", async() => {
    
        await page.selectOption("#country", "Peru");
        const text = await page.$eval<string, HTMLSelectElement>("#country", ele => ele.value);
        console.log(text);
        
        
    })

   */

  

    // afterAll(async () =>{
    //     await page.close();
    //     await context.close();
    //     await browser.close();
    // })
})