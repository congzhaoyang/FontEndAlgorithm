function palindrome(str){
  // \W匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。
  var re = /[\W_]/g;
  // 将字符串变成小写字符,并干掉除字母数字外的字符
  var lowRegStr = str.toLowerCase().replace(re,'');
  // 如果字符串lowRegStr的length长度为0时，字符串即是palindrome
  if(lowRegStr.length === 0) return true;
  // 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
  if(lowRegStr[0] != lowRegStr[lowRegStr.length-1]) return false;
  //递归,不停地切两边
  return palindrome(lowRegStr.slice(1,lowRegStr.length-1));
}

var test = 'abcbaa'
console.log(palindrome(test))