
function solution(N) {
    const binary = Number(N).toString(2)
    const idxList = []
    
    for(let i =0; i < binary.length; i++){
        if(binary[i] === '1')
            idxList.push(i)
    }

    let answer = 0
    for(let i =0; i < idxList.length; i++){
        if(idxList.length - 1 === i)
            continue;

        answer = Math.max(idxList[i + 1] - idxList[i] -1, answer)
    }

    return answer
}