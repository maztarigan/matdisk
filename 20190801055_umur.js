var inputkeyboard = require("readline-sync");

var umur = parseInt(inputkeyboard.question("umur anda"));

if (( umur >= 3 ) && (umur <= 4 )){
    console.log("tingkat playgroup");
}else if (( umur >= 5 ) && (umur <=6)){
    console.log("tingkat TK");
}else if (( umur >= 7 ) && (umur <=12)){
    console.log("tingkat SD");
}else if (( umur >= 13) && (umur <=15)){
    console.log("tingkat SMP");
}else if (( umur >= 16) && (umur <=18)){
    console.log("tingkat SMA");
}else [
    console.log("Tingkat selanjutnya")
]