var key, n
key = require('readline-sync')
n   = parseInt(key.question("Masukkan n = "))

    var x = '';
    for(var i=n; i>=1; i--){
        for(var k=i; k>=1; k--){
            x += " ";
        }
        for(var j=n; j>=i; j--){
            x += "*"+" ";
        }
        console.log(x);
        x = "";
    }
    for(var i=n-1; i>=1; i--){
        for(var k=n; k>=i; k--){
            x += " ";
        }
        for(var j=i; j>=1; j--){
            x += "*"+" ";
        }
        console.log(x);
        x = "";
    }