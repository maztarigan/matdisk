var input = require("readline-sync")

var usia = input.questionInt("Masukan Usia : ")


switch(usia){
    case 16:
    case 17:
    case 18:
        console.log("SMA")
        break;
    case 13:
    case 14:
    case 15:
        console.log("SMP")
        break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        console.log("SD")
        break;
    case 5:
    case 6:
        console.log("TK")
        break;
    case 3:
    case 4:
        console.log("PG")
        break;
}