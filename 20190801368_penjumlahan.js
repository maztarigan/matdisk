console.log("Penjumlahan matriks 3x2");
console.log("  A =  |3 4 5|    B = |7 9 10| ");
console.log("       |2 3 8|        |3 6 4 |\n");
console.log("Jawaban ->\n");

var a = [[3, 4, 5], [2, 3, 8]];
var b = [[7, 9, 10], [3, 6, 4]];

var res1 = a[0][0] + b[0][0];       var res2 = a[0][1] + b[0][1];
var res3 = a[0][2] + b[0][2];       var res4 = a[1][0] + b[1][0];
var res5 = a[1][1] + b[1][1];       var res6 = a[1][2] + b[1][2];

console.log("Matriks A + Matriks B =   |",res1, res2, res3,"|");
console.log("                          |",res4," ",res5, res6,"|\n");