console.log("Menghitung Usia");
console.log("");
var today = new Date();

var mahasiswa =
    [{"Name":"Alfian","dob":new Date('1997-02-19')},
    {"Name":"Androw","dob":new Date('1997-10-28')},
    {"Name":"Andri","dob":new Date('2000-02-29')},
    {"Name":"Anrian","dob":new Date('1999-10-29')},
    {"Name":"Dimas","dob":new Date('2000-06-21')},
    {"Name":"Tiara","dob":new Date('2001-03-06')},
    {"Name":"Nia","dob":new Date('2001-12-14')},
    {"Name":"Kresna","dob":new Date('2000-11-29')},
    {"Name":"Lorenzo","dob":new Date('1996-06-26')},
    {"Name":"Sutna","dob":new Date('1998-12-24')},
    {"Name":"Fikry","dob":new Date('1997-05-17')},
    {"Name":"Jhordy","dob":new Date('2001-11-15')},
    {"Name":"Raihan","dob":new Date('2000-05-01')},
    {"Name":"Ilham","dob":new Date('2001-03-01')},
    {"Name":"Sindy","dob":new Date('2001-06-30')}];



    mahasiswa.sort(function(a, b){return a.dob-b.dob});                                       

   for(i=0; i<mahasiswa.length; i++) {      
        lahiran = mahasiswa[i].dob;             
        var diffDays = parseInt((today.getYear() - lahiran.getYear()));
        console.log(mahasiswa[i].Name + " saat ini usianya " + diffDays + " tahun");
        mahasiswa.sort(function(a, b){return a.dob-b.dob});                                       
     }
console.log("")
console.log("Waktu Hari Ini : "+today);