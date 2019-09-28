console.log("Mencari Tingkat Pendidikan Berdasarkan Umur");
var baca = require("readline-sync");

var Usia = parseInt(baca.question("Masukan Usia = "));

if(Usia > 15 && Usia < 19){
    console.log("Tingkat SMA")
}else if(Usia > 12 && Usia < 16 ){
    console.log("Tingkat SMP")
}else if(Usia > 6 && Usia < 13){
    console.log("Tingkat SD")
}else if(Usia > 4 && Usia < 7){
    console.log("Tingkat TK")
}else if(Usia > 2 && Usia < 5){
    console.log("Tingkat PG")
}