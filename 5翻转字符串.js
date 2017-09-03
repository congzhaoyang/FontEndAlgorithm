function reverseString(str) {
  var temp = ''
  for(var i=str.length-1; i>=0; i--) {
    temp += str[i]
  }
  console.log(temp)
}

var testArr = 'abcd' 
reverseString(testArr)

//字符串，数组，元素都是 0 到 length-1
//翻转字符串的关键在于反向遍历