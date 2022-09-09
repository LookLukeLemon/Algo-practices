// N까지의 모든 소수 구해서 배열 리턴
const solution = N => {
    if(N < 2) return []
    const arr = Array.from({length: N +1}).fill(true)

    //0과 1은 소수가 아님
    arr[0] = arr[1] = false

    //약수 구할때 처럼 제곱근까지만 구해보면 그 이상은 모두 소수가 아님
    const sqrted = Math.floor(Math.sqrt(N))

    for(let i = 2; i < sqrted + 1; i++) { 
        if(arr[i]){
            for(let j = 2; i * j < N; j++){
                arr[i * j] = false
            }
        }
    }

    return arr.map((v,idx) => v === true && idx).filter(v => v)
}

console.log(solution(100))