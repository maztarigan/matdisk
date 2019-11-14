console.log("Perkalian Matrik 3x2");
console.log("  A =  |3 2|    B = |7 9 10 | ");
console.log("       |4 3|        |3 6  4 |");
console.log("       |5 8|\n")

var A = [[3, 2], [4, 3], [5, 8]];
var B = [[7, 9, 10], [3, 6, 4]];

var data1 = (A[0][0] * B[0][0]) + (A[0][1] * B[1][0]);
var data2 = (A[0][0] * B[0][1]) + (A[0][1] * B[1][1]);
var data3 = (A[0][0] * B[0][2]) + (A[0][1] * B[1][2]);
var data4 = (A[1][0] * B[0][0]) + (A[1][1] * B[1][0]);
var data5 = (A[1][0] * B[0][1]) + (A[1][1] * B[1][1]);
var data6 = (A[1][0] * B[0][2]) + (A[1][1] * B[1][2]);
var data7 = (A[2][0] * B[0][0]) + (A[2][1] * B[1][0]);
var data8 = (A[2][0] * B[0][1]) + (A[2][1] * B[1][1]);
var data9 = (A[2][0] * B[0][2]) + (A[2][1] * B[1][2]);

console.log("                        |",data1, data2, data3,"|");
console.log("Matriks A x Matriks B = |",data4, data5, data6,"|");
console.log("                        |",data7, data8, data9,"|"); 