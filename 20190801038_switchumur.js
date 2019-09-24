console.log("umur");

var inputkeyboard = require('readline-sync');
var umur = parseInt(inputkeyboard.question("masukkan umur: "));

switch(true){
    case umur=>3:
    case umur<=4:
            console.log("PG");
            break;
    case umur=>5:
    case umur<=6:
            console.log("TK");
            break;
    case umur=>7:
    case umur<=12:
            console.log("SD");
            break;
    case umur=>13:
    case umur<=15:
            console.log("SMP");
            break;
    case umur=>16:
    case umur<=18:
            console.log("SMA");
            break;
}