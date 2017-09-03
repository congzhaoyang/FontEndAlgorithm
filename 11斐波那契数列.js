function getFib(n) {
  if(n == 0) return 0;
  if(n == 1) return 1;
  if(n > 1) return getFib(n-1) + getFib(n-2)
}
function fibo(len) {
  var fibo = []
  for(var i = 0; i < len; i++) {
    fibo.push(getFib(i))
  }
  return fibo
}

console.log(fibo(8))