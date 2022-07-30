# 문제
자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.

예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.

# 입력
입력의 첫째 줄에 M이, 둘째 줄에 N이 주어진다.

M과 N은 10,000이하의 자연수이며, M은 N보다 작거나 같다.

# 출력
M이상 N이하의 자연수 중 소수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다. 

단, M이상 N이하의 자연수 중 소수가 없을 경우는 첫째 줄에 -1을 출력한다.
- - -
```js:index.js
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
```