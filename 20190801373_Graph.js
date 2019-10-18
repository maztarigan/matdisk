console.log("Maps Ecoplaza ke Supermall Karawaci");
console.log("Isi titik A dan titik B");

var baca = require('readline-sync');

var jalura0 = parseInt(baca.question("Masukan Titik A0 :"));
var jalura1 = parseInt(baca.question("Masukan Titik A1 :"));
var jalura2 = parseInt(baca.question("Masukan Titik A2 :"));

var jalurb0 = parseInt(baca.question("Masukan Titik B0 :"));
var jalurb1 = parseInt(baca.question("Masukan Titik B1 :"));
var jalurb2 = parseInt(baca.question("Masukan Titik B2 :"));

var jarak_jalur_a = jalura0+jalura1+jalura2;
var jarak_jalur_b = jalurb0+jalurb1+jalurb2;

if (jarak_jalur_a>jarak_jalur_b){
    console.log("Jarak Terjauh adalah Jalur A"+jarak_jalur_a+ "KM");
    console.log("dan");
    console.log("Jarak Terdekat adalah Jalur B"+jarak_jalur_b+ "KM");
}else{
}
if (jarak_jalur_a<jarak_jalur_b){
    console.log("Jarak Terjauh adalah Jalur B"+jarak_jalur_b+ "KM");
    console.log("dan");
    console.log("Jarak Terdekat adalah Jalur A"+jarak_jalur_a+ "KM");
}else{
}