var key = require("readline-sync");
var x = ""
var n = parseInt(key.question('Input Nilai : '));

console.log("--------------SOAL 1 ---------------")
var x = '';
for(var i=n; i<=1; i--){
for(var j=i; j<=1; j--){
    x += "*"+" ";
}
    for(var k=n; k<=i; k--){
        x += " ";
    }
    
    console.log(x);
    x= ""
}
console.log("--------------------------------------")