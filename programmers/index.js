const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function solution(input) {
    const s= input[0]

    const chars = s.split('').sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0))
    console.log(chars)
}

solution(fs.readFileSync(filePath).toString().split(EOL));