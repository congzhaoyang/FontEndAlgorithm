function factorialize(num) {
  var result = 1
  if(num < 0) return -1
  if(num == 0 || num == 1) return 1
  if(num > 1) return num * factorialize(num-1)
}

console.log(factorialize(5))