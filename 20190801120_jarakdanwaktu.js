//FIRLANPRAYOGA
console.log("__________________________")
console.log("| Nama   : Firlan Prayoga|")
console.log("| NIM    : 20190801120   |")
console.log("| Matkul : Matdisk       |")
console.log("|________________________|")
console.log("========================================")
console.log("SOAL :")
console.log("1.Kelas matdisk terdiri dari 26 orang mahasiswa/i. Lalu dosen ingin mengetahui mahasiswa yang jaraknya terjauh serta jaraknya terdekat dari kampus.")
console.log("")
var jarak = [18,7,16,6,10,2,8,18,18,6.2,30,16,1,8.4,15.8,12,1,14,0.5,3.9,16,2.5,5.1,15,1,16];
var waktu = [29,15,35,10,25,5,22,32,35,17,90,45,15,21,21.8,24,3,45,2,11,45,15,20,33,5,31];
var nama = ["Iyay","Firlan","Tomy","Magfur","Jeje","Kevin","Andri","Syayid","Latif","Thoriq","Andre","Unggul",
"Micko","Mansur","Levy","Fadhly","Rob","Indra","Dallas","Diar","Chandra","Dana","Vika","Dimas","Danang","Sachrur"];
var maximal = Math.max.apply(Math,jarak);
var nama_max = nama[jarak.indexOf(maximal)];

var minimal = Math.min.apply(Math,waktu);
var nama_min = nama[waktu.indexOf(minimal)];
console.log("Jarak Terjauh Di Tempuh Oleh " +nama_max+" Sejauh "+maximal+" KM")
console.log("Sedangkan")
console.log("Jarak Terdekat Di Tempuh Oleh " +nama_min+" " +minimal+" Menit")