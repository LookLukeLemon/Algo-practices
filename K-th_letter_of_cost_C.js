// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, C) {
    let totalCost = 0;
    let maxCost = C[0];
    let curTotalCost = C[0];
    let prevChar = S[0];

    const length = S.length;

    for (let i = 1; i < length; i++) {
        const curChar = S[i];
        const curCost = C[i];

        if (curChar == prevChar) {
            maxCost = Math.max(maxCost, curCost);
            curTotalCost += curCost;
        } else {
            totalCost += (curTotalCost - maxCost)
            prevChar = curChar;
            maxCost = curCost;
            curTotalCost = curCost;
        }
    }
    totalCost += (curTotalCost - maxCost);
    return totalCost;
}
