function randomString(n) {
  var templateStr = 'abcdefghigklmnopqrstuvwxyz0123456789'
  var result = ''
  for(var i=0; i<n; i++) {
    var position = Math.floor(Math.random() * templateStr.length) 
    console.log(position)
    result += templateStr[position]
  }
  console.log(result)
}

randomString(24)