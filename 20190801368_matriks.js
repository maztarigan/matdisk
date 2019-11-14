console.log("Mencari Jarak tempuh terpendek dan waktu tempuh tercepat.")

var i = require('readline-sync');

var a0 = parseInt(i.question("Masukan Jarak Tempuh A titik pertama : "));
var a1 = parseInt(i.question("Masukan waktu tempuh A titik pertama : "));
var a2 = parseInt(i.question("Masukan Jarak Tempuh A titik kedua : "));
var a3 = parseInt(i.question("Masukan waktu tempuh A titik kedua : "));
var a4 = parseInt(i.question("Masukan Jarak Tempuh A titik ketiga : "));
var a5 = parseInt(i.question("Masukan waktu tempuh A titik ketiga :"));

var b0 = parseInt(i.question("Masukan Jarak Tempuh B titik pertama : "));
var b1 = parseInt(i.question("Masukan waktu tempuh B titik pertama : "));
var b2 = parseInt(i.question("Masukan Jarak Tempuh B titik kedua : "));
var b3 = parseInt(i.question("Masukan waktu tempuh B titik kedua : "));
var b4 = parseInt(i.question("Masukan Jarak Tempuh B titik ketiga : "));
var b5 = parseInt(i.question("Masukan waktu tempuh B titik ketiga : "));

var r_1 = [[a0, a1], [a2, a3], [a4, a5]];
var r_2 = [[b0, b1], [b2, b3], [b4, b5]];

var r_1_dist = r_1[0][0] + r_1[1][0] + r_1[2][0];
var triptime_r_1 = r_1[0][1] + r_1[1][1] + r_1[2][1];
var r_2_dist = r_2[0][0] + r_2[1][0] + r_2[2][0];
var triptime_r_2 = r_2[0][1] + r_2[1][1] + r_2[2][1];

console.log("\nHasil ->\n");

if (r_1_dist > r_2_dist){
    console.log("Rute dengan jarak terdekat adalah Rute B dengan panjang",r_2_dist,"km.");
    console.log("Rute dengan jarak terjauh adalah Rute A dengan panjang",r_1_dist,"km.\n")
} else if (r_1_dist < r_2_dist) {
    console.log("Rute dengan jarak terdekat adalah Rute A dengan panjang",r_1_dist,"km.");
    console.log("Rute dengan jarak terjauh adalah Rute B dengan panjang",r_2_dist,"km.\n")    
} else {
    console.log("Jarak tempuh kedua jalur sama yaitu", r_1_dist,"km.\n");
}

if (triptime_r_1 < triptime_r_2){
    console.log("Rute dengan waktu tempuh tercepat adalah Rute A dengan waktu tempuh",triptime_r_1,"menit.");
    console.log("Rute dengan waktu tempuh terlama adalah Rute B dengan waktu tempuh",triptime_r_2,"menit.\n");
} else if (triptime_r_1 > triptime_r_2) {
    console.log("Rute dengan waktu tempuh tercepat adalah Rute B dengan waktu tempuh",triptime_r_2,"menit.");
    console.log("Rute dengan waktu tempuh terlama adalah Rute A dengan waktu tempuh",triptime_r_1,"menit.\n");
} else {
    console.log("Waktu tempuh kedua titik sama yaitu",triptime_r_2,"menit");
}