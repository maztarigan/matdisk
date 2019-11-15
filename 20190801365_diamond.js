var input = require('readline-sync');
var d = "";
var n = parseInt(input.question(" masukan angka : "));


var a = '';
for(var a=n; a>0; a--){
    for(var i=1; i<=a; i++){
        d += "  ";
    }
    for(var a1=n; a1>a; a1--){
        d += "*"+"   ";
    }
    console.log(d);
    d= "";
}
var d = '';
for(var a=n; a>1; a--){
    for(var u=n; u>i; u--){
        d += "  ";
    }
    for(var m=a; m>=1; m--){
        d += "*"+"   ";
    }
    console.log(d);
    d= "";
}