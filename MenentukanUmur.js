console.log("Menghitung Umur");
var today = new Date();

var MHS =
    [{"Name":"Alfian","Birthdate":new Date('1997-02-19')},
    {"Name":"Androw","Birthdate":new Date('1997-10-28')},
    {"Name":"Andri","Birthdate":new Date('2000-02-29')},
    {"Name":"Anrian","Birthdate":new Date('1999-10-29')},
    {"Name":"Dimas","Birthdate":new Date('2000-06-21')},
    {"Name":"Tiara","Birthdate":new Date('2001-03-06')},
    {"Name":"Nia","Birthdate":new Date('2001-12-14')},
    {"Name":"Kresna","Birthdate":new Date('2000-11-29')},
    {"Name":"Lorenzo","Birthdate":new Date('1996-06-26')},
    {"Name":"Sutna","Birthdate":new Date('1998-12-24')},
    {"Name":"Fikry","Birthdate":new Date('1997-05-17')},
    {"Name":"Jhordy","Birthdate":new Date('2001-11-15')},
    {"Name":"Raihan","Birthdate":new Date('2000-05-01')},
    {"Name":"Jawir","Birthdate":new Date('2001-03-01')},
    {"Name":"Sindy","Birthdate":new Date('2001-06-30')}];

   for(i=0; i<MHS.length; i++) {      
        lahiran = MHS[i].Birthdate;             
        var diffDays = parseInt((today.getYear() - lahiran.getYear()));
        console.log(MHS[i].Name + " saat ini berumur " + diffDays + " tahun");                                       
     }
console.log(today)
console.log("Thank you"); 