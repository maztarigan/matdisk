var nama       = ["Fani","Firlan","Tomy","Magfur","Jeje","Kevin","Andri","Syayid","Latif","Thoriq","Andre","Unggul","Micko","Mansur","Levy","Fadhly","Rob","Indra","Dallas","Diar","Chandra","Dana","Vika","Danang","Adul"];
var jarak      = [18,7,16,6,10,2,8,18,18,6.2,30,16,1,8.4,15.8,12,1,14,0.5,3.9,17,2.5,5.1,15,1,16];
var waktu      = [29,15,35,10,25,5,22,32,35,17,90,45,15,21,21.8,25,3,45,2,11,45,15,20,33,5,31];
var max        = Math.max.apply(Math,jarak);
var nama_max   = nama[jarak.indexOf(max)];
var min        = Math.min.apply(Math,waktu);
var nama_min   = nama[waktu.indexOf(min)];
console.log("Jarak Terjauh  Menuju Kampus Adalah [ "+nama_max+"  ] Dengan Jarak : ["+max+"] KiloMeter"); 
console.log("Waktu Tercepat Menuju Kampus Adalah [ "+nama_min+" ] Dengan Waktu : ["+min+" ] Menit"); 
