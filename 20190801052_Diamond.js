var key, n
key = require('readline-sync')
n   = parseInt(key.question("Masukkan Nilai = "))

    var x = '';
    for(var i=n; i>=1; i--){
        for(var spasi=i; spasi>=1; spasi--){
            x += " ";
        }
        for(var bintang=n; bintang>=i; bintang--){
            x += "*"+" ";
        }
        console.log(x);
        x = "";
    }
    var x = '';
    for(var i=n-1; i>=1; i--){
        for(var spasi=n; spasi>=i; spasi--){
            x += " ";
        }
        for(var bintang=i; bintang>=1; bintang--){
            x += "*"+" ";
        }
        console.log(x);
        x = "";
    }