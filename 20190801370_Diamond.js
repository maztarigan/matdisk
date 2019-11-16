var key = require("readline-sync");
var x = ""
var n = parseInt(key.question('Input Nilai : '));

console.log("======================================");
var a = '';
for(var a=n; a>0; a--){
    for(var i=1; i<=a; i++){
        x += "  ";
    }
    for(var a1=n; a1>a; a1--){
        x += "*"+"   ";
    }
    console.log(x);
    x= "";
}
var x = '';
for(var b=n; b>=1; b--){
    for(var i=n; i>b; i--){
        x += "  ";
    }
    for(var b1=i; b1>=1; b1--){
        x += "*"+"   ";
    }
    console.log(x);
    x = "";
}
console.log("======================================")