console.log("Perkalian matriks 3x2");
console.log("  A =  |3 2|    B = |7 9 10 | ");
console.log("       |4 3|        |3 6  4 |");
console.log("       |5 8|\n")
console.log("Jawaban ->\n");

var a = [[3, 2], [4, 3], [5, 8]];
var b = [[7, 9, 10], [3, 6, 4]];

var res1 = (a[0][0] * b[0][0]) + (a[0][1] * b[1][0]);
var res2 = (a[0][0] * b[0][1]) + (a[0][1] * b[1][1]);
var res3 = (a[0][0] * b[0][2]) + (a[0][1] * b[1][2]);

var res4 = (a[1][0] * b[0][0]) + (a[1][1] * b[1][0]);
var res5 = (a[1][0] * b[0][1]) + (a[1][1] * b[1][1]);
var res6 = (a[1][0] * b[0][2]) + (a[1][1] * b[1][2]);

var res7 = (a[2][0] * b[0][0]) + (a[2][1] * b[1][0]);
var res8 = (a[2][0] * b[0][1]) + (a[2][1] * b[1][1]);
var res9 = (a[2][0] * b[0][2]) + (a[2][1] * b[1][2]);

console.log("                        |",res1, res2, res3,"|");
console.log("Matriks A x Matriks B = |",res4, res5, res6,"|");
console.log("                        |",res7, res8, res9,"|\n");