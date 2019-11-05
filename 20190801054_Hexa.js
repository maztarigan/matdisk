console.log("Konversi Nilai Desimal > Nilai Hexadesimal");
var MasukkanNilaiDesimal = require('readline-sync');
var NilaiDesimal = parseInt(MasukkanNilaiDesimal.question(" Nilai Desimal: "))
var Hexadesimal = (NilaiDesimal.toString(16));
console.log("----------------------")
console.log(" Nilai Desimal > Nilai Oktal " +NilaiDesimal+ " = " +Hexadesimal);
console.log("----------------------")