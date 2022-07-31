const fs = require("fs");
const { EOL } = require('os');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
    const n = Number(input[0])

    if(n === 0 ){
        console.log(0)
        return
    }
    else if(n === 1){
        console.log(1);
        return;
    }
    else{
        let first = 0;
        let second = 1;

        for(let i = 2; i< n +1;i++){
            const curSum = first + second;
            first = second;
            second = curSum
        }

        console.log(second)
    }
}