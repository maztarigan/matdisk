console.log("SELAMAT DATANG");
var key = require('readline-sync');
var umur = parseInt(key.question("Masukkan Umur : "));

switch(true) {
case umur=>3: case umur<=4:
    console.log("Kamu di Tingkatan Poly Group");
    break;
case umur=>5: case umur<=6:
    console.log("Kamu di Tingkatan TK");
    break;
case umur=>7: case umur<=12:
    console.log("Kamu di Tingkatan SD");
    break;
case umur=>13: case umur<=15:
    console.log("Kamu di Tingkatan SMP");
    break;
case umur=>16: case umur<=18:
    console.log("Kamu di Tingkatan SMA");
    break;
}
console.log("TERIMAKASIH");