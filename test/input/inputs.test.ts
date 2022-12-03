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
        page.goto("https://letcode.in/edit");
        

    })
    test("Input fullname", async() => {
        await page.locator("input[id=fullName]").click(); //ko có dòng này sẽ bị lỗi điều hướng ở hàm dưới
        const name = await page.$("#fullName")
        await name?.type("Pham Xuan Dinh")
    })

    test("Append a text and press keyboard tab", async() => {
        // await page.type("id=fullName", "Pham Xuan Dinh");

        const join = await page.$("#join");
        //await join?.type("Human");//Giữ nguyên valua đã nhập và nhập thêm gis1 trị mới từ đầu
        //await join?.fill("Human");//Xóa giá trị đã có trong textbox và nhập giá trị mới
        await join?.focus();  //3 dòng code này giúp điềm thêm giá trị phía sau text đã có trước đó
        await page.keyboard.press("End");
        await join?.type(" Human");
     
    })

    test("What is inside the text box ", async() => {
        let text = await page.getAttribute("input[id=getMe]", "value");
        console.log(`text là ${text}`);
  
    })

    afterAll(async () =>{
        await page.close();
        await context.close();
        await browser.close();
    })
})