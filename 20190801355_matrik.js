var input = require("readline-sync")

var a_b1k1 = input.questionInt("Masukan Jarak A pertama : ")
var a_b1k2 = input.questionInt("Masukan Waktu A pertama : ")

var a_b2k1 = input.questionInt("Masukan Jarak A kedua : ")
var a_b2k2 = input.questionInt("Masukan Waktu A kedua : ")

var a_b3k1 = input.questionInt("Masukan Jarak A ketiga : ")
var a_b3k2 = input.questionInt("Masukan Waktu A ketiga : ")

var b_b1k1 = input.questionInt("Masukan Jarak B pertama : ")
var b_b1k2 = input.questionInt("Masukan Waktu B pertama : ")

var b_b2k1 = input.questionInt("Masukan Jarak B kedua : ")
var b_b2k2 = input.questionInt("Masukan Waktu B kedua : ")

var b_b3k1 = input.questionInt("Masukan Jarak B ketiga : ")
var b_b3k2 = input.questionInt("Masukan Waktu B ketiga : ")

var jalurA = [[a_b1k1,a_b1k2],[a_b2k1,a_b2k2],[a_b3k1,a_b3k2]]
var jalurB = [[b_b1k1,b_b1k2],[b_b2k1,b_b2k2],[b_b3k1,b_b3k2]]

var jarakA = jalurA[0,0]+jalurA[1,0]+jalurA[2,0]
var jarakB = jalurB[0,0]+jalurB[1,0]+jalurB[2,0]

var waktuA = jalurA[0,1]+jalurA[1,1]+jalurA[2,1]
var waktuB = jalurB[0,1]+jalurB[1,1]+jalurB[2,1]

if(jarakA < jarakB){
    console.log("Jarak A lebih dekat di bandingkan Jarak B");
    console.log("Jarak B lebih jauh di bandingkan Jarak A");
}else{
    console.log("Jarak B lebih dekat di bandingkan Jarak A");
    console.log("Jarak A lebih jauh di bandingkan Jarak B");
}

if(waktuA < waktuB){
    console.log("Waktu A lebih cepat di bandingkan Waktu B");
    console.log("Waktu B lebih lama di bandingkan Waktu A");
}else{
    console.log("Waktu B lebih cepat di bandingkan Waktu A");
    console.log("Waktu A lebih lama di bandingkan Waktu B");
}