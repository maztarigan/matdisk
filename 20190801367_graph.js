var baca = require("readline-sync");

Array

var jalur_a1 = parseInt(baca.question("Jarak A titik 0 = "));
var jalur_a2 = parseInt(baca.question("Jarak A titik 1 = "));
var jalur_a3 = parseInt(baca.question("Jarak A titik 2 = "));
var jalur_b1 = parseInt(baca.question("Jarak B titik 0 = "));
var jalur_b2 = parseInt(baca.question("Jarak B titik 1 = "));
var jalur_b3 = parseInt(baca.question("Jarak B titik 2 = "));

var jarak_jalur_A = jalur_a1 + jalur_a2 + jalur_a3;
var jarak_jalur_B = jalur_b1 + jalur_b2 + jalur_b3;

if (jarak_jalur_A > jarak_jalur_B) {
    console.log("Jarak Terpanjang = " +jarak_jalur_A+" KM")+
    console.log("Jarak Terpendek = " +jarak_jalur_B+" KM");
} else if (jarak_jalur_A < jarak_jalur_B){
    console.log("Jarak Terpanjang = " +jarak_jalur_B+" KM")+
    console.log("Jarak Terpendek = " +jarak_jalur_A+" KM");
} else if (jarak_jalur_A = jarak_jalur_B){
    console.log("Kedua jarak sama");
}