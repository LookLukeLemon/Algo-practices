# 문제
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

# 입력
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

# 출력
주어진 수들 중 소수의 개수를 출력한다.
- - -
```js:index.js
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
```