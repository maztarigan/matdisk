var baca = require('readline-sync')

var jalur_A1 = parseInt(baca.question("Masukan Jarak A1 :"));
var jalur_A2 = parseInt(baca.question("Masukan Jarak A2 :"));
var jalur_A3 = parseInt(baca.question("Masukan Jarak A3 :"));
var waktu_A1 = parseInt(baca.question("Masukan Waktu A1 :"));
var waktu_A2 = parseInt(baca.question("Masukan Waktu A2 :"));
var waktu_A3 = parseInt(baca.question("Masukan Waktu A3 :"));

var jalur_B1 = parseInt(baca.question("Masukan Jarak B1 :"));
var jalur_B2 = parseInt(baca.question("Masukan Jarak B2 :"));
var jalur_B3 = parseInt(baca.question("Masukan Jarak B3 :"));
var waktu_B1 = parseInt(baca.question("Masukan Waktu B1 :"));
var waktu_B2 = parseInt(baca.question("Masukan Waktu B2 :"));
var waktu_B3 = parseInt(baca.question("Masukan Waktu B3 :"));

var jalur_A = [[jalur_A1,waktu_A1],[jalur_A2,waktu_A2],[jalur_A3,waktu_A3]];
var jalur_B = [[jalur_B1,waktu_B1],[jalur_B2,waktu_B2],[jalur_B3,waktu_B3]];

var Jarak_Jalur_A = jalur_A[0][0] + jalur_A[1][0] + jalur_A[2][0];
var Jarak_Jalur_B = jalur_B[0][0] + jalur_B[1][0] + jalur_B[2][0];

var Waktu_Jalur_A = jalur_A[0][1] + jalur_A[1][1] + jalur_A[2][1];
var Waktu_Jalur_B = jalur_B[0][1] + jalur_B[1][1] + jalur_B[2][1];

console.log("Perbandingan jarak dan waktu tempuh = ");

console.log("Route A");
console.log("       Total Jarak Tempuh Jalur A = " +Jarak_Jalur_A);
console.log("       Total Waktu Tempuh Jalur A = " +Waktu_Jalur_A);
console.log("Route B");
console.log("       Total Jarak Tempuh Jalur B = " +Jarak_Jalur_B);
console.log("       Total Waktu Tempuh Jalur B = " +Waktu_Jalur_B);
console.log("======================================================");
if (Jarak_Jalur_A > Jarak_Jalur_B){
    console.log("Jarak terjauh jalur A");
    console.log("Jarak terdekat jalur B");
}else{
    console.log("Jarak terjauh jalur B");
    console.log("Jarak terdekat jalur A");
}
if ( Waktu_Jalur_A > Waktu_Jalur_B) {
    console.log("Waktu tercepat jalur A");
    console.log("Waktu terlama jalur B");
}
else {
    console.log("Waktu terlama jalur B");
    console.log("Waktu tercepat jalur A");
}