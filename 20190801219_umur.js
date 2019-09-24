var keyboard = require ('readline-sync');
var umur = parseInt(keyboard.question("Masukan Umur:"));

if ((umur >= 3) && (umur <= 4)){
    console.log ("PG")
}else if ((umur >= 5) && (umur <= 6)){
    console.log ("TK")
}
else if ((umur >= 7) && (umur <= 12)){
    console.log("SD")
}
else if ((umur >= 13) && (umur <= 15)){
    console.log ("SMP")
}
else if ((umur >= 16) && (umur <= 18)){
    console.log("SMA")
}
