var input =require("readline-sync")

var A0 = parseInt(input.question("Masukan Jarak Jalur A Titik Pertama   : "));
var A1 = parseInt(input.question("Masukan Jarak Jalur A Titik Kedua : "));
var A2 = parseInt(input.question("Masukan Jarak Jalur A Titik Ketiga : "));
var B0 = parseInt(input.question("Masukan Jarak Jalur B Titik Pertama : "));
var B1 = parseInt(input.question("Masukan Jarak Jalur B Titik Kedua : "));
var B2 = parseInt(input.question("Masukan Jarak Jalur B Titik Ketiga : "));

var Jalur_A = [A0, A1, A2];
var Jalur_B = [B0, B1, B2];

var jarak_jalur_A = Jalur_A[0] + Jalur_A[1] + Jalur_A[2]
var jarak_jalur_B = Jalur_B[0] + Jalur_B[1] + Jalur_B[2]

if (jarak_jalur_A > jarak_jalur_B) {
    console.log("Jarak terjauh = Jalur_A", jarak_jalur_A, "KM");
    console.log("Jarak Terpendek = Jalur_B", jarak_jalur_B, "KM");
} else if (jarak_jalur_A < jarak_jalur_B) {
    console.log("Jarak Terjauh = Jalur_B", jarak_jalur_B, "KM");
    console.log("Jarak Terpendek = Jalur_A", jarak_jalur_A, "KM");
} else {
    console.log("jarak tempuh kedua jalur sama yaitu", jarak_jalur_A, "KM");
    
}