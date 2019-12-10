var masukkan = require('readline-sync')
var usiaMasukkan = parseInt(masukkan.question('Masukkan usia : '))

var usia = [25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65]
var keanggotaan = [1,0.95,0.9,0.85,0.8,0.75,0.7,0.65,0.6,0.55,0.5,1,0.95,0.9,0.85,0.8,0.75,0.7,0.65,0.6,0.55,0.5,1,0.95,0.9,0.85,0.8,0.75,0.7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
/*
var setengahBaya = [[36,1],[37,0.95],[38,0.9],[39,0.85],[40,0.8],[41,0.75],[42,0.7],[43.0.65],[44,0.6],[45,0.55],[46,0.5]
var tua = [[46,0.1],[47,0.95],[48,0.9],[49,0.85],[50,0.8],[55,0.75],[56,0.7],[57,0.65],[58,0.6],[59,0.55],[60,0.5],[64,0.5],[65,0.5]
*/
for (var i=0;i<usia.length;i++) {
    if (usiaMasukkan == usia[i]) {
        if (25 <= usia[i] && usia[i] < 35 ) {
            console.log('Anda muda '+parseInt(keanggotaan[i]*100)+' %')
        } else if (35 <= usia[i] && usia[i] < 45){
            console.log('Anda setengah baya '+parseInt(keanggotaan[i]*100)+' %')
        } else if (45 <= usia[i]) {
            console.log('Anda tua '+parseInt(keanggotaan[i]*100)+' %')
        } else {
            console.log('anda terlalu muda atau terlalu tua!')
        }
    }
}