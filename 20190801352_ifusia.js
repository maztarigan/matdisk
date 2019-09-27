console.log("SELAMAT DATANG")
var key = require('readline-sync');
var usia = parseInt(key.question("masukkan usia anda : "));
if((usia>=3)&&(usia<=4)){
    console.log("anda di tingkat PG");
}
if((usia>=5)&&(usia<=6)){
    console.log("anda di tingkat TK");
}
if((usia>=7)&&(usia<=12)){
    console.log("anda di tingkat SD");
}
if((usia>=13)&&(usia<=15)){
    console.log("anda di tingkat SMP");
}
if((usia>=16)&&(usia<=18)){
    console.log("anda di tingkat SMA");
}