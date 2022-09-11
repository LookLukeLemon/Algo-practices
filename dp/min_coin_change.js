
// 주어진 동전 [2,3,5]에 대해 경우가 없는 것은 -1
const findMinimumWay = (n, ways =[0,-1,1])=>{
    if(n < ways.length) return ways[n]

    for(let i = 3; i < n + 1; i++){
        const curMinWay = Math.min(ways[0],ways[1],ways[2]) + 1
        ways[0] = ways[1]
        ways[1] = ways[2]
        ways[2] = curMinWay
    }

    return ways[ways.length - 1]
}

solution = () => {
    const coins = [2,3,5]
    const sum_goal = 11;

    console.log(findMinimumWay(sum_goal))
}

solution ()