var input = require('readline-sync');

var jarA0 = parseInt(input.question("Masukan jarak A titik 1 = "));
var wakA0 = parseInt(input.question("Masukan waktu A titik 1 = "));
var jarA1 = parseInt(input.question("Masukan jarak A titik 2 = "));
var wakA1 = parseInt(input.question("Masukan waktu A titik 2 = "));
var jarA2 = parseInt(input.question("Masukan jarak A titik 3 = "));
var wakA2 = parseInt(input.question("Masukan waktu A titik 3 = "));

var jarB0 = parseInt(input.question("Masukan jarak B titik 1 = "));
var wakB0 = parseInt(input.question("Masukan waktu B titik 1 = "));
var jarB1 = parseInt(input.question("Masukan jarak B titik 2 = "));
var wakB1 = parseInt(input.question("Masukan waktu B titik 2 = "));
var jarB2 = parseInt(input.question("Masukan jarak B titik 3 = "));
var wakB2 = parseInt(input.question("Masukan waktu B titik 3 = "));

var jalur_A = [[jarA0,wakA0],[jarA1,wakA1],[jarA2,wakA2]];
var jalur_B = [[jarB0,wakB0],[jarB1,wakB1],[jarB2,wakB2]];

var jarak_jalur_A = jalur_A[0][0] + jalur_A[1][0] + jalur_A[2][0];
var jarak_jalur_B = jalur_B[0][0] + jalur_B[1][0] + jalur_B[2][0];

var waktu_jalur_A = jalur_A[0][1] + jalur_A[1][1] + jalur_A[2][1];
var waktu_jalur_B = jalur_B[0][1] + jalur_B[1][1] + jalur_B[2][1];

if (jarak_jalur_A > jarak_jalur_B) {
    console.log("Jalur dengan jarak terpanjang adalah jalur A yaitu : " ,jarak_jalur_A, "KM");
    console.log("Jalur dengan jarak terdekat adalah jalur B yaitu : " ,jarak_jalur_B, "KM");
} else {
    console.log("Jalur dengan jarak terdekat adalah jalur B yaitu : " ,jarak_jalur_B, "KM");
    console.log("Jalur dengan jarak terpanjang adalah jalur A yaitu : " ,jarak_jalur_A, "KM");
}

if (waktu_jalur_A > waktu_jalur_B) {
    console.log("Waktu tercepat adalah jalur A yaitu : " ,waktu_jalur_A, "Menit");
    console.log("Waktu terlama adalah jalur B yaitu : " ,waktu_jalur_B, "Menit");
} else {
   console.log("Waktu terlama adalah jalur B yaitu : " ,waktu_jalur_B, "Menit");
   console.log("Waktu tercepat adalah jalur A yaitu : " ,waktu_jalur_A, "Menit");
}