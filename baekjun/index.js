const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
    let answer = ''
    const length = Number(input[0])
    input.slice(1, length + 1).map(a => {
        let continousCount = 0
        const oxList = a.split('')
        let score = 0
        oxList.map(a => {
            if (a.length > 0 && a.length < 80) {
                if (a === 'O') {
                    continousCount += 1
                    score += continousCount
                } else {
                    continousCount = 0
                }
            }
        })
        answer += `${score}\n`
    })

    console.log(answer)
}