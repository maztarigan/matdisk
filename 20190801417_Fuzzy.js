console.log ("==============================================")
console.log ("Mencari seberapa persen tingkat usia seseorang")
console.log (" ")

var input = require ('readline-sync')
var umur = parseInt (input.question ("Masukkan umur seseorang : "))

if (umur <= 45 && umur >= 25) {
    var perhitungan = 0.1 * 0.5 * (umur-25)
    console.log ("Orang tersebut termasuk Muda = " + (1-perhitungan) * 100 + "% \n" + "Orang tersebut termasuk Separuh baya = " + perhitungan * 100 + "%")
}else if (umur <= 65 && umur >= 45 ) {
    var perhitungan = 0.1 * 0.5 *(umur-45)
    console.log ("Orang tersebut termasuk Tua = " + perhitungan * 100 + "% \n" + "Orang tersebut termasuk Separuh baya = " + (1-perhitungan) * 100 + "%")
}

console.log (" ")
console.log ("Terima Kasih")
console.log ("==============================================")