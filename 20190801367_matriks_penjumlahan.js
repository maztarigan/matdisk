console.log("Hitunglah penjumlahan matriks A dan matriks B = ");
console.log("                                A | 3 4 5 |      B | 7 9 10 | ");
console.log("                                  | 2 3 8 |        | 3 6 4  |");

var A = [[3, 4, 5], [2, 3, 8]];
var B = [[7, 9, 10], [3, 6, 4]];

var t1 = A[0][0] + B[0][0];
var t2 = A[0][1] + B[0][1];
var t3 = A[0][2] + B[0][2];
var t4 = A[1][0] + B[1][0];
var t5 = A[1][1] + B[1][1];
var t6 = A[1][2] + B[1][2];

console.log ("          ");

console.log ("Hasil penjumlahan matriks A + B = ");
console.log ("                      | "+t1+" "+t2+" "+t3+" |");
console.log ("                      |  "+t4+"  "+t5+" "+t6+" |");

