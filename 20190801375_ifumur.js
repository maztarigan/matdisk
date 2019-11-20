console.log("SELAMAT DATANG")
var key = require('readline-sync');
var umur = parseInt(key.question("Masukkan Umur Anda : "));
if ((umur>=3)&&(umur<=4)){
    console.log("Kamu di Tingkatan Polygroup :)");
}
if ((umur>=5)&&(umur<=6)){
    console.log("Kamu di Tingkatan TK");
}
if ((umur>=7)&&(umur<=12)){
    console.log("Kamu di Tingkatan SD");
}
if ((umur>=13)&&(umur<=15)){
    console.log("Kamu di Tingkatan SMP");
}
if ((umur>=16)&&(umur<=18)){
    console.log("Kamu di Tingkatan SMA");
}
console.log("TERIMAKASIH");