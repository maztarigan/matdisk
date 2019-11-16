console.log("Perkalian Matrik 3x2");
console.log("  A =  |3 2|    B = |7 9 10 | ");
console.log("       |4 3|        |3 6  4 |");
console.log("       |5 8|\n")

var A = [[3, 2], [4, 3], [5, 8]];
var B = [[7, 9, 10], [3, 6, 4]];

var res1 = (A[0][0] * B[0][0]) + (A[0][1] * B[1][0]);
var res2 = (A[0][0] * B[0][1]) + (A[0][1] * B[1][1]);
var res3 = (A[0][0] * B[0][2]) + (A[0][1] * B[1][2]);

var res4 = (A[1][0] * B[0][0]) + (A[1][1] * B[1][0]);
var res5 = (A[1][0] * B[0][1]) + (A[1][1] * B[1][1]);
var res6 = (A[1][0] * B[0][2]) + (A[1][1] * B[1][2]);

var res7 = (A[2][0] * B[0][0]) + (A[2][1] * B[1][0]);
var res8 = (A[2][0] * B[0][1]) + (A[2][1] * B[1][1]);
var res9 = (A[2][0] * B[0][2]) + (A[2][1] * B[1][2]);

console.log("                        |",res1, res2, res3,"|");
console.log("Matriks A x Matriks B = |",res4, res5, res6,"|");
console.log("                        |",res7, res8, res9,"|"); 
