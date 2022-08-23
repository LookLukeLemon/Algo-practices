const sort = (arr) => {
    const countingMap = []

    for(let i = 0; i < arr.length; i++) {
        if(countingMap[arr[i] -1]){
            countingMap[arr[i] -1] += 1
        }else{
            countingMap[arr[i] -1] = 1
        }
    }

    let result = ''
    for(let i = 0; i < countingMap.length; i++) {
        if(!countingMap[i]) continue;

        Array(countingMap[i]).fill(null).map(count => {
            result += `${i +1} `
        })
    }

    console.log(result)
}


const source = [1,1,5,4,1,3,2,5,4,1,4,2,3,2,5,1,2,3,1,1,1,1,1,1,1,5,7, 44 ,55]

sort(source);
