console.log("MENGHITUNG USIA MANUSIA");
var today = new Date();

var mhs =
    [{"Name":"Alfian    ","birth":new Date('1997-12-19')},
    {"Name":"Androw     ","birth":new Date('1997-10-28')},
    {"Name":"Andri      ","birth":new Date('2000-02-29')},
    {"Name":"Anrian     ","birth":new Date('1999-10-29')},
    {"Name":"Dimas      ","birth":new Date('2000-06-21')},
    {"Name":"Tiara      ","birth":new Date('2001-03-06')},
    {"Name":"Nia        ","birth":new Date('2001-02-14')},
    {"Name":"Kresna     ","birth":new Date('2000-11-29')},
    {"Name":"Lorenzo    ","birth":new Date('1996-06-26')},
    {"Name":"Sutna      ","birth":new Date('1998-12-24')},
    {"Name":"Fikry      ","birth":new Date('1997-05-17')},
    {"Name":"Jhordy     ","birth":new Date('2001-11-15')},
    {"Name":"Raihan     ","birth":new Date('2000-05-01')},
    {"Name":"Ilham      ","birth":new Date('2000-01-03')},
    {"Name":"Sindy      ","birth":new Date('2001-06-30')}];

mhs.sort(function(a,b){
     return a.birth -  b.birth
})

   for(i=0; i<mhs.length; i++) {      
        lahir = mhs[i].birth;             
        var diffDays = parseInt((today.getYear() - lahir.getYear()));
        console.log(lahir);
        console.log(mhs[i].Name + " ( " + diffDays + " TAHUN )");                                       
     }