var Inkey = require('readline-sync');
var a = parseInt(Inkey.question("Masukkan Nilai a : "));
var l = "";
var D = "";
console.log("Diamond Prototype");
for(var D=a; D>0; D--){
    for(var i=1; i<=D; i++){
        l += "  ";
    }
    for(var Di=a; Di>D; Di--){
        l += "*"+"   ";
    }
    console.log(l);
    l= "";
}
//var l = '';
var l = "";
for(var i=a; i>=1; i--){
    for(var k=a; k>i; k--){
        l += "  ";
    }
    for(var j=i; j>=1; j--){
        l += "*"+"   ";
    }
    console.log(l);
    l = "";
}
