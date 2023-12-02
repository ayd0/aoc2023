const fs = require("fs");

const data = fs.readFileSync(process.argv[2], 'utf-8').split(['\n']);
data.pop();

let total = 0;

const nominals = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
}

data.forEach(str => {
    let firstVal, lastVal;
    Object.keys(nominals).forEach(nom => {
        if (str.includes(nom)) {
            let idx = str.indexOf(nom);
            if (firstVal === undefined) {
                firstVal = [nominals[nom], idx];
            } else if (firstVal[1] > idx) {
                firstVal = [nominals[nom], idx];
            }
            idx = str.lastIndexOf(nom);
            if (lastVal === undefined) {
                lastVal = [nominals[nom], idx];
            } else if (lastVal[1] < idx) {
                lastVal = [nominals[nom], idx];
            }
        }
    })

    const nums = str.match(/\d+/g).join('');

    if (nums.length === 1 && firstVal === undefined && lastVal === undefined) {
        total += +nums[0] * 10 + +nums[0];
    } else {
        if (firstVal !== undefined) {
            if (str.indexOf(+nums[0]) < firstVal[1]) {
                total += +nums[0] * 10;
            } else {
                total += firstVal[0] * 10;
            }
        } else {
            total += +nums[0] * 10;
        }
        if (lastVal !== undefined) {
            if (str.lastIndexOf(+nums[nums.length - 1]) > lastVal[1]) {
                total += +nums[nums.length - 1];
            } else {
                total += lastVal[0];
            }
        } else {
            total += +nums[nums.length - 1];
        }
    }
})

console.log(total);
