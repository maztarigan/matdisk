console.log("Sort Usia");
console.log("=====================================")
var today = new Date();

var mhs =
    [{"Name":"Alfian","Ulta":new Date('1997-12-19')},
    {"Name":"Androw","Ulta":new Date('1997-10-28')},
    {"Name":"Andri","Ulta":new Date('2000-02-29')},
    {"Name":"Anrian","Ulta":new Date('1999-10-29')},
    {"Name":"Dimas","Ulta":new Date('2000-06-21')},
    {"Name":"Tiara","Ulta":new Date('2001-03-06')},
    {"Name":"Nia","Ulta":new Date('2001-02-14')},
    {"Name":"Kresna","Ulta":new Date('2000-11-29')},
    {"Name":"Lorenzo","Ulta":new Date('1996-06-26')},
    {"Name":"Sutna","Ulta":new Date('1998-12-24')},
    {"Name":"Fikry","Ulta":new Date('1997-05-17')},
    {"Name":"Jhordy","Ulta":new Date('2001-11-15')},
    {"Name":"Raihan","Ulta":new Date('2000-05-01')},
    {"Name":"Ilham","Ulta":new Date('2000-01-03')},
    {"Name":"Sindy","Ulta":new Date('2001-06-30')}];

    mhs.sort(function(a,b){
     return a.Ulta - b.Ulta
   })

   for(i=0; i<mhs.length; i++) {      
        birthday = mhs[i].Ulta;             
        var diffDays = parseInt((today.getYear() - birthday.getYear()));
        console.log(mhs[i].Name + " saat ini berusia " + diffDays + " tahun");                                       
     }