// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    let total = A + B;
    let maxLenghthComibed = Math.floor(total / 4);
    
    while(maxLenghthComibed > 0) {
        const maxLenghthA = Math.floor(A / maxLenghthComibed);
        const maxLenghthB = Math.floor(B / maxLenghthComibed);

        if(4 <= maxLenghthA + maxLenghthB) {
            return maxLenghthComibed;
        }

        maxLenghthComibed -= 1
    }

    return 0;
}
