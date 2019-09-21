var input = require("readline-sync")

var nilai = input.questionInt("Masukan Nilai : ")

if(nilai > 85){
    console.log("A")
} else if(nilai > 70 && nilai < 86){
    console.log("B")
} else if(nilai > 60 && nilai < 71){
    console.log("C")
} else if (nilai > 50 && nilai < 61){
    console.log("D")
}else{
    console.log("E")
}