console.log("Welcome");
console.log("Tugas Matdis Diamond");
var inputkeyboard = require("readline-sync");
var n = parseInt(inputkeyboard.question("Input Nilai : " ));
var d = '';
var Diamond = "";
console.log("\n" + "Diamond Shape : " + "\n");
for(var d=n; d>0; d--){
    for(var i=1; i<=d; i++){
        Diamond += "  ";
    }
    for(var d1=n; d1>d; d1--){
        Diamond += "*"+"   ";
    }
    console.log(Diamond);
    Diamond= "";
}
var Diamond = '';
for(var i=n; i>=1; i--){
    for(var j=n; j>i; j--){
        Diamond += "  ";
    }
    for(var k=i; k>=1; k--){
        Diamond += "*"+"   ";
    }
    console.log(Diamond);
    Diamond = "";
}
console.log("\n" + "Thank you");