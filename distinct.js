// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const N = A.length;
    if(N === 0 )return 0

    quickSort(A, 0, A.length - 1)
    let distinct = 1;
    for (let i=1; i<N; i++){
        if(0 !== (A[i -1] ^ A[i])) distinct++;
    }

    return distinct
}


function quickSort(arr, start, end) {
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
