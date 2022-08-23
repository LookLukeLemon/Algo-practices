const sort = (arr) =>{
    let source = [...arr]
    let radixMap = []
    const MAX = Math.max(...source)
    const maxLength = String(MAX).split('').length

    for (let i = 0; i < 10; i++) {
        radixMap[i] = []
    }

    for(let i = 0; i < maxLength; i++) {
        for(let j = 0; j < source.length; j++) {
            const radix = Math.floor(source[j] / Math.pow(10, i)) % Math.pow(10,1) 
            radixMap[radix].push(source[j])
        }

        source = []
        radixMap.map(linkedQueue => {
            if(linkedQueue.length > 0)
                source.push(...linkedQueue)
        })

        for (let i = 0; i < 10; i++) {
            radixMap[i] = []
        }
    }

    return source
}

const source = [111,234, 5,194,523,418,331,2341]
const result =sort(source)

console.log(result)