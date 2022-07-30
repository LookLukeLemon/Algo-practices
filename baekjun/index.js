const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
    const x = Number(input[0])

    let howMany = 1;
    let nLine = 1;

    while (howMany < x) {
        nLine += 1
        howMany += nLine
    }

    if (nLine % 2 === 0) {
        const offset = howMany - x
        const maxRow = nLine - offset;
        const maxCol = 1 + offset

        console.log(`${maxRow}/${maxCol}`)
    } else {
        const offset = howMany - x
        const maxRow = 1 + offset;
        const maxCol = nLine - offset

        console.log(`${maxRow}/${maxCol}`)
    }
}