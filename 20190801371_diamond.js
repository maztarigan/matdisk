var key = require("readline-sync");
var x = ""
var n = parseInt(key.question("banyaknya nilai n : "));

var a = "";
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
var x = "";
for(var i=n; i>=1; i--){
    for(var j=n; j>i; j--){
        x += "  ";
    }
    for(var b=i; b>=1; b--){
        x += "*"+"   ";
    }
    console.log(x);
    x = "";
}
