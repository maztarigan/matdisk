var input = require('readline-sync')

var A0 = parseInt(input.question("Masukan Jarak A Pertama : "));
var A1 = parseInt(input.question("Masukan Jarak A Pertama : "));
var A2 = parseInt(input.question("Masukan Jarak A Kedua : "));
var A3 = parseInt(input.question("Masukan Jarak A Kedua : "));
var A4 = parseInt(input.question("Masukan Jarak A Ketiga : "));
var A5 = parseInt(input.question("Masukan Jarak A Ketiga : "));

var B0 = parseInt(input.question("Masukan Jarak B Pertama : "));
var B1 = parseInt(input.question("Masukan Jarak B Pertama : "));
var B2 = parseInt(input.question("Masukan Jarak B Kedua : "));
var B3 = parseInt(input.question("Masukan Jarak B Kedua : "));
var B4 = parseInt(input.question("Masukan Jarak B Ketiga : "));
var B5 = parseInt(input.question("Masukan Jarak B Ketiga : "));

var r_1 = [[A0, A1], [A2, A3], [A4, A5]];
var r_2 = [[B0, B1], [B2, B3], [B4, B5]];

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