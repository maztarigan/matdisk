var MHS = [["fani",18,29],["firlan", 7,15],["tomy",16,35],["magfur",6,10],["jeje",10,25],["kevin",2,5],["andri",8,22],["syayid",18,32],["latif",18,35],
["thoriq",6.2,17],["andre",30,90],["unggul",16,45],["micko",1,15],["mansur",8.4,21],["juan",15.8,21.8],["fadhly",12,25],["rob",1,3],["indra",14,45],
["dallas",0.5,2],["diar",3.9,11],["chandra",17,45],["dana",2.5,15],["vika",5.1,20],["dimas",15,33],["danang",1,5],["sachrur",16,31],["Zahra",3,7]]; 
var input = require('readline-sync')
var jarak  = parseFloat(input.question("Masukkan data yang dicari : "));
for(var i=0; i<MHS.length; i++) {
    if(MHS[i][1] == jarak) {
        console.log("Nama : "+MHS[i][0])
        console.log("Jarak : "+MHS[i][1]+" KM")
        console.log("Waktu : "+MHS[i][2]+" Menit")
        break
    }
}