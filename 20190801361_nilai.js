var baca = require ('readline-sync')

var a = parseInt(baca.question("Masukkan Nilai Bilangan : "))

if(a>85) {
    console.log ("Nilai anda A");
} else
if((a>70) && (a<86)) {
    console.log ("Nilai anda B");
} else
if((a>60) && (a<71)) {
    console.log ("Nilai anda C");
} else
if((a>50) && (a<61)) {
    console.log ("Nilai anda D");
} else
if(a<51) {
    console.log ("Nilai anda E");
}