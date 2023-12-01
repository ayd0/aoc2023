const fs = require("fs");

const data = fs.readFileSync(process.argv[2], 'utf-8').split(['\n']);
data.pop();

let total = 0;
data.forEach(str => {
    const nums = str.match(/\d+/g);
    if (nums.length > 1) {
        total += +nums[0][0] * 10;
        total += +nums[nums.length - 1][nums[nums.length - 1].length - 1];
    } else if (nums[0].length > 1) {
        total += +nums[0][0] * 10;
        total += +nums[0][nums[0].length - 1];
    } else {
        total += +nums[0] * 10;
        total += +nums[0];
    }
})

console.log(total);

