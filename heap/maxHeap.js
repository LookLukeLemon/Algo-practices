const heapify = (arr, i) =>{
    let largest = i
    const left = 2*i + 1;
    const right = 2*i + 2;
    
    if(arr[left] > arr[largest])
    {
        largest = left;
    }

    if(arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== i){
        const swap = arr[i]
        arr[i] = arr[largest]
        arr[largest] = swap;

        heapify(arr, largest)
    }
}

const buildHeap = (arr) => {
    for(let i = Math.floor(arr.length / 2) - 1; i >= 0; i--){
        heapify(arr, i)
    }
}

const source = [ 1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17]

buildHeap(source)
console.log(source)