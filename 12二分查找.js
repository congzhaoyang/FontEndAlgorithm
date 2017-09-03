function binary_search(arr, low, high, key) {
  if(low > high) return -1
  var mid = parseInt((low + high) / 2)
  if(key == arr[mid]) {
    return mid
  } else if (key > arr[mid]) {
    return binary_search(arr, mid+1, high, key)
  } else if (key < arr[mid]) {
    return binary_search(arr, low, mid-1, key)
  }
}

console.log(binary_search([2, 3, 4, 5, 6, 7], 0, 5, 7))