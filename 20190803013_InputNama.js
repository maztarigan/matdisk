/* 
Farid Handoyo
Sephia Ananda Putri 
Muhammad Sudirman
Zalzabila Syafa Nurul Arsy
Sendihot Sihole
Diki Anugrah Pratama
Indah Cahyani
Dita Oktavinai
Annatasya Putri Jachika
Henny Prabowo
Iir Humairoh
Dita Chandra Samsiyah
Iva Sanggra Mayola
Ndaru Langgeng Sentosa
Delia Apriani
Muhammad Nurkholish
Noval Liani
Raffa Tsidkenu Prasetya
Danu Faisal Pangestu
Aqila Putri Fajar
*/

var mhs = [
    ["Farid Handoyo",17,30],
    ["Sephia Ananda Putri",8,17],
    ["Muhammad Sudirman",3,18],
    ["Zalzabila Syafa Nurul",14,45],
    ["Sendihot Sihole",7,15],
    ["Diki Anugrah Pratama",12,20],
    ["Indah Cahyani",16,50],
    ["Dita Oktavinai",5,13],
    ["Annatasya Putri Jachika",6,15],
    ["Henny Prabowo",30,60],
    ["Iir Humairoh",8,30],
    ["Dita Chandra Samsiyah",22,40],
    ["Iva Sanggra Mayola",14,45],
    ["Ndaru Langgeng Sentosa",5,13],
    ["Delia Apriani",6,27],
    ["Muhammad Nurkholish",4,10],
    ["Noval Liani",16,50],
    ["Raffa Tsidkenu Prasetya",12,25],
    ["Danu Faisal Pangestu",2,3],
    ["Aqila Putri Fajar",3,7]

]

var key = require('readline-sync')
var nama = key.question('Input Nama : ')

var ketemu = false;
var jarak = mhs[0,1];
var waktu = mhs[0,2];
var no = "";
for(var i=0; i<mhs.length; i++){
    if(mhs[i][0] == nama){
        ketemu = true;
        nama = mhs[i][0]
        jarak  = mhs[i][1]
        waktu  = mhs[i][2]
        no = i;
    }
}
if(ketemu = true){
    console.log(nama," Di Data ",no," Jarak : ",jarak," waktu : ",waktu)
}else{
    console.log("nama Tidak Di Temukan")
}