console.log("umur");


var inputkeyboard = require('readline-sync');

var umur = parseInt(inputkeyboard.question("masukkan umur: "));

if ((umur > 2)&&(umur < 5)){
    console.log("ANDA DI TINGKAT PG");
}else if ((umur > 4)&&(umur < 7)){
    console.log("ANDA DI TINGKAT TK");
}else if ((umur > 6)&&(umur < 13)){
    console.log("ANDA DI TINGKAT SD");
}else if ((umur > 12)&&(umur < 16)){
    console.log("ANDA DI TINGKAT SMP");
}else if ((umur > 15)&&(umur < 19))
{
    console.log("ANDA DI TINGKAT SMA");
}