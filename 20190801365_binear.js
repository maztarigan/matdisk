var bacakeyboard = require("readline-sync")

var Desimas = parseInt (bacakeyboard.question("Masukan Nilai Desiman : "))
var Octa    = parseInt (bacakeyboard.question("Masukkan Nilai Octa : "))
var Hexa    = parseInt (bacakeyboard.question("Masukkan Nilai Hexa : "))


    var Binear_1 = (Desimas.toString(2));
    var Binear_2 = (Octa.toString(8));
    var Bienar_3 = (Hexa.toString(16));


console.log("Hasil Desimal : "+Binear_1)
console.log("Hasil Octa :"+Binear_2)
console.log("Hasil Hexa :"+Bienar_3)