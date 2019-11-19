var key = require("readline-sync")
var hasil =" " 
var n = parseInt(key.question('input lebar : '))
var m = parseInt(key.question('input panjang : '))
    for(var i= 0; i<n; i++){
      for(var j = 0; j<m ; j++){
          hasil += "*"
    }
    hasil +="\n"
   }
    console.log(hasil)
    
