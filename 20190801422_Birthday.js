console.log("SELAMAT DATANG")
console.log("ALFIAN AJI WAHYUDI")
console.log("20190801422")
console.log("Matematika Diskrit")
console.log("-------------------------------------------------")
var Data= require('dateformat');
var today = Data("isoDate");
var now = new Date();
console.log("Tanggal saat ini : "+ today);
console.log("");
console.log("Umur Mahasiswa ESA UNGGUL");
console.log("");
console.log("==================================")

var Data =
        [{"Nama":"Alfian","Tanggal_lahir":new Date('1997-12-19')},
         {"Nama":"Andri","Tanggal_lahir":new Date('2000-02-29')},
         {"Nama":"Androw","Tanggal_lahir":new Date('1997-10-28')},
         {"Nama":"Anrian","Tanggal_lahir":new Date('1999-10-29')},
         {"Nama":"Dimas","Tanggal_lahir":new Date('2000-06-21')},
         {"Nama":"Febri","Tanggal_lahir":new Date('2001-12-14')},
         {"Nama":"Fikry","Tanggal_lahir":new Date('1997-05-17')},
         {"Nama":"Ilham","Tanggal_lahir":new Date('2001-03-01')},   
         {"Nama":"Jhordy","Tanggal_lahir":new Date('2001-11-15')},    
         {"Nama":"Kresna","Tanggal_lahir":new Date('2000-11-29')},
         {"Nama":"Lorenzo","Tanggal_lahir":new Date('1996-06-26')},
         {"Nama":"Raihan","Tanggal_lahir":new Date('2000-05-01')},   
         {"Nama":"Sindy","Tanggal_lahir":new Date('2001-06-30')},
         {"Nama":"Sutna","Tanggal_lahir":new Date('1998-12-24')},
         {"Nama":"Tiara","Tanggal_lahir":new Date('2001-03-06')}];

   for(i=0; i<Data.length; i++) {      
        lahiran = Data[i].Tanggal_lahir;             
        var diffDays = parseInt((now.getYear() - lahiran.getYear()));
        console.log(Data[i].Nama + " saat ini berusia :" + diffDays + " Tahun");                                       
     }
console.log("==================================")