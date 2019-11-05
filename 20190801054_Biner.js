console.log("Konversi Nilai Desimal > Nilai Biner");
var MasukkanNilaiDesimal = require('readline-sync');
var NilaiDesimal = parseInt(MasukkanNilaiDesimal.question(" Nilai Desimal: "))
var Biner = (NilaiDesimal.toString(2));
console.log("----------------------")
console.log(" Nilai Desimal > Biner " +NilaiDesimal+ " = " +Biner);
console.log("----------------------")