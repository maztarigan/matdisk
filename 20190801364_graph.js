var input =require('readline-sync');
var jalurA0 = parseInt(input.question("Masukkan Jarak Jalur A Titik Pertama: "));
var jalurA1 = parseInt(input.question("Masukkan Jarak Jalur A Titik Kedua : "));
var jalurA2 = parseInt(input.question("Masukkan Jarak Jalur A Titik Ketiga : "));
var jalurB0 = parseInt(input.question("Masukkan jarak Jalur B Titik Pertama : "));
var jalurB1 = parseInt(input.question("Masukkan Jarak Jalur B Titik Kedua : "));
var jalurB2 = parseInt(input.question("Masukkan Jarak Jalur B Titik Ketiga : "));

var jarak_jalur_A = jalurA0 + jalurA1 + jalurA2;
var jarak_jalur_B = jalurB0 + jalurB1 + jalurB2;

if (jarak_jalur_A > jarak_jalur_B){
    console.log("Jarak Terpanjang : Jalur A", jarak_jalur_A, "KM");
    console.log("Jarak Terpendek : Jalur B", jarak_jalur_B, "KM"); 
} else {
    console.log("Jarak Terpanjang : Jalur B", jarak_jalur_B, "KM");
    console.log("Jarak Terpendek : Jalur A", jarak_jalur_A, "KM");
}