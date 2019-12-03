console.log ("Mencari Data Dengan Menginput Jarak")

var key = require('readline-sync')

var jarak = parseFloat(key.question("Input Jarak:" ))

var data_mhs = [    ["Fani",18,29] , ["Firlan",7,15] , ["Tomy",16,35] , ["Magfur",6,10] , ["Jeje",10,25] , ["Kevin",2,5] , ["Andri",8,22] , ["Syayid",18,32] , ["Latif",18,35] 
            ,   ["Thoriq",7,17] ,   ["Andre",30,90] , ["Unggul",16,45] , ["Micko",1,15] , ["Mansur",9,21] ,["Juan",16,21.8] , ["Fadhly",12,25] , ["Rob",1,3]
            ,   ["Indra",14,45] , ["Dallas",1,2] , ["Diar",4,11] , ["Chandra",17,45] , ["Dana",2.5,15] , ["Vika",6,20] , ["Dimas",15,33] , ["Dimas",1,8] , ["Sachrur",16,31]  ]


for(var i=0 ; i<data_mhs.length; i++){
    if(data_mhs[i][1] == jarak){
        console.log("Nama  : "+ data_mhs[i][0])
        console.log("Jarak : "+ data_mhs[i][1]+"km")
        console.log("Waktu : "+ data_mhs[i][2]+"menit")
    break;
    }
}

