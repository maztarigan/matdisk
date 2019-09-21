var val = require('readline-sync');

var a = parseInt(val.question("Masukan Nilai     : "));

if (a > 85) {
    console.log ("A");
}else if ((a > 70) && (a < 86)) {
    console.log ("B");
}else if ((a > 60) && ( a < 71)) {
    console.log("C");
}else if ((a > 50) && (a < 61)) {
    console.log("D");
}else if (a < 51) {
    console.log("E");
}
