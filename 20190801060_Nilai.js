var inkey = require('readline-sync')

var nilai = parseInt(inkey.question("Masukan Nilai : "));

if (nilai >= 81){
    console.log("Nilai A");
}

else if ((nilai >= 70) && (nilai <= 80)){
    console.log("Nilai B");
}

else if ((nilai >= 60) && (nilai <= 69)){
    console.log("Nilai C");
}

else if ((nilai >= 50) && (nilai <= 59)){
    console.log("Nilai D");
}

else {
    console.log("Nilai E");
}