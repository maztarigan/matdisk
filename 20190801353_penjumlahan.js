console.log("Penjumlahan matriks 3x2");
console.log("  A = |3 4 5|   B = |7 9 10| ");
console.log("      |2 3 8|       |3 6 4 |\n");
console.log("Jawaban ->\n");

var A = [[3, 4, 5], [2, 3, 8]];
var B = [[7, 9, 10], [3, 6, 4]];

var res1 = A[0][0] + B[0][0];      var res2 = A[0][1] + B[0][1];
var res3 = A[0][2] + B[0][2];      var res4 = A[1][0] + B[1][0];
var res5 = A[1][1] + B[1][1];      var res6 = A[1][2] + B[1][2];

console.log("=========================")
console.log("Matriks A + Matriks B = |",res1, res2, res3,"|");
console.log("                        |",res4," ",res5, res6,"|\n");
console.log("=========================")
console.log("20190801353 Muhamad Irfan Aldiansyah")