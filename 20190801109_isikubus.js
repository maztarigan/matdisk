console.log('Luas Kubus');

var bacakey = require('readline-sync');

var s = parseInt(bacakey.question ("Masukan Nilai Sisi:")) ;

var luas = s * s * s ;

console.log ("Luas Kubus : " + luas );
