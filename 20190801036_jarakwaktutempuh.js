var jarak = [18,7,16,6,10,2,8,18,18,6.2,30,16,1,8.4,15.8,12,1,14,0.5,3.9,16,2.5,5.1,15,1,16];
var waktu = [29,15,35,10,25,5,22,32,35,17,90,45,15,21,21.8,24,3,45,2,11,45,15,20,33,5,31];
var nama = ["fani","firlan","tomy","magfur","jeje","kevin","andri","syayid","latif","thoriq","andre","unggul",
"micko","mansur","levy","fadhly","rob","indra","dallas","diar","chandra","dana","vika","dimas","danang","sachrur"];

var maximal_jarak = Math.max.apply(Math,jarak);
var nama_jarak = nama[jarak.indexOf(maximal_jarak)];

var minimal_waktu = Math.min.apply(Math,waktu);
var nama_waktu = nama[waktu.indexOf(minimal_waktu)];

console.log("jarak terjauh yaitu " +nama_jarak+ " dengan jarak tempuh " +maximal_jarak+ " KM")
console.log("waktu tercepat yaitu " +nama_waktu+ " dengan waktu tempuh " +minimal_waktu+ " Menit")