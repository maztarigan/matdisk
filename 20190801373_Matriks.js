console.log("Selamat Datang");

var key = require('readline-sync');

var Data_A = [[2,5],[3,7]];
var Data_B = [[4,9],[6,8]];

var Data_1 = Data_A[0][0] + Data_B[0][0];
var Data_2 = Data_A[0][1] + Data_B[0][1];
var Data_3 = Data_A[1][0] + Data_B[1][0];
var Data_4 = Data_A[1][1] + Data_B[1][1];

console.log("C : ");
console.log("Data A"+"[" + Data_A +"]");
console.log("Data B"+"["+Data_B + "]");
console.log(Data_1,Data_2,Data_3,Data_4);
console.log("Thankyou")