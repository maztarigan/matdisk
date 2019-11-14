console.log("Perkalian Matriks 3x2");
console.log(" A = |3 2|    B = |7 9 10 |");
console.log("     |4 3|        |3 6 4 |");
console.log("     |5 8|\n")
console.log("Jawaban ->\n");

var A = [[3, 2], [4, 3], [5, 8]];
var B = [[7, 9, 10], [3, 6, 4]];

var Res1 = (A[0][0] * B[0][0]) + (A[0][1] * B[1][0]);
var Res2 = (A[0][0] * B[0][1]) + (A[0][1] * B[1][1]);
var Res3 = (A[0][0] * B[0][2]) + (A[0][1] * B[1][2]);

var Res4 = (A[1][0] * B[0][0]) + (A[1][1] * B[1][0]);
var Res5 = (A[1][0] * B[0][1]) + (A[1][1] * B[1][1]);
var Res6 = (A[1][0] * B[0][2]) + (A[1][1] * B[1][2]);

var Res7 = (A[2][0] * B[0][0]) + (A[2][1] * B[1][0]);
var Res8 = (A[2][0] * B[0][1]) + (A[2][1] * B[1][1]);
var Res9 = (A[2][0] * B[0][2]) + (A[2][1] * B[1][2]);

console.log("=========================")
console.log("                        |",Res1, Res2, Res3,"|");
console.log("Matriks A x Matriks B = |",Res4, Res5, Res6,"|");
console.log("                        |",Res7, Res8, Res9,"|\n");
console.log("=========================")
console.log("20190801353 Muhamad Irfan Aldiansyah")