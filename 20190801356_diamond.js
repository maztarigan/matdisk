var key = require("readline-sync");
var y = ""
var n = parseInt(key.question('Input Nilai : '));
var a = '';
for(var a=n; a>0; a--){
    for(var i=1; i<=a; i++){
        y += "  ";
    }
    for(var a1=n; a1>a; a1--){
        y += "*"+"   ";
    }
    console.log(y);
    y= "";
}
var y = '';
for(var i=n; i>=1; i--){
    for(var k=n; k>i; k--){
        y += "  ";
    }
    for(var j=i; j>=1; j--){
        y += "*"+"   ";
    }
    console.log(y);
    y = "";
}
