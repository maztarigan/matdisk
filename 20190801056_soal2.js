var key, n
key = require('readline-sync')
n   = parseInt(key.question("Masukkan Nilai = "))


var str = "";

for(var i = 1; i < n; i++ ){
    for(var j = 1; j < n; j++){
        if(i + j >= n && i <= j){
            str = str.concat("*");
        }else{
            str = str.concat(" ")
        }
    }
    str = str.concat("\n")
}
console.log(str)