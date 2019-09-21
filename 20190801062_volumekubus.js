console.log("Program Menghitung Luas Segitiga")

var inputKeyboard = require("readline-sync");

var s = parseInt(inputKeyboard.question("Masukkan sisi :" )) ;


var volume = s * s * s 

console.log("volume kubus = " +  volume );