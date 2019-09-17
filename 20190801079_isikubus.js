console.log('Menghitung luas lingkaran');
var masukkankeyboard = require('readline-sync');
var r = parseInt(masukkankeyboard.question('masukkan rusuk: ')) ;
var isi = r*r;
console.log("isi kubus dengan rusuk " +r+" adalah "+isi+" cm3")