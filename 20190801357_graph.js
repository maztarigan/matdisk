var keyboard = require('readline-sync');

Array

var jalur_a1 = parseint(keyboard.question("jarak a titik 0"));
var jalur_a2 = parseInt(keyboard.question("jarak a titik 1"));
var jalur_a3 = parseInt(keyboard.question("jarak a titik 2"));
var jalur_b1 = parseInt(keyboard.question("jarak b titik 0"));
var jalur_b2 = parseInt(keyboard.question("jarak b titik 1"));
var jalur_b3 = parseInt(keyboard.question("jarak b titik 3"));

var jarak_jalur_a = jalur_a1 + jalur_a2 + jalur_a3;
var jarak_jalur_b = jalur_b1 + jalur_b2 + jalur_b3;

if (jarak_jalur_a > jarak_jalur_b) {
    console.log("jarak terpanjang=" +jarak_jalur_a+"KM")+
    console.log("jarak terpendek=" + jarak_jalur_b+"KM");
}else if (jarak_jalur_a < jarak_jalur_b) {
    console.log("jarak terpanjang=" + jarak_jalur_b+"KM")+
    console.log("jarak terpendek=" +jarak_jalur_a+"KM");
}else if (jarak_jalur_a = jarak_jalur_b){
    console.log("kedua jarak sama");
}