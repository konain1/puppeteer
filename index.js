// import puppeteer from "puppeteer";


const puppeteer = require('puppeteer');

(async ()=> {

    try {
        const browser = await puppeteer.launch({
            headless:false,
            devtools:true
        })
        const page = await browser.newPage()
        
        await page.goto('https://google.com')
        const title = await page.title()
        console.log(title)
        const heading = await page.$eval('a',(ele)=>ele.textContent)
        console.log(heading)
        await page.pdf({path:'example.pdf' , format:'A4'});
        setTimeout( async () => {
            await page.screenshot({path:'google.png'})

            await browser.close();  
        }, 3000);
       
    } catch (error) {
        console.log(error)
    }
  })()