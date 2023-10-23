const puppeteer = require('puppeteer');

(async ()=>{
    try {
        const browser = await puppeteer.launch({
            headless:false
        })
        const page = await browser.newPage()

        await page.goto('https://google.com')


        console.log('00')

        const image = await page.$$eval("img",(ele)=>{

            return ele.map((element)=>({ 
                src: element.src,
                alt: element.alt
            }))
        })

        const links = await page.$$eval('a',(ele)=>{

            return ele.map((element)=>({
                href : element.href
            }))
        })
        
        let output = JSON.stringify({image,links})
        console.log(output,links)

       await browser.close()
        
    } catch (error) {
        console.log(error)
    }
})()