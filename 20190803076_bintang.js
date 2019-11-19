var key = require("readline-sync");
hasil = ""
var x = parseInt(key.question('Input Kolom : '));
var y = parseInt(key.question('Input baris : '));
for(var i=0; i<x; i++
){
    for(var j = 0; j<y; j++){
            hasil += "* "
    }
    hasil += "\n"
}
console.log(hasil)