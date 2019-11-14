console.log("Penjumlahan Matriks 3x2");
console.log(" A = |3 4 5|   B = |7 9 10|");
console.log("     |2 3 8|       |3 6 4|");

var a = [[3,4,5], [2,3,8]];
var b = [[7,9,10], [3,6,4]];

var penj1 = a[0][0] + b[0][0];
var penj2 = a[0][1] + b[0][1];
var penj3 = a[0][2] + b[0][2];
var penj4 = a[1][0] + b[1][0];
var penj5 = a[1][1] + b[1][1];
var penj6 = a[1][2] + b[1][2];

console.log("Penjumlahan Matriks A + B = ");
console.log("            |"+penj1, penj2, penj3+"|");
console.log("            |"+penj4, penj5, penj6+"|");
