console.log("mencari jarak terjauh dan waktu tempuh tercepat kelas matdisk sesi 2 esa unggul")
var mhs = [["Fani",18,29],["Firlan",7,15],["Tomy",16,35],["Magfur",6,10],["Jeje",10,25],["Kevin",2,5],["Andri",8,22],["Syayid",18,32],
          ["Latif",18,35],["Thoriq",6.2,17],["Andre",30,90],["Unggul",16,45],["Micko",1,15],["Mansur",8.4,21],["Levy",15.8,21.8],
          ["Fadhly",12,25], ["Rob",1,3],["Indra",14,45],["Dallas",0.5,2],["Diar",3.9,11],["Chandra",17,45],["Dana",2.5,15],
          ["Vika",5.1,20],["Dimas",15,33],["Danang",1,5],["Sachrur",16,31]]

var jarak_terjauh = 0
var jarak_terdekat = mhs[0][1]
var waktu_terlama = 0
var waktu_tercepat = mhs[0][2]
var bag_jarak_terjauh = 0
var bag_jarak_terdekat = 0
var bag_waktu_terlama = 0
var bag_waktu_tercepat = 0

for(i=0; i<mhs.length; i++) {
  if(jarak_terjauh < mhs[i][1]) {
      jarak_terjauh = mhs[i][1]
      bag_jarak_terjauh= i
  }else if(jarak_terdekat > mhs[i][1]) {
      jarak_terdekat = mhs[i][1]
      bag_jarak_terdekat = i
  }
}
console.log(mhs[bag_jarak_terjauh][0]+" adalah mahasiswa terjauh ke kampus yang berjarak "+jarak_terjauh+" km" + " dari rumah");
for(i=0; i<mhs.length; i++) {
  if(waktu_terlama < mhs[i][2]) {
      waktu_terlama = mhs[i][2]
      bag_waktu_terlama = i
  }else if(waktu_tercepat > mhs[i][2]){
      waktu_tercepat = mhs[i][2]
      bag_waktu_tercepat = i
  }
}
console.log(mhs[bag_waktu_tercepat][0]+" adalah mahasiswa tercepat ke kempus dengan waktu tempuh "+waktu_tercepat+" menit" + " dari rumah")




