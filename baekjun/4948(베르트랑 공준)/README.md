# 문제
베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.

이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.

예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)

자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오. 

# 입력
입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 케이스는 n을 포함하는 한 줄로 이루어져 있다.

입력의 마지막에는 0이 주어진다.

# 출력
각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.
# 제한
1 ≤ n ≤ 123,456
- - -
```js:index.js
const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {

    input.slice(0, input.length - 1).map(d => {
        const M = Number(d)
        const N = 2 * M
        const arr = []
        let counter = 0;

        if (1 <= M && M <= 123456) {
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

            result.map(r => {
                if (r > M) {
                    counter++;
                }
            })
            console.log(counter)
        }
    })
}
```