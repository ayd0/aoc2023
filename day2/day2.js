const fs = require('fs');

const data = fs.readFileSync(process.argv[2], 'utf-8').split('\n');
data.pop();

const limits = {
    "red": 12,
    "green": 13,
    "blue": 14
}

let total = 0;

data.forEach((game, idx) => {
    let pass = true;
    game.slice(game.indexOf(':') + 2).split(';').some(round => {
        round.split(',').some(handful => {
            handful = handful.trim().split(' ');
            if (limits[handful[1]] < handful[0]) {
                pass = false;
            }
        })
    });
    if (pass) total += idx + 1;
})

console.log(total);
