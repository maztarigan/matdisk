console.log("maps ecoplaza ke Lippo karawaci");
console.log("isi titik A dan titik B");

var keyboard = require('readline-sync');

var jalura0 = parseInt(keyboard.question("Masukkan titik A0 : "));
var jalura1 = parseInt(keyboard.question("Masukkan titik A1 : "));
var jalura2 = parseInt(keyboard.question("Masukkan titik A2 : "));

var jalurb0 = parseInt(keyboard.question("Masukkan titik B0 : "));
var jalurb1 = parseInt(keyboard.question("Masukkan titik B1 : "));
var jalurb2 = parseInt(keyboard.question("Masukkan titik B2 : "));

var jarak_jalur_a = jalura0+jalura1+jalura2;
var jarak_jalur_b = jalurb0+jalurb1+jalurb2;

if (jarak_jalur_a>jarak_jalur_b) {
    console.log("================================");
    console.log("jarak terpanjang adalah jalur A "+jarak_jalur_a+"KM");
    console.log("dan");
    console.log("jarak terpendek adalah jalur B "+jarak_jalur_b+"KM");
}else{
}
if (jarak_jalur_a<jarak_jalur_b) {
    console.log("==================================");
    console.log("jarak terpanjang adalah jalur B "+jarak_jalur_b+"KM");
    console.log("dan");
    console.log("jarak terpendek adalah jalur A "+jarak_jalur_a+"KM");
}else{
}