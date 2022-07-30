# 문제
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

# 입력
첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

# 출력
한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
- - -
```js:index.js
const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
    const source = input[0].split(' ')
    const M = Number(source[0])
    const N = Number(source[1])
    const arr = []

    for (let i = 2; i <= N; i++) {
        arr[i] = i
    }

    for (let i = 2; i <= N; i++) {
        if (arr[i] === 0) continue
        for (let j = i + i; j <= N; j += i) {
            arr[j] = 0
        }
    }

    const result = []
    for (let i = 2; i <= N; i++) {
        if (arr[i] !== 0) {
            result.push(i)
        }
    }

    let final = ''
    result.map(r => {
        if (r >= M) {
            final += `${r}\n`
        }
    })
    console.log(final)
}
```