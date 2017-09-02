function bubbleSort(arr) {
  var i = 0
      j = 0
  for(i=1; i<arr.length; i++) {
    for(j=0; j<arr.length-1; j++) {
      var temp = 0
      if(arr[j] > arr[j+1]) {
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  console.log(arr)
}

var testArr = [1, 3, 2, 4, 4, 5, 6, 3]
bubbleSort(testArr)