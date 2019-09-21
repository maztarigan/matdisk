var val = require('readline-sync');

var a = parseInt(val.question("Masukan Nilai     : "));

if (a > 85) {
    console.log ("A");
}

if ((a > 70) && (a < 86)) {
    console.log ("B");
}

if ((a > 60) && ( a < 71)) {
    console.log("C");
}

if ((a > 50) && (a < 61)) {
    console.log("D");
}

if (a < 51) {
    console.log("E")
}