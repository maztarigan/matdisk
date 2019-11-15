var key = require("readline-sync");
var x = " "
var y = parseInt(key.question('Input Angka : '));
var z = '';
for(var z=y; z>0; z--){
    for(var i=1; i<=z; i++){
        x += "  ";
    }
    for(var b=y; b>z; b--){
        x += "*"+"   ";
    }
    console.log(x);
    x= "";
}
var x = '';
for(var i=y; i>=1; i--){
    for(var k=y; k>i; k--){
        x += "  ";
    }
    for(var r=i; r>=1; r--){
        x += "*"+"   ";
    }
    console.log(x);
    x = "";
}
console.log("");
