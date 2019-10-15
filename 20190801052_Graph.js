var key = require('readline-sync')

console.log ("-=-=-=-=-=Titik A=-=-=-=-=-");
var a = []
    a.push(parseInt(key.question("Masukkan Jarak Pertama: " )))
    a.push(parseInt(key.question("Masukkan Jarak Kedua  : " )))
    a.push(parseInt(key.question("Masukkan Jarak Ketiga : " )))

console.log ("-=-=-=-=-=Titik B=-=-=-=-=-");
var b = []
    b.push(parseInt(key.question("Masukkan Jarak Pertama: "  )))
    b.push(parseInt(key.question("Masukkan Jarak Kedua  : "  )))
    b.push(parseInt(key.question("Masukkan Jarak Ketiga : "  )))

var jalur_a = a[0] + a[1] + a[2] 
var jalur_b = b[0] + b[1] + b[2]

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-")
if (jalur_a>jalur_b){
    console.log("Jalur Terpanjang : " + jalur_a + " Km")
    console.log("Jalur Terpendek  : " + jalur_b + " Km")
} else{
    console.log("Jalur Terpanjang : " + jalur_b + " Km")
    console.log("Jalur Terpendek  : " + jalur_a + " Km")
} 
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-")