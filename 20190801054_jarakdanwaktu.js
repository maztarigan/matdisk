console.log(" THORIQ NURUL FIKRI ");
console.log(" NIM : 20190801054  ");
console.log("===================================");

var mahasiswa = [
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
]

var max_jarak = 0
var min_jarak = mahasiswa[0][1]
var max_waktu = 0
var min_waktu = mahasiswa[0][2]
var ele_max_jarak = 0
var ele_min_jarak = 0
var ele_max_waktu = 0
var ele_min_waktu = 0

for(i=0; i<mahasiswa.length; i++) {
    if(max_jarak < mahasiswa[i][1]) {
        max_jarak = mahasiswa[i][1]
        ele_max_jarak = i
    }else if(min_jarak > mahasiswa[i][1]) {
        min_jarak = mahasiswa[i][1]
        ele_min_jarak = i
    }
}
for(i=0; i<mahasiswa.length; i++) {
    if(max_waktu < mahasiswa[i][2]) {
        max_waktu = mahasiswa[i][2]
        ele_max_waktu = i
    }else if(min_waktu > mahasiswa[i][2]){
        min_waktu = mahasiswa[i][2]
        ele_min_waktu = i
    }
}
console.log(mahasiswa[ele_min_jarak][0]+" Adalah Mahasiswa dengan Jarak tempuh Terdekat, yaitu > "+min_jarak+" km")
console.log(mahasiswa[ele_max_jarak][0]+" Adalah Mahasiswa Jarak tempuh Terjauh, yaitu > "+max_jarak+" km")

console.log(mahasiswa[ele_min_waktu][0]+" Adalah Mahasiswa Waktu tempuh Tercepat, yaitu > "+min_waktu+" menit")
console.log(mahasiswa[ele_max_waktu][0]+" Adalah Mahasiswa Waktu tempuh Terlama, yaitu > "+max_waktu+" menit")

console.log("===================================");