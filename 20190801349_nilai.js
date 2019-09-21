var baca = require("readline-sync");

var nilai = parseInt(baca.question("Masukan Nilai : "));

if (nilai > 85){
    console.log("A")
}else if(nilai > 70 && nilai < 86){
    console.log("B")
}else if(nilai > 60 && nilai < 71){
    console.log("C")
}else if(nilai > 50 && nilai < 61){
    console.log("D")
}else if(nilai < 51){
    console.log("E")
}