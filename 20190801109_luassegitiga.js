console.log('Luas Segitiga');

var bacakey = require('readline-sync');

var a = parseInt(bacakey.question ("Masukan Nilai Alas :")) ;
var t = parseInt(bacakey.question ("Masukan Nilai Tinggi :")) ;

var luas = 0.5 * a * t ;

console.log ("Luas Segitiga : " + luas );
