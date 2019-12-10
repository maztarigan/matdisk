  
var key = require('readline-sync')
var masukanusia = parseInt(key.question('Masukkan usia : '))

var usia = [25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65]
var keanggotaan = [1,0.95,0.9,0.85,0.8,0.75,0.7,0.65,0.6,0.55,0.5,1,0.95,0.9,0.85,0.8,0.75,0.7,0.65,0.6,0.55,0.5,1,0.95,0.9,0.85,0.8,0.75,0.7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]


for (var i=0;i<usia.length;i++) {
    if (masukanusia == usia[i]) {
        if (25 <= usia[i] && usia[i] < 35 ) {
            console.log('Anda Muda '+parseInt(keanggotaan[i]*100)+' %')
        } else if (35 <= usia[i] && usia[i] < 45){
            console.log('Anda Setengah Baya '+parseInt(keanggotaan[i]*100)+' %')
        } else if (45 <= usia[i]) {
            console.log('Anda Tua '+parseInt(keanggotaan[i]*100)+' %')
        } else {
            console.log('anda Terlalu Muda atau Terlalu Tua!')
        }
    }
}