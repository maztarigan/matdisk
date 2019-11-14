var baca = require('readline-sync');

var a0 = parseInt(baca.question("masukan jalur A pertama = "));
var a1 = parseInt(baca.question("masukan waktu A pertama = "));
var a2 = parseInt(baca.question("masukan jalur A kedua = "));
var a3 = parseInt(baca.question("masukan waktu A kedua = "));
var a4 = parseInt(baca.question("masukan jalur A ketiga = "));
var a5 = parseInt(baca.question("masukan waktu A ketiga = "));

var b0 = parseInt(baca.question("masukan jalur B pertama = "));
var b1 = parseInt(baca.question("masukan waktu B pertama = "));
var b2 = parseInt(baca.question("masukan jalur B kedua = "));
var b3 = parseInt(baca.question("masukan waktu B kedua = "));
var b4 = parseInt(baca.question("masukan jalur B ketiga = "));
var b5 = parseInt(baca.question("masukan waktu B ketiga = "));

var jalur_a = [[a0,a1],[a2,a3],[a4,a5]];
var jalur_b = [[b0,b1],[b2,b3],[b4,b5]];

var jarakA = jalur_a[0][0] + jalur_a[1][0] + jalur_a[2][0];
var jarakB = jalur_b[0][0] + jalur_b[1][0] + jalur_b[2][0];

var tempuhA = jalur_a[0][1] + jalur_a[1][1] + jalur_a[2][1];
var tempuhB = jalur_b[0][1] + jalur_b[1][1] + jalur_b[2][1];

console.log("------------------------------------------------------- ");
if(jarakA>jarakB && tempuhA>tempuhB){
    console.log("Jarak Terpanjang saya adalah    ="+jarakA+"Km");
    console.log("Jarak Waktu Tercepat adalah="+tempuhA+"Menit");
    console.log("Jarak Terdekat adalah       ="+jarakB+"Km");
    console.log("Jarak Waktu adalah ="+tempuhB+"Menit");
    
}
else{
    console.log("Jarak Terpanjang adalah    ="+jarakB+"Km");
    console.log("Jarak Waktu Tercepat adalah ="+tempuhB+"Menit");
    console.log("Jarak Terdekat adalah       ="+jarakA+"Km");
    console.log("Jarak Waktu Terlama adalah  ="+tempuhA+"Menit");
}
