var keyboard = require('readline-sync');
var umur = parseInt(keyboard.question('umur : '));

switch(umur){
    case umur =>3 : case umur  <=4 : 
        console.log("Jenjang PG");
    break;
    case umur =>5 : case umur <=6 :
        console.log("Jenjang TK");
    break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:    
        console.log("Jenjang SD");
    break;
    case 13:
    case 14:
    case 15:
        console.log("Jenjang SMP");
    break;
    case 16:
    case 17:
    case 18:
        console.log("Jenjang SMA");
    break;
}