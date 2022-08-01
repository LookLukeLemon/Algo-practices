const fs = require("fs");
const { EOL } = require("os");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

solution(fs.readFileSync(filePath).toString().split(EOL));

function solution(input) {
                return input;
}
