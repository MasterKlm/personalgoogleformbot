import puppeteer from "puppeteer"

(async ()=>{
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    page.setViewport({width:1600, height:1000, isMobile:false, isLandscape:true})
   await page.goto('https://rabuuk.com/app/search')
    const url = page.url()
    console.log(url)
    // const content = await page.content()
    // const description = await page.title()
    // console.log("content: ", content)
  await page.type(".SearchBar input", "Atomic Habits")
  await page.click(".SearchBar button")
  await page.type(".SearchBar input", "MJ DeMarco")

    await page.screenshot({
        path:"./screens/samplegoogle.png",
        encoding:"binary",
        type:"png"
    })

    
    await browser.close()
})()