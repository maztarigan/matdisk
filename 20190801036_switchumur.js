var inputkeyboard = require('readline-sync');

var u = parseInt(inputkeyboard.question("masukkan umur :"));

switch (true){
    case u=> 3:
    case u<= 4:
        console.log("tingkat PG");
        break;
    case u=> 5:
    case u<= 6:
        console.log("itngkat TK");
        break;
    case u=> 7:
    case u<= 12:
        console.log("tingkat SD");
        break;
    case u=> 13:
    case u<= 15:
        console.log("tingkat SMP");
        break;
    case u=> 16:
    case u<= 18:
        console.log("tingkat SMA");
        break;
}