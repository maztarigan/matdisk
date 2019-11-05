console.log("Konversi Nilai Desimal > Nilai Oktalr");
var MasukkanNilaiDesimal = require('readline-sync');
var NilaiDesimal = parseInt(MasukkanNilaiDesimal.question(" Nilai Desimal: "))
var Oktal = (NilaiDesimal.toString(8));
console.log("----------------------")
console.log(" Nilai Desimal > Nilai Oktal " +NilaiDesimal+ " = " +Oktal);
console.log("----------------------")