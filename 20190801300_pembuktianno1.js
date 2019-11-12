var key = require("readline-sync")
var x =" "
var n = parseInt(key.question('input nilai : '))

for(var a = n; a>0; a--){
    for(var i= 1; i<=a; i++){
        x += " "
    }
    for(var a1 = n; a1 > a;a1--){
        x += "*"
    }
    for(var a2 =  n-1; a2>a; a2--){
        x += "*"
    }
    console.log(x)
    x= " "
}