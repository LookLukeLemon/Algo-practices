const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function solution(input) {
    const s = input[0]
    let tokenGenerator = ''
    const tokens = []

    const chars = s.split('').map((c, idx, arr) => {
        tokenGenerator += c

        if (idx !== 0) {
            if (arr[idx + 1] === undefined) {
                tokens.push(tokenGenerator)
                tokenGenerator = ''
            } else {
                if (!isNaN(arr[idx + 1])) {
                    tokens.push(tokenGenerator)
                    tokenGenerator = ''
                }
            }
        }
    })

    console.log(tokens)
}

solution(fs.readFileSync(filePath).toString().split(EOL));