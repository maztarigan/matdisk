console.log("    Diamond/Ketupat");
var key = require("readline-sync");
var s = " "
var n = 6;

console.log("=======================");
var a = '';
for(var a=n; a>0; a--){
    for(var i=1; i<=a; i++){
        s += "  ";
    }
    for(var b=n; b>a; b--){
        s += "*"+"   ";
    }
    console.log(s);
    s= "";
}
var s = '';
for(var i=n; i>=1; i--){
    for(var k=n; k>i; k--){
        s += "  ";
    }
    for(var r=i; r>=1; r--){
        s += "*"+"   ";
    }
    console.log(s);
    s = "";
}
console.log("");
console.log("=======================");