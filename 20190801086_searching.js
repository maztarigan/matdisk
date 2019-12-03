var mhs = [
    ["Fani",18,29],
    ["Firlan",7,15],
    ["Tomy",16,35],
    ["Magfur",6,10],
    ["Jeje",10,25],
    ["Kevin",2,5],
    ["Andri",8,22],
    ["Syayid",18,32],
    ["Latif",18,35],
    ["Thoriq",6.2,17],
    ["Andre",30,90],
    ["Unggul",16,45],
    ["Micko",1,15],
    ["Mansur",8.4,21],
    ["Levy",15.8,21.8],
    ["Fadhly",12,25],
    ["Rob",1,3],
    ["Indra",14,45],
    ["Dallas",0.5,2],
    ["Diar",3.9,11],
    ["Chandra",17,45],
    ["Dana",2.5,15],
    ["Vika",5.1,20],
    ["Dimas",15,33],
    ["Danang",1,5],
    ["Sachrur",16,31]
    ["Zahra",3,7]
]

var inkey = require('readline-sync');
var input_jarak = parseInt(inkey.question("masukan berapa jaraknya = "));

for(i=0; i<mhs.length; i++){
    if(mhs[i][1]==input_jarak){
        console.log("jarak Tersebut dimiliki oleh " +mhs[i][0]);
        console.log("Dengan Waktu " +mhs[i][2]+ " Menit");
        console.log("dan Jarak " +mhs[i][1]+ " KM");
        break;
    }
}

console.log("===================================================================")
console.log("creat by : Micko_Tubagas")