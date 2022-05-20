# Web scraper

This script provide you an opportunity to find some specific tags or elements inside HTML.

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