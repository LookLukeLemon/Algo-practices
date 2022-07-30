const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
    input.slice(1).map(i => {
        const source = i.split(' ')
        const h = Number(source[0])
        const w = Number(source[1])
        const n = Number(source[2])

        if (1 <= h && w <= 99 && 1 <= n && n <= h * w) {
            const line = Math.ceil(n / h)
            const floor = n % h === 0 ? h : n % h

            console.log(`${floor}${line.toString().padStart(2, 0)}`)
        }
    })
}