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