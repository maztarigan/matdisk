var jarak_tempuh = require("readline-sync");

var jalur_a = [];
jalur_a = parseInt(jarak_tempuh.question("jarak A pusat 1 : "));
jalur_a = parseInt(jarak_tempuh.question("jarak A pusat 2 : "));
jalur_a = parseInt(jarak_tempuh.question("jarak A pusat 3 : "));

var jalur_b = [];
jalur_b = parseInt(jarak_tempuh.question("jarak B pusat 1 : "));
jalur_b = parseInt(jarak_tempuh.question("jarak B pusat 2 : "));
jalur_b = parseInt(jarak_tempuh.question("jarak B pusat 3 : "));

var jarak_jalur_A = jalur_a[1]+[2]+[3];
var jalur_jalur_B = jalur_b[1]+[2]+[3];

console.log("================================");
if (jarak_jalur_A>jalur_jalur_B) {
    console.log("jarak terpanjang A :"+jarak_jalur_A);
    console.log("jarak terdekat B :"+jalur_jalur_B);
}else{
    console.log("jarak terdekat B :"+jalur_jalur_B);
    console.log("jarak terpanjang A :"+jarak_jalur_A);
}

console.log("terima kasih");