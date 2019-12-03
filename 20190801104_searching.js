console.log("mencari nama mahasiswa berdasarkan jarak yang ditempuh dari rumah ke kampus")
var mhs = [["Fani",18,29],["Firlan",7,15],["Tomy",16,35],["Magfur",6,10],["Jeje",10,25],["Kevin",2,5],["Andri",8,22],["Syayid",18,32],
          ["Latif",18,35],["Thoriq",6.2,17],["Andre",30,90],["Unggul",16,45],["Micko",1,15],["Mansur",8.4,21],["Levy",15.8,21.8],
          ["Fadhly",12,25], ["Rob",1,3],["Indra",14,45],["Dallas",0.5,2],["Diar",4,11],["Chandra",17,45],["Dana",2.5,15],
          ["Vika",5,20],["Dimas",15,33],["Danang",1,5],["Sachrur",16,31]]
var key = require('readline-sync')          
var n = parseFloat(key.question('masukkan jarak '))
for (var i = 0;i<mhs.length;i++) {
    if (mhs[i][1]==n) {
        console.log('mahasiswa dengan jarak sejauh itu bernama '+mhs[i][0])
        console.log('dengan waktu yang ditempuh selama '+mhs[i][2]+'m')
    }
}
