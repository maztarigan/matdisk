console.log("    3 2       7 9 10");
console.log("A = 4 3   B = 3 6 4");
console.log("    5 8 \n");

var a = [[3,2],[4,3],[5,8]];
var b = [[7,9,10],[3,6,4]];

var hasil1 = a[0][0]*b[0][0] + a[0][1]*b[1][0];
var hasil2 = a[0][0]*b[0][1] + a[0][1]*b[1][1];
var hasil3 = a[0][0]*b[0][2] + a[0][1]*b[1][2];

var hasil4 = a[1][0]*b[0][0] + a[1][1]*b[1][0];
var hasil5 = a[1][0]*b[0][1] + a[1][1]*b[1][1];
var hasil6 = a[1][0]*b[0][2] + a[1][1]*b[1][2];

var hasil7 = a[2][0]*b[0][0] + a[2][1]*b[1][0];
var hasil8 = a[2][0]*b[0][1] + a[2][1]*b[1][1];
var hasil9 = a[2][0]*b[0][2] + a[2][1]*b[1][2];

console.log("Hasil")
console.log(hasil1,hasil2,hasil3);
console.log(hasil4,hasil5,hasil6);
console.log(hasil7,hasil8,hasil9);