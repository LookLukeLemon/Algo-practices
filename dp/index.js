// 가장 쉬운 재귀로 풀이, 2의n승 복잡도
const fibonacci_recur = (n) => {
     if(n === 0) return 0;
     if(n === 1) return 1;

     return fibonacci_recur(n-1) + fibonacci_recur(n-2)
};

//DP 재귀로 풀이, O(n)
const fibonacci_dp_recur = (n, memo = [0,1]) => {
    if ( n < memo.length) return memo[n]
    
    return memo[n] = fibonacci_dp_recur(n-1, memo) + fibonacci_dp_recur(n-2, memo)
};

//DP Bottom-up 방식, O(n), O(n)
const fibonacci_dp_bottom_up = (n, memo = [0,1]) => {
    if ( n < memo.length) return memo[n]

    for(let i = 2; i < n+1; i++){
        memo[i] = memo[i-1] + memo[i-2]
    }

    return memo[memo.length -1]
}

//DP Bottom-up 시간복잡도까지 최적화, O(n), O(1)
const fibonacci_dp_bottom_up_opt = (n, memo = [0,1]) => {
    if ( n < memo.length) return memo[n]

    for(let i = 2; i < n+1; i++){
        memo[2] = memo[1] + memo[0]
        memo[0] = memo[1]
        memo[1] = memo[2]
    }

    return memo[memo.length -1]
}

console.time("fibo")
console.log(fibonacci_dp_bottom_up_opt(10))
console.timeEnd("fibo")