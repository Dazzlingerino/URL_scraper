# Web scraper

This script provide you an opportunity to find some specific tags or elements inside HTML.
## Setup
```bash
  npm install
```
⚡️⚡️⚡️ Important! ⚡️⚡️⚡️

Place `.xlsx` files in `inputs` folder
and change value to corresponding of `input` variable in `src/helpers.js`
## Running

To run this project:

```bash
  npm start
```
## Configure

Change params for search in
```bash
  src/pageController.js
```

Change logic for searching in
```bash
  src/findInHTML.js
```
## General tips
* If you leave `searchAttributeList` empty, it only will searching for selector `const searchAttributeList = []`

* `selector` value by default is `'*'`
* `scrapedData` actually object that is converting to final json

## Life hacks
* Start from running for 1-2 urls: in `src/helpers.js` in line
<br/>
`(let i = 1; i < arraysWithInfo.length; i++)`replace `arraysWithInfo.length` with `1` or `2`

* To prevent page from closing: in `src/findInHTML.js` remove `await page.close()`
* To prevent browser from closing: in `src/pageController.js` remove ` await browser.close()`