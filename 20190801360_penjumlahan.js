console.log("Penjumlahan matriks 3x2\n");
console.log("  A =  [3 4 5]    B = [7 9 10] ");
console.log("       [2 3 8]        [3 6 4 ]\n");
console.log("Result : \n");

var a = [[3, 4, 5], [2, 3, 8]];
var b = [[7, 9, 10], [3, 6, 4]];

var mat1 = a[0][0] + b[0][0];       
var mat2 = a[0][1] + b[0][1];
var mat3 = a[0][2] + b[0][2];       
var mat4 = a[1][0] + b[1][0];
var mat5 = a[1][1] + b[1][1];       
var mat6 = a[1][2] + b[1][2];

console.log("Matriks A + Matriks B =   ["+mat1+" "+mat2+" "+mat3+"]");
console.log("                          [ "+mat4+"  "+mat5+" "+mat6+"]\n");
console.log("20190801360_penjumlahan");