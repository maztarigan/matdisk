console.log("Menghitung Usia");
var hari_ini = newDate();

var siswa =
    [{"Name":"Alfian","ulang_tahunku":new Date('1997-02-19')},
    {"Name":"Androw","ulang_tahunku":new Date('1997-10-28')},
    {"Name":"Andri","ulang_tahunku":new Date('2000-02-29')},
    {"Name":"Anrian","ulang_tahunku":new Date('1999-10-29')},
    {"Name":"Dimas","ulang_tahunku":new Date('2000-06-21')},
    {"Name":"Tiara","ulang_tahunku":new Date('2001-03-06')},
    {"Name":"Nia","ulang_tahunku":new Date('2001-12-14')},
    {"Name":'Kresna',"ulang_tahunku":new Date('2000-11-29')},
    {"Name":"Lorenzo","ulang_tahunku":new Date('1996-06-26')},
    {"Name":"Sutna","ulang_tahunku":new Date('1998-12-24')},
    {"Name":"Fikry","ulang_tahunku":new Date('1997-05-17')},
    {"Name":"Jhordy","ulang_tahunku":new Date('2001-11-15')},
    {"Name":"Raihan","ulang_tahunku":new Date('2000-05-01')},
    {"Name":"Ilham","ulang_tahunku":new Date('2001-03-01')},
    {"Name":"Sindy","ulang_tahunku":new Date('2001-06-30')}];

   for(i=0; i<siswa.length; i++) {      
        lahiran = siswa[i].ulang_tahunku;             
        var diffDays = parseInt((hari_inigetYear() - lahirangetYear()));
        console.log(siswa[i].Name + " saat ini berusia " + diffDays + " tahun");                                       
     }
console.log(hari_ini); 
