const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
    const ab = input[0].split(' ')
    const resultArray = []
    let buffer = 0

    const a = ab[0]
    const b = ab[1]
    const aLength = a.length
    const bLength = b.length
    const maxLength = Math.max(aLength, bLength)

    const baseA = a.padStart(maxLength, '0')
    const baseB = b.padStart(maxLength, '0')

    for (let i = maxLength - 1; i >= 0; i--) {
        const plusResult = Number(baseA[i]) + Number(baseB[i]) + buffer

        if (plusResult > 9) {
            const digits = plusResult.toString().split('')
            buffer = Number(digits[0])
            resultArray.unshift(digits[1])
        } else {
            buffer = 0;
            resultArray.unshift(String(plusResult))
        }
    }

    if (buffer > 0) {
        resultArray.unshift(String(buffer))
    }
    console.log(resultArray.join(''))
}

