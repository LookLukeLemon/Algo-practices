
const solution = (info) => {
    const countMap = new Map()
    let maxOccurences = 0
    let answer = []

    info.map(data => {
        const length = data[1] - data[0] + 1
        const range = [...Array(length).keys()].map(i => i + data[0]);
        
        range.map(num => {
            if (countMap.has(num)) {
                const newOccurences = countMap.get(num) + 1
                countMap.set(num, newOccurences)
                maxOccurences  = Math.max(maxOccurences, newOccurences)
            }else{
                countMap.set(num, 1)
                maxOccurences  = Math.max(maxOccurences, 1)
            }
        })
    })

    countMap.forEach((value, key) => {
        if(value === maxOccurences){
            answer.push(key)
        }
    })

    return answer;
}


const problemA = [[1,5],[3,5],[7,8]]
const result =solution(problemA)
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



