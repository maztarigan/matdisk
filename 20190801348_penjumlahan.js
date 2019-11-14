console.log("Penjumlahan matriks 3x2");
console.log("  A =  |3 4 5|    B = |7 9 10| ");
console.log("       |2 3 8|        |3 6 4 |\n");
console.log("Jawaban ->\n");

var a = [[3, 4, 5], [2, 3, 8]];
var b = [[7, 9, 10], [3, 6, 4]];

var hasil1 = a[0][0] + b[0][0];       var hasil2 = a[0][1] + b[0][1];
var hasil3 = a[0][2] + b[0][2];       var hasil4 = a[1][0] + b[1][0];
var hasil5 = a[1][1] + b[1][1];       var hasil6 = a[1][2] + b[1][2];

console.log("Matriks A + Matriks B =   |",hasil1, hasil2, hasil3,"|");
console.log("                          |",hasil4," ",hasil5, hasil6,"|\n"); 