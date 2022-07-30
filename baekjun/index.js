const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
    let num = Number(input[0])
    let start = 2;
    let final = ''

    while (num !== 1) {
        if (num % start === 0) {
            final += `${start}\n`
            num = num / start
        } else {
            start++;
        }
    }

    console.log(final)
}
