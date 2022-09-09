function solution(arr1, arr2) {
    let result = Array.from(Array(arr1.length), () => Array(arr1[0].length))
    
    for(let i =0; i< arr1.length; i++){
        const row1 = arr1[i]
        const row2 = arr2[i]
        
        for(let j  =0; j < row1.length; j++){
            result[i][j] = row1[j] + row2[j]
        }
    }

    
    
    return result;
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]))