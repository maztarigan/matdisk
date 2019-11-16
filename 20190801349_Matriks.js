var Baca = require("readline-sync")
var JarakA1 = parseInt(Baca.question("Masukan Jarak A 1 = "));
var WaktuA1 = parseInt(Baca.question("Masukan Waktu A 1 = "));
var JarakA2 = parseInt(Baca.question("Masukan Jarak A 2 = "));
var WaktuA2 = parseInt(Baca.question("Masukan_waktu A 2 = "));
var JarakA3 = parseInt(Baca.question("Masukan Jarak A 3 = "));
var WaktuA3 = parseInt(Baca.question("Masukan Waktu A 3 = "));

var JarakB1 = parseInt(Baca.question("Masukan Jarak B 1 = "));
var WaktuB1 = parseInt(Baca.question("Masukan Waktu B 1 = "));
var JarakB2 = parseInt(Baca.question("Masukan Jarak B 2 = "));
var WaktuB2 = parseInt(Baca.question("Masukan_waktu B 2 = "));
var JarakB3 = parseInt(Baca.question("Masukan Jarak B 3 = "));
var WaktuB3 = parseInt(Baca.question("Masukan Waktu B 3 = "));

var Jalur_A = [[JarakA1,WaktuA1],[JarakA2,WaktuA2],[JarakA3,WaktuA3]];
var Jalur_B = [[JarakB1,WaktuB1],[JarakB2,WaktuB2],[JarakB3,WaktuB3]];

var Jarak_Jalur_A = Jalur_A[0][0]+Jalur_A[1][0]+Jalur_A[2][0];
var Jarak_Jalur_B = Jalur_B[0][0]+Jalur_B[1][0]+Jalur_B[2][0];
var Waktu_Jalur_A = Jalur_A[0][1]+Jalur_B[1][1]+Jalur_B[2][1];
var Waktu_Jalur_B = Jalur_B[0][1]+Jalur_B[1][1]+Jalur_B[2][1];

console.log("HASIL");
console.log("Jarak Jalur A = "+Jarak_Jalur_A);
console.log("Waktu Jalur A = "+Waktu_Jalur_A);
console.log("Jarak Jalur B = "+Jarak_Jalur_B);
console.log("Waktu Jalur B = "+Waktu_Jalur_B);

if (Jarak_Jalur_A > Jarak_Jalur_B) {
    console.log("Jarak Jalur A Lebih Jauh dari Jarak Jalur B")
}else if (Jarak_Jalur_A = Jarak_Jalur_B) {
    console.log("Kedua Jalur Sama Jauhnya")
}else {
    console.log("Jarak Jalur B Lebih Jauh dari Jarak Jalur A")
}

if (Waktu_Jalur_A > Waktu_Jalur_B) {
    console.log("Waktu A Lebih Lama dari Waktu B")
}else if (Waktu_Jalur_B = Waktu_Jalur_B) {
    console.log("Kedua Waktu adalah Sama")
}else{
    console.log("Waktu B Lebih Lama dari Waktu A")
}
