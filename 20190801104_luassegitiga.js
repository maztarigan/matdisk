var masukkankeyboard = require('readline-sync');

var a = parseInt(masukkankeyboard.question("masukkan alas : "));
var t = parseInt(masukkankeyboard.question("masukkan tinggi : "));


var luas = 1/2 * a * t

console.log("luas segitiga dengan alas "+a+" dan tinggi "+t+ " = " +luas);
