console.log("Penjumlahan Matrik 3x2");
console.log("  A =  |3 4 5|    B = |7 9 10| ");
console.log("       |2 3 8|        |3 6 4 |\n");


var A = [[3, 4, 5], [2, 3, 8]];
var B = [[7, 9, 10], [3, 6, 4]];

var data1 = A[0][0] + B[0][0];       
var data2 = A[0][1] + B[0][1];
var data3 = A[0][2] + B[0][2];       
var data4 = A[1][0] + B[1][0];
var data5 = A[1][1] + B[1][1];       
var data6 = A[1][2] + B[1][2];

console.log("Matriks A + Matriks B =   |",data1, data2, data3,"|");
console.log("                          |",data4," ",data5, data6,"|"); 