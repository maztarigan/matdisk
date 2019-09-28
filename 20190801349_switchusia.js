console.log("Mencari Tingkat Pendidikan Berdasarkan Usia");
var baca = require("readline-sync")

var Usia = parseInt(baca.question("Masukan Usia = "));

switch(true){
    case Usia =>3 : case Usia <=4:
        console.log("Tingkat PG");
        break;
    case Usia =>5 : case Usia <=5:
        console.log("Tingkat TK");
        break;
    case Usia =>6 : case Usia <=12:
        console.log("Tingkat SD");
        break;
    case Usia =>13 : case Usia <=15:
        console.log("Tingkat SMP");
        break;
    case Usia =>16 : case Usia <=18:
        console.log("Tingkat SMA");
        break;
}