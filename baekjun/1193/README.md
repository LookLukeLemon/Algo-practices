
# 문제
무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

|||||||
|-|-|-|-|-|-|-|-|
|1/1|1/2|1/3|1/4|1/5|…|
|2/1|2/2|2/3|2/4|…|…|
|3/1|3/2|3/3|…|…|…|
|4/1|4/2|…|…|…|…|
|5/1|…|…|…|…|…|
|…|…|…|…|…|…|
이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.

X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

# 입력
첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.

# 출력
첫째 줄에 분수를 출력한다.
- - -
```js:index.js
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
```