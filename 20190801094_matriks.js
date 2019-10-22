Array

var a = [[2,7],[3,5]];
var b = [[4,8],[6,9]];

var b_pertama_k_pertama = a[0][0]+b[0][0]
var b_pertama_k_kedua = a[0][1]+b[0][1]
var b_kedua_k_pertama = a[1][0]+b[1][0]
var b_kedua_k_kedua = a[1][1]+b[1][1]

console.log("Matriks A+B = |"+b_pertama_k_pertama +"  "+ b_pertama_k_kedua+"|");
console.log("              |"+ b_kedua_k_pertama +"  "+ b_kedua_k_kedua +"|");