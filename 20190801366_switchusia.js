var key = require ('readline-sync');
var usia = parseInt(key.question("Masukkan Usia : "));

switch(true){
        case usia > 2 && usia < 5:
            console.log("PG")
            break;
        case usia > 4 && usia < 7:
            console.log("TK")
            break;
        case usia > 6 && usia < 13:
            console.log("SD")
            break;
        case usia > 12 && usia < 16:
            console.log("SMP")
            break;
        case usia > 15 && usia <19 :
            console.log("SMA")
            break;
}