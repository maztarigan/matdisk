var inputkeyboard = require ('readline-sync');
var umur =parseInt (inputkeyboard.question("masukkan umur:"));
if ((umur>=3)&&(umur<=4)){
console.log("Play Group");
}else if ((umur>=5)&&(umur<=6)){
console.log("Taman Kanak-kanak");
}else if ((umur>=7)&&(umur<=12)){
console.log("Sekolah Dasar");
}else if ((umur>=13)&&(umur<=15)){
console.log("Sekolah Menengah Pertama");
}else if ((umur>=16)&&(umur<=18)){
console.log("Sekolah Menengah Akhir");
}else if (umur>=19){
console.log("Kuliah atau Kerja");
}