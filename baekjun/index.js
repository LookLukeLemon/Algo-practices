const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
    const M = Number(input[0])
    const N = Number(input[1])
    const digits = [...new Array(N - M + 1)].map((v, idx, arr) => M + idx)
    let primeList = []

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
        primeList.push(digit)
        counter++;
    })

    const sum = primeList.length > 0 ? primeList.reduce((prev, cur) => prev + cur) : 0
    console.log(primeList.length > 0 ? `${sum}\n${primeList[0]}` : "-1")
}

