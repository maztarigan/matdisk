var key = require('readline-sync');
var umur = parseInt(key.question('umur :'));

var Umur_M = [[25,1] , [26,0.95] , [27,0.9], [28,0.85], [29,0.8], [30,0.75], [31,0.7], [32,0.65], [33,0.6], [34,0.55], [35,0.5], [36,0.45], [37,0.4], [38,0.35], [39,0.3], [40,0.25], [41,0.2], [42,0.15], [43,0.1], [44,0.05,] [45,0]]
var Umur_SB =  [[25,0] , [26,0.05] , [27,0.1], [28,0.15], [29,0.2], [30,0.25], [31,0.3], [32,0.35], [33,0.4], [34,0.45], [35,0.5], [36,0.55], [37,0.6], [38,0.65], [39,0.7], [40,0.75], [41,0.8], [42,0.85], [43,0.9], [44,0.95,] [45,1]]

var jarak_jalur_A = jalur_A[0][0]+jalur_A[1][0]+jalur_A[2][0]
var jarak_jalur_B = jalur_B[0][0]+jalur_B[1][0]+jalur_B[2][0]

var waktu_tempuh_jalur_A = jalur_A[0][1]+jalur_A[1][1]+jalur_A[2][1]
var waktu_tempuh_jalur_B = jalur_B[0][1]+jalur_B[1][1]+jalur_B[2][1]

if (jarak_jalur_A > jarak_jalur_B && waktu_tempuh_jalur_A > waktu_tempuh_jalur_B){
    console.log("```````````````````````````````````")
    console.log("jarak terpanjang : "+ jarak_jalur_A+"KM")
    console.log("waktu tempuh tercepat : "+ waktu_tempuh_jalur_A +"Menit")
    console.log("jarak terdekat : "+ jarak_jalur_B+"KM")
    console.log("waktu tempuh terlama : "+ waktu_tempuh_jalur_B +"Menit")
    console.log("```````````````````````````````````")
}
else{
        console.log("```````````````````````````````````")
        console.log("jarak terpanjang : "+ jarak_jalur_B+"KM")
        console.log("waktu tempuh tercepat : "+ waktu_tempuh_jalur_B +"Menit")
        console.log("jarak terdekat : "+ jarak_jalur_A+"KM")
        console.log("waktu tempuh terlama : "+ waktu_tempuh_jalur_A +"Menit")
        console.log("```````````````````````````````````")
}
