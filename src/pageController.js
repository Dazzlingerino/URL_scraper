const findInHTML = require("./findInHTML");
const fs = require('fs');
const openInputFile = require("./helpers");


async function scrapeAll(browserInstance) {
    // Note that no checks are done on the validity of inputFile or its data.
    const [input, urls, output] = openInputFile()

    //wrong selector will cause Error
    const selector = 'link'

    //make sure this attr exist in selector
    const searchAttributeList = ['[rel=canonical]']

    let browser;
    try {
        browser = await browserInstance;

        let scrapedData = {};

        scrapedData[`found data for ${input}`] = await findInHTML(browser, urls, searchAttributeList, selector)

        //TODO convert json to xlsx
        const json = JSON.stringify(scrapedData)

        fs.writeFile(output, json, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log(`The data has been scraped and saved successfully! View it at '${output}'`);
        });

        await browser.close();
    } catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)