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