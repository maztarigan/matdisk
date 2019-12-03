var input=require('readline-sync')
var input_jarak=parseFloat(input.question("Masukkan Jarak Yang Ingin Dicari : "))

var mhs=[["Fani",18,29],["Firlan",7,15],["Tomy",26,35],["Magfur",6,10],["Natanael",10,25],
["Kevin",2,5],["Andri",8,22],["Syayid",18,32],["Latif",18,35],["Thoriq",6.2,27],["Andre",30,90],
["Unggul",16,45],["Micko",1,15],["Mansur",8.4,21],["Levy",15.8,21.8],["Fadhly",12,25],["Rob",1,3],
["Indra",14,45],["Dallas",0.5,2],["Diar",3.9,11],["Chandra",17,45],["Dana",2.5,15],["Vika",5.1,20],
["Dimas",15,33],["Danang",1,5],["Sachrur",16,31],["Aminah",3,7]]

for (var i=0; i < mhs.length; i++){
  if(mhs[i][1]==input_jarak){
    console.log("Nama : "+mhs[i][0])
    console.log("Jarak : "+mhs[i][1])
    console.log("Waktu : "+mhs[i][2])
  }else{
    console.log("Data Mahasiswa Tidak Ada")
    break;
  }
}