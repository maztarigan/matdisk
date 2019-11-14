console.log("Perkalian matriks 3x2");
console.log("  A =  |3 2|    B = |7 9 10 | ");
console.log("       |4 3|        |3 6  4 |");
console.log("       |5 8|\n")
console.log("Jawaban ->\n");

var a = [[3, 2], [4, 3], [5, 8]];
var b = [[7, 9, 10], [3, 6, 4]];

var Result1 = (a[0][0] * b[0][0]) + (a[0][1] * b[1][0]);
var Result2 = (a[0][0] * b[0][1]) + (a[0][1] * b[1][1]);
var Result3 = (a[0][0] * b[0][2]) + (a[0][1] * b[1][2]);

var Result4 = (a[1][0] * b[0][0]) + (a[1][1] * b[1][0]);
var Result5 = (a[1][0] * b[0][1]) + (a[1][1] * b[1][1]);
var Result6 = (a[1][0] * b[0][2]) + (a[1][1] * b[1][2]);

var Result7 = (a[2][0] * b[0][0]) + (a[2][1] * b[1][0]);
var Result8 = (a[2][0] * b[0][1]) + (a[2][1] * b[1][1]);
var Result9 = (a[2][0] * b[0][2]) + (a[2][1] * b[1][2]);

console.log("-------------------------------------------------------");
console.log("                        |",Result1, Result2, Result3,"|");
console.log("Matriks A x Matriks B = |",Result4, Result5, Result6,"|");
console.log("                        |",Result7, Result8, Result9,"|\n");
console.log("-------------------------------------------------------");