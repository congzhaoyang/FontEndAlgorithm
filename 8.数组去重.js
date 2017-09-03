Array.prototype.unique = function () {
  var n = []
  for(var i=0; i<this.length; i++) {
    if(n.indexOf(this[i]) == -1) {
      n.push(this[i])
    }
  }
  console.log(n)
}

var arr = [1, 3, 4, 3]
arr.unique()