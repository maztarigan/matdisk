var keyboard = require('readline-sync');

var J = parseInt(keyboard.question(" Masukan USia : "));

if ((J >= 3) && (J <=4)){
    console.log("Jenjang PG");
}else if ((J >=5) && (J <=6)){
    console.log("Jenjang TK");
}else if ((J >=7) && (J <= 12)){
    console.log("Jenjang SD");
}else if ((J >=13) && (J <= 15)){
    console.log("Jenjang SMP");
}else if ((J >=16) && (J <= 18)){
    console.log("Jenjang SMA");
}