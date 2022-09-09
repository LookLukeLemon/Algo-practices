// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    const N = A.length
    const C = []
    const buffer = []
    let totalMAX = 0;

    for(let i =0; i< N; i++){
        const curA = A[i]
        const curB = B[i]

        if(curA === curB){
            C.push(curA)
            totalMAX = Math.max(totalMAX, curA)
        }else if(curA > curB){
            buffer.push(curB)
            C.push(curA)
            totalMAX = Math.max(totalMAX, curA)
        }else{
            buffer.push(curA)
            C.push(curB)
            totalMAX = Math.max(totalMAX, curB)
        }
    }

    if(buffer.length > 0)
    {
        quickSort(buffer, 0, buffer.length - 1)
        return buffer[0]
    }
    else{
        return totalMAX + 1
    }
}


const quickSort = (arr, start, end) => {
  if (start >= end) {
    return
  }
  let pivot = start
  let left = start + 1
  let right = end

  while (left <= right) {
    while (arr[left] <= arr[pivot]) {
      left++
    }

    while (arr[right] >= arr[pivot] && right > start) {
      right--
    }

    if (left > right) {
      const temp = arr[right]
      arr[right] = arr[pivot]
      arr[pivot] = temp
    } else {
      const temp = arr[right]
      arr[right] = arr[left]
      arr[left] = temp
    }
  }

  quickSort(arr, start, right - 1)
  quickSort(arr, right + 1, end)
}

