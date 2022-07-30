const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
    const digits = input.slice(1)[0].split(' ')
    let counter = 0;

    digits.map(d => {
        const digit = Number(d)
        if (digit === 1) {
            return
        }

        const until = Math.ceil(digit / 2)

        for (let i = 2; i < until + 1; i++) {
            if (digit % i === 0) {
                return;
            }
        }
        counter++;
    })
    console.log(counter)
}

