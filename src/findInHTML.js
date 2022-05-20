async function findInHTML(browser, urls = 'https://www.onepeloton.com', searchAttributeList, selector = '*') {
    let scrapedData = [];

    const pagePromise = (link) => new Promise(async (resolve) => {
                let dataObj = {};
                let page = await browser.newPage();

                try {
                    await page.goto(link, {
                        waitUntil: 'load',
                        timeout: 0
                    });

                    let redirectedURL = page.target().url()

                    if (searchAttributeList.length !== 0) {
                        await Promise.all(searchAttributeList.map(async searchInfo => {
                            if (redirectedURL !== link) {
                                dataObj[`'${link}' <-redirected to->`] = redirectedURL
                                link = redirectedURL
                            }
                            dataObj[`canonical for '${link}'`] = await page.$$eval(searchInfo, elements => {
                                console.log(elements)
                                return elements.length &&
                                    elements?.filter(el => el.href)
                                        .map(el => el.href)
                            })
                        }))
                    } else {
                        dataObj[`${selector} tag for '${link}'`] = await page.$$eval(selector, elements => {
                            return elements.length ?
                                elements?.map(el => el.outerHTML)
                                : (() => {
                                    throw new Error('please double check input for findInHTML function')
                                })()
                        }, selector)
                    }
                } catch
                    (e) {
                    console.error(e)
                    await browser.close();
                }
                resolve(dataObj);
                await page.close();
            }
        )

    for (let link in urls) {
        let currentPageData = await pagePromise(urls[link]);
        scrapedData.push(currentPageData);
    }
    return scrapedData;
}

module.exports = findInHTML