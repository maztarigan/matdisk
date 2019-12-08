console.log("MENGHITUNG USIA MANUSIA");
var brith = new Date();

var a =
    [{"Name":"Alfian    ","brith":new Date('1997-12-19')},
    {"Name":"Androw     ","brith":new Date('1997-10-28')},
    {"Name":"Andri      ","brith":new Date('2000-02-29')},
    {"Name":"Anrian     ","brith":new Date('1999-10-29')},
    {"Name":"Dimas      ","brith":new Date('2000-06-21')},
    {"Name":"Tiara      ","brith":new Date('2001-03-06')},
    {"Name":"Nia        ","brith":new Date('2001-02-14')},
    {"Name":"Kresna     ","brith":new Date('2000-11-29')},
    {"Name":"Lorenzo    ","brith":new Date('1996-06-26')},
    {"Name":"Sutna      ","brith":new Date('1998-12-24')},
    {"Name":"Fikry      ","brith":new Date('1997-05-17')},
    {"Name":"Jhordy     ","brith":new Date('2001-11-15')},
    {"Name":"Raihan     ","brith":new Date('2000-05-01')},
    {"Name":"Ilham      ","brith":new Date('2000-01-03')},
    {"Name":"Sindy      ","brith":new Date('2001-06-30')}];

   for(i=0; i<a.length; i++) {      
        lahir = a[i].brith;             
        var diffDays = parseInt((brith.getYear() - lahir.getYear()));
        console.log(a[i].Name + " ( " + diffDays + " TAHUN )");                                       
     }
console.log(brith);