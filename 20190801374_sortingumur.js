console.log("Welcome");
console.log("Menghitung Usia");
var today = new Date();

var DataMahasiswa =
    [{"Name":"Alfian","Birthdate":new Date('1997-12-19')},
    {"Name":"Androw","Birthdate":new Date('1997-10-28')},
    {"Name":"Andri","Birthdate":new Date('2000-02-29')},
    {"Name":"Anrian","Birthdate":new Date('1999-10-29')},
    {"Name":"Dimas","Birthdate":new Date('2000-06-21')},
    {"Name":"Tiara","Birthdate":new Date('2001-03-06')},
    {"Name":"Nia","Birthdate":new Date('2001-02-14')},
    {"Name":"Kresna","Birthdate":new Date('2000-11-29')},
    {"Name":"Lorenzo","Birthdate":new Date('1996-06-26')},
    {"Name":"Sutna","Birthdate":new Date('1998-12-24')},
    {"Name":"Fikry","Birthdate":new Date('1997-05-17')},
    {"Name":"Jhordy","Birthdate":new Date('2001-11-15')},
    {"Name":"Raihan","Birthdate":new Date('2000-05-01')},
    {"Name":"Ilham","Birthdate":new Date('2000-01-03')},
    {"Name":"Sindy","Birthdate":new Date('2001-06-30')}];

    DataMahasiswa.sort(function(a,b){
     return a.Birthdate - b.Birthdate
   })

   for(i=0; i<DataMahasiswa.length; i++) {      
        birthday = DataMahasiswa[i].Birthdate;             
        var diffDays = parseInt((today.getYear() - birthday.getYear()));
        console.log(birthday);
        console.log(DataMahasiswa[i].Name + " saat ini berusia " + diffDays + " tahun");                                       
     }
console.log("Thank you");