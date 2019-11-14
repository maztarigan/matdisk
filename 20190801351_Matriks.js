var jalur_A = [[5,30], [10,5], [2,10]];
var jalur_B = [[5,30], [6,45], [3,20]];

var jarak_jalur_A = jalur_A[0][0] + jalur_A[1][0] + jalur_A[2][0];
var jarak_jalur_B = jalur_B[0][0] + jalur_B[1][0] + jalur_B[2][0];

var waktu_jalur_A = jalur_A[0][1] + jalur_A[1][1] + jalur_A[2][1];
var waktu_jalur_B = jalur_B[0][1] + jalur_B[1][1] + jalur_B[2][1];

var inputkeyboard = require('readline-sync');

var jalur_A1 = parseInt(inputkeyboard.question('Jarak Jalur A1 : '));
var jalur_A2 = parseInt(inputkeyboard.question('Jarak Jalur A2 : '));
var jalur_A3 = parseInt(inputkeyboard.question('Jarak Jalur A3 : '));

var jalur_B1 = parseInt(inputkeyboard.question('Jarak Jalur B1 : '));
var jalur_B2 = parseInt(inputkeyboard.question('Jarak Jalur B2 : '));
var jalur_B3 = parseInt(inputkeyboard.question('Jarak Jalur B3 : '));


var waktu_jalur_A1 = parseInt(inputkeyboard.question('Waktu Tempuh Jalur A1 : '));
var waktu_jalur_A2 = parseInt(inputkeyboard.question('Waktu Tempuh Jalur A2 : '));
var waktu_jalur_A3 = parseInt(inputkeyboard.question('Waktu Tempuh Jalur A3 : '));

var waktu_jalur_B1 = parseInt(inputkeyboard.question('Waktu Tempuh Jalur B1 : '));
var waktu_jalur_B2 = parseInt(inputkeyboard.question('Waktu Tempuh Jalur B2 : '));
var waktu_jalur_B3 = parseInt(inputkeyboard.question('Waktu Tempuh Jalur B3 : '));

if (jarak_jalur_A > jarak_jalur_B && waktu_jalur_A > waktu_jalur_B){
    console.log("--------------------");
    console.log("Jarak Terpanjang : "+jarak_jalur_B+ "KM");
    console.log("Waktu Tempuh Tercepat : "+waktu_jalur_B+ "Menit");
    console.log("Jarak Terpendek : "+jarak_jalur_A+ "KM");
    console.log("Waktu Tempuh Terlama : "+waktu_jalur_A+ "Menit");
    console.log("--------------------");
}
else{
    console.log("--------------------");
    console.log("Jarak Terpanjang : "+jarak_jalur_A+ "KM");
    console.log("Waktu Tempuh Tercepat : "+waktu_jalur_A+ "Menit");
    console.log("Jarak Terpendek : "+jarak_jalur_B+ "KM");
    console.log("Waktu Tempuh Terlama : "+waktu_jalur_B+ "Menit");
    console.log("--------------------");
}