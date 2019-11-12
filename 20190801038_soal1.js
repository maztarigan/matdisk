var inputkeyboard, n
inputkeyboard = require('readline-sync')
n   = parseInt(inputkeyboard.question("Masukkan n = "))

    var x = '';
    for(var i=n; i>=1; i--){
        for(var k=n; k>=i; k--){
            x += " ";
        }
        for(var j=i; j>=1; j--){
            x += "*"+" ";
        }
        console.log(x);
        x = "";
    }