console.log("Perkalian Matriks Ordo 2x3");
console.log("A = | 3 4 5 |");
console.log("    | 2 3 8 |");
console.log("------------------");
console.log("B = | 7 9 10 |");
console.log("    | 3 6 4  |");
console.log("-------Atau-------");
var A = [[3,4,5],[2,3,8]];
var B = [[7,9,10],[3,6,4]];

var C1 = A[0][0] * B[0][0];
var C2 = A[0][1] * B[0][1];
var C3 = A[0][2] * B[0][2];
var C4 = A[1][0] * B[1][0];
var C5 = A[1][1] * B[1][1];
var C6 = A[1][2] * B[1][2];

console.log("A = " + "[" + A + "]");
console.log("B = " + "[" + B + "]");
console.log("------------------");
console.log("Hasil Penjumlahan Matriks = "); 
console.log(C1,C2,C3,C4,C5,C6);
console.log("-------Atau-------");
console.log(C1+" "+C2+" "+C3);
console.log(C4+" "+C5+" "+C6);
console.log("------------------");
console.log("Retyan Andriansyah - 20190801362");