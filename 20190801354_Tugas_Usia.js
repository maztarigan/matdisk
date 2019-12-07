console.log("HELLO WORLD :)");
console.log("Tugas Menghitung Usia");
console.log(" Nama : Androw Ragilson ");

var NOW = new Date();

var SISWA =[
{"Nama":"AL     ",      "ULTAH":new Date('1997-02-19')},
{"Nama":"AR     ",       "ULTAH":new Date('1997-10-28')},
{"Nama":"ANDRI  ",    "ULTAH":new Date('2000-02-29')},
{"Nama":"ANRIAN ",   "ULTAH":new Date('1999-10-29')},
{"Nama":"DIMS   ",     "ULTAH":new Date('2000-06-21')},
{"Nama":"TIARA  ",    "ULTAH":new Date('2001-03-06')},
{"Nama":"NIA    ",      "ULTAH":new Date('2001-12-14')},
{"Nama":"KRESNA ",   "ULTAH":new Date('2000-11-29')},
{"Nama":"LZ     ",       "ULTAH":new Date('1996-06-26')},
{"Nama":"SUTNA  ",    "ULTAH":new Date('1998-12-24')},
{"Nama":"FIKRY  ",    "ULTAH":new Date('1997-05-17')},
{"Nama":"JHORDY ",   "ULTAH":new Date('2001-11-15')},
{"Nama":"RAIHAN ",   "ULTAH":new Date('2000-05-01')},
{"Nama":"JAWIR  ",    "ULTAH":new Date('2001-03-01')},
{"Nama":"SINDY  ",    "ULTAH":new Date('2001-06-30')}];

for(i=0; i<SISWA.length; i++) {      

    BIRTHDAY = SISWA[i].ULTAH;             

    var diffDays = parseInt((NOW.getYear() - BIRTHDAY.getYear()));

    console.log(SISWA[i].Nama + " Saat ini berusia  " + diffDays + " Tahun");  

}