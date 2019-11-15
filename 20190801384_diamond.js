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
for(var i=n; i>=1; i--){
    for(var k=n; k>i; k--){
        x += "  ";
    }
    for(var j=i; j>=1; j--){
        x += "*"+"   ";
    }
    console.log(x);
    x = "";
}
console.log("======================================") 