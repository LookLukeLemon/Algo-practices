# 문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

# 입력
첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)

# 출력
첫째 줄에 A+B를 출력한다.
- - -
```js:index.js
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
```