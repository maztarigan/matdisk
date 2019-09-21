var baca = require ('readline-sync')

var a = parseInt(baca.question("Masukkan Nilai : "))

if(a>85) {
    console.log ("A");
} else
if((a>70) && (a<86)) {
    console.log ("B");
} else
if((a>60) && (a<71)) {
    console.log ("C");
} else
if((a>50) && (a<61)) {
    console.log ("D");
} else
if(51<a) {
    console.log ("E");
}