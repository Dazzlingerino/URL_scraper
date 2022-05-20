const xlsx = require('node-xlsx');
const path = require("path");

//you should write name of input file here manually
let input = 'CanonicalUK.xlsx'

let inputFile = path.resolve('./inputs/', input);
let output = `outputs/OUTPUTfor${input.split('.')[0]}.json`

function openInputFile() {
    let urls = [];
    let inputFileText = xlsx.parse(inputFile);

    for (let el of inputFileText) {
        let arraysWithInfo = [...el.data].filter(arr => arr.length)
        for (let i = 1; i < arraysWithInfo.length; i++) {
            //choose only URL from array(actually it takes 1 column from xlsx file so urls should be there)
            urls.push(arraysWithInfo[i][0])
        }
    }
    console.log('list of processing urls:')
    console.table(urls)
    return [input, urls, output]
}

module.exports = openInputFile