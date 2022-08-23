// 이미 heapify 된 배열을 전달해야 한다.
const sort = (arr) => {
    for(let i = arr.length - 1; i > 0; i--){
        const swap = arr[0]
        arr[0] = arr[i];
        arr[i] = swap;

        heapify(arr, i, 0)
    }

}


// N은 초기 buildHeap에서는 필요없을수 있지만, Sort시에는 heapify 범위를 하나씩 줄여나가야 하므로 필요하다.
const heapify = (arr, N, i) =>{
    let largest = i
    const left = 2*i + 1;
    const right = 2*i + 2;
    
    if(left < N && arr[left] > arr[largest])
    {
        largest = left;
    }

    if(right < N && arr[right] > arr[largest]){
        largest = right
    }

    if(largest !== i){
        const swap = arr[i]
        arr[i] = arr[largest]
        arr[largest] = swap;

        heapify(arr,N, largest)
    }
}

const buildHeap = (arr) => {
    for(let i = Math.floor(arr.length / 2) - 1; i >= 0; i--){
        heapify(arr, arr.length, i)
    }
}

const source = [12, 11, 13, 5, 6, 7];

buildHeap(source)
console.log(source)

sort(source);
console.log(source)