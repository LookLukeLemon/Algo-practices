const isPalindrome = (source) => {
    for(let i = 0; i< Math.floor(source.length /2); i++){
        let left = source[i]
        let right = source[source.length -1 - i]
        if( left !== right) return false;
    }

    return true;
}

const solution = (queries) => {
    const answer = []
    queries.map(q => {
        const sum = q.reduce((prev, cur, idx, arr) => {
            return prev + cur
        }, 0)
         const winner = sum % 2 === 0 ? 0 : 1

         answer.push(winner)
    })

    return answer;
}


// const queries = [[2,0],[3,1]]
// const queries = [[1,4,3],[1,2,2]]
const queries = [[2,0,1,0],[0,1,0,1]]
const result =solution(queries)

console.log(result)


// const solution = (v) =>{
//     const xCounter = new Map()
//     const yCounter = new Map()

//     v.map(a => {
//         xCounter.get(a[0]) ?
//         xCounter.set(a[0], xCounter.get(a[0]) + 1) :
//         xCounter.set(a[0], 1)

//         yCounter.get(a[1]) ?
//         yCounter.set(a[1], yCounter.get((a[1])) + 1) :
//         yCounter.set(a[1], 1)
    
//     })

//     const xKeys = [...xCounter.keys()]
//     const answerX = xCounter.get(xKeys[0]) < xCounter.get(xKeys[1]) ? xKeys[0]: xKeys[1]

//     const yKeys = [...yCounter.keys()]
//     const answerY = yCounter.get(yKeys[0]) < yCounter.get(yKeys[1]) ? yKeys[0] : yKeys[1]

//     return [answerX, answerY]

// }

// const res = solution([[1,4], [3,4], [3,10]])



