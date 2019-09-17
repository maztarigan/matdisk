var segitiga = require('readline-sync');

var alas = parseInt(segitiga.question('masukkan nilai alas :'));
var tinggi = parseInt(segitiga.question('masukkan niai tinggi :'));

var luas = 0.5*alas*tinggi;

console.log(luas);