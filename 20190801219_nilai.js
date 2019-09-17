var input = require("readline-sync");

var nilai = parseInt(input.question("Masukkan Nilai : "));

if ((nilai >= 81) && (nilai <= 100)) {
    console.log ("Nilai Anda A")
 } else if ((nilai >= 70) && (nilai <= 80)) {
     console.log ("Nilai Anda B")
 } else if ((nilai >= 60) && (nilai <= 69)) {
     console.log ("Nilai Anda C")
 } else if ((nilai >= 50) && (nilai <= 59)) {
     console.log ("Nilai Anda D")
 } else {
     console.log ("Nilai Anda E")
 }