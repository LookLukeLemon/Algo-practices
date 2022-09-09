const findDividable = (num) =>{
    if(num == 1) return [1]
    const dividable = new Set([1])
    const sqrted = Math.sqrt(num)

    if(sqrted % 2 == 0){
        for(let i = 2; i < sqrted + 1; i++){
            if(num % i == 0){
                dividable.add(i)
            }
        }
        
        const dividableArr = [...dividable]
        const dividableSize = dividable.size
        for(let i = 0; i < dividableSize; i++){
            const div =  num / dividableArr[i]
            dividable.add(div)
        }
    }else{
        for(let i = 2; i < num + 1; i++){
            if(num % i == 0){
                dividable.add(i)
            }
        }
    }
    
    return [...dividable]
}