var baca=require('readline-sync');

var a=parseInt(baca.question("Masukkan Usia : "));

if ((a>=3) && (a<=4)){
    console.log("PG");
}else if ((a>=5) && (a<=6)){
    console.log("TK");
}else if ((a>=7) && (a<=12)){
    console.log("SD");
}else if ((a>=13) && (a<=15)){
    console.log("SMP");
}else if ((a>=16) && (a<=18)){
    console.log("SMA");
}