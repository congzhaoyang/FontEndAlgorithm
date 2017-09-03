function getMaxProfit(arr){
  var min = arr[0],
      max = arr[0]
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < min) min = arr[i]
    if(arr[i] > max) max = arr[i]
  }
  return max - min
}

var test = [1, 2, 3, 4, 6]
var result = getMaxProfit(test)
console.log(result)