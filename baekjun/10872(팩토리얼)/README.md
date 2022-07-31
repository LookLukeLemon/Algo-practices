# 문제
0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

# 입력
첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다.

# 출력
첫째 줄에 N!을 출력한다.
- - -
```js:index.js
const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
     const n =Number(input[0])

     if(n === 0){
        console.log(1)
        return;
     }

     console.log(facto(n))
}

function facto(num){
    if(num  === 1) return 1;
    return num * facto(num -1)
}
```