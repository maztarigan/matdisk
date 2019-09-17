console.log("luassegitiga");

var bacakey = require('readline-sync');

var a = parseInt(bacakey.question ("masukan nilai alas :"));
var t = parseInt(bacakey.question ("masukan nilai tinggi :"));

var luas = 0.5 * a * t ;

console.log (" luas segitiga : " + luas );