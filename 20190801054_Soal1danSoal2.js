console.log("POHON FAKTORIAL");

console.log("==============");
console.log("SOAL NOMOR 1 ");
console.log("==============");
var key, n
key = require('readline-sync')
n   = parseInt(key.question("Masukkan n! = "))

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







console.log("POHON FAKTORIAL");

console.log("==============");
console.log("SOAL NOMOR 2 ");
console.log("==============");

var key = require('readline-sync');

var y = parseInt(key.question('Input Angka : '));


            let str = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < y; j++){
                    if(i + j >= y && i <= j){
                        str = str.concat("*");
                    }else{
                        str = str.concat(" ")
                    }
                }
                str = str.concat("\n")
            }
            console.log(str)