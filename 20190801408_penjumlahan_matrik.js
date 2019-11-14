
console.log("Penjumlahan Matrik 3x2");
console.log("  A =  |3 4 5|    B = |7 9 10| ");
console.log("       |2 3 8|        |3 6 4 | ");


var A = [[3, 4, 5], [2, 3, 8]];
var B = [[7, 9, 10], [3, 6, 4]];

var dat1 = A[0][0] + B[0][0];       
var dat2 = A[0][1] + B[0][1];
var dat3 = A[0][2] + B[0][2];       
var dat4 = A[1][0] + B[1][0];
var dat5 = A[1][1] + B[1][1];       
var dat6 = A[1][2] + B[1][2];

console.log("Matriks A + Matriks B =   |",dat1, dat2, dat3,"|");
console.log("                          |",dat4," ",dat5, dat6,"|");