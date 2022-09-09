const solution = N => {
    if(N < 2) return false

    const sqrted = Math.floor(Math.sqrt(N))

    for(let i = 2; i < sqrted + 1 ;i++){
        if(N % i === 0){
            return false
        }
    }

    return true;
   
}

console.log(solution(2))