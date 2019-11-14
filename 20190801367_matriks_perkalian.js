console.log("Hitunglah perkalian matriks A dan matriks B = ");
console.log("                               A | 3 2 |      B | 7 9 10 | ");
console.log("                                 | 4 3 |        | 3 6  4 |");
console.log("                                 | 5 8 |");

var A = [[3, 2], [4, 3], [5, 8]];
var B = [[7, 9, 10], [3, 6, 4]];

var x1 = (A[0][0] * B[0][0]) + (A[0][1] * B[1][0]);
var x2 = (A[0][0] * B[0][1]) + (A[0][1] * B[1][1]);
var x3 = (A[0][0] * B[0][2]) + (A[0][1] * B[1][2]);

var x4 = (A[1][0] * B[0][0]) + (A[1][1] * B[1][0]);
var x5 = (A[1][0] * B[0][1]) + (A[1][1] * B[1][1]);
var x6 = (A[1][0] * B[0][2]) + (A[1][1] * B[1][2]);

var x7 = (A[2][0] * B[0][0]) + (A[2][1] * B[1][0]);
var x8 = (A[2][0] * B[0][1]) + (A[2][1] * B[1][1]);
var x9 = (A[2][0] * B[0][2]) + (A[2][1] * B[1][2]);

console.log ("           ");

console.log ("Hasil perkalian matriks A x B = ");
console.log ("                     | "+x1+" "+x2+" "+x3+" |");
console.log ("                     | "+x4+" "+x5+" "+x6+" |");
console.log ("                     | "+x7+" "+x8+" "+x9+" |");