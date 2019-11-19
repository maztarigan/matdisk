var key = require("readline-sync");
hasil = ""
var x = parseInt(key.question('Input Kolom : '));
var y = parseInt(key.question('Input baris : '));
for(var a=0; a<x; a++){
    for(var b = 0; b<y; b++){
            hasil += "* "
    }
    hasil += "\n"
}
console.log(hasil)