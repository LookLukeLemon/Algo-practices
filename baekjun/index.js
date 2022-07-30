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