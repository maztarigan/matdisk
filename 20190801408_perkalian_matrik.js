console.log("Perkalian Matrik 3x2");
console.log("  A =  |3 2|    B = |7 9 10 | ");
console.log("       |4 3|        |3 6  4 |");
console.log("       |5 8|\n")

var A = [[3, 2], [4, 3], [5, 8]];
var B = [[7, 9, 10], [3, 6, 4]];

var dat1 = (A[0][0] * B[0][0]) + (A[0][1] * B[1][0]);
var dat2 = (A[0][0] * B[0][1]) + (A[0][1] * B[1][1]);
var dat3 = (A[0][0] * B[0][2]) + (A[0][1] * B[1][2]);
var dat4 = (A[1][0] * B[0][0]) + (A[1][1] * B[1][0]);
var dat5 = (A[1][0] * B[0][1]) + (A[1][1] * B[1][1]);
var dat6 = (A[1][0] * B[0][2]) + (A[1][1] * B[1][2]);
var dat7 = (A[2][0] * B[0][0]) + (A[2][1] * B[1][0]);
var dat8 = (A[2][0] * B[0][1]) + (A[2][1] * B[1][1]);
var dat9 = (A[2][0] * B[0][2]) + (A[2][1] * B[1][2]);

console.log("                        |",dat1, dat2, dat3,"|");
console.log("Matriks A x Matriks B = |",dat4, dat5, dat6,"|");
console.log("                        |",dat7, dat8, dat9,"|")