console.log("Mencari Jarak tempuh terpendek dan waktu tempuh tercepat.")

var i = require('readline-sync');

var a0 = parseInt(i.question("input Jarak Tempuh A titik pertama : "));
var a1 = parseInt(i.question("input waktu tempuh A titik pertama : "));
var a2 = parseInt(i.question("input Jarak Tempuh A titik kedua : "));
var a3 = parseInt(i.question("input waktu tempuh A titik kedua : "));
var a4 = parseInt(i.question("input Jarak Tempuh A titik ketiga : "));
var a5 = parseInt(i.question("input waktu tempuh A titik ketiga :"));

var b0 = parseInt(i.question("input Jarak Tempuh B titik pertama : "));
var b1 = parseInt(i.question("input waktu tempuh B titik pertama : "));
var b2 = parseInt(i.question("input Jarak Tempuh B titik kedua : "));
var b3 = parseInt(i.question("input waktu tempuh B titik kedua : "));
var b4 = parseInt(i.question("input Jarak Tempuh B titik ketiga : "));
var b5 = parseInt(i.question("input waktu tempuh B titik ketiga : "));

var jlr_1 = [[a0, a1], [a2, a3], [a4, a5]];
var jlr_2 = [[b0, b1], [b2, b3], [b4, b5]];

var jlr_1_dist = jlr_1[0][0] + jlr_1[1][0] + jlr_1[2][0];
var triptime_jlr_1 = jlr_1[0][1] + jlr_1[1][1] + jlr_1[2][1];
var jlr_2_dist = jlr_2[0][0] + jlr_2[1][0] + jlr_2[2][0];
var triptime_jlr_2 = jlr_2[0][1] + jlr_2[1][1] + jlr_2[2][1];

console.log("\nResult ->\n");

if (jlr_1_dist > jlr_2_dist){
    console.log("Rute jarak terdekat adalah Rute B dengan panjang",jlr_2_dist,"KM.");
    console.log("Rute jarak terjauh adalah Rute A dengan panjang",jlr_1_dist,"KM.\n")
} else if (jlr_1_dist < jlr_2_dist) {
    console.log("Rute jarak terdekat adalah Rute A dengan panjang",jlr_1_dist,"KM.");
    console.log("Rute jarak terjauh adalah Rute B dengan panjang",jlr_2_dist,"KM.\n")    
} else {
    console.log("Jarak tempuh kedua jalur sama yaitu", jlr_1_dist,"KM.\n");
}

if (triptime_jlr_1 < triptime_jlr_2){
    console.log("Rute waktu tempuh tercepat adalah Rute A dengan waktu tempuh",triptime_jlr_1,"menit.");
    console.log("Rute waktu tempuh terlama adalah Rute B dengan waktu tempuh",triptime_jlr_2,"menit.\n");
} else if (triptime_jlr_1 > triptime_jlr_2) {
    console.log("Rute waktu tempuh tercepat adalah Rute B dengan waktu tempuh",triptime_jlr_2,"menit.");
    console.log("Rute waktu tempuh terlama adalah Rute A dengan waktu tempuh",triptime_jlr_1,"menit.\n");
} else {
    console.log("Waktu tempuh kedua titik sama yaitu",triptime_jlr_2,"menit");
} 