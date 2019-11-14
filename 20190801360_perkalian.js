console.log("Perkalian matriks 3x2\n");
console.log("  A =  [3 2]    B = [7 9 10] ");
console.log("       [4 3]        [3 6  4]");
console.log("       [5 8]\n")
console.log("Result : \n");

var a = [[3, 2], [4, 3], [5, 8]];
var b = [[7, 9, 10], [3, 6, 4]];

var mat1 = (a[0][0] * b[0][0]) + (a[0][1] * b[1][0]);
var mat2 = (a[0][0] * b[0][1]) + (a[0][1] * b[1][1]);
var mat3 = (a[0][0] * b[0][2]) + (a[0][1] * b[1][2]);

var mat4 = (a[1][0] * b[0][0]) + (a[1][1] * b[1][0]);
var mat5 = (a[1][0] * b[0][1]) + (a[1][1] * b[1][1]);
var mat6 = (a[1][0] * b[0][2]) + (a[1][1] * b[1][2]);

var mat7 = (a[2][0] * b[0][0]) + (a[2][1] * b[1][0]);
var mat8 = (a[2][0] * b[0][1]) + (a[2][1] * b[1][1]);
var mat9 = (a[2][0] * b[0][2]) + (a[2][1] * b[1][2]);

console.log("                        ["+mat1+" "+mat2+" "+mat3+"]");
console.log("Matriks A x Matriks B = ["+mat4+" "+mat5+" "+mat6+"]");
console.log("                        ["+mat7+" "+mat8+" "+mat9+"]\n");
console.log("20190801360_perkalian");