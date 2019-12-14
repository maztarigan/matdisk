console.log("Menghitung Umur");
var today = new Date();

var MHS =
    [{"Name":"Alfian","Tanggallahir":new Date('1997-02-19')},
    {"Name":"Androw","Tanggallahir":new Date('1997-10-28')},
    {"Name":"Andri","Tanggallahir":new Date('2000-02-29')},
    {"Name":"Anrian","Tanggallahir":new Date('1999-10-29')},
    {"Name":"Dimas","Tanggallahir":new Date('2000-06-21')},
    {"Name":"Tiara","Tanggallahir":new Date('2001-03-06')},
    {"Name":"Nia","Tanggallahir":new Date('2001-12-14')},
    {"Name":"Kresna","Tanggallahir":new Date('2000-11-29')},
    {"Name":"Lorenzo","Tanggallahir":new Date('1996-06-26')},
    {"Name":"Sutna","Tanggallahir":new Date('1998-12-24')},
    {"Name":"Fikry","Tanggallahir":new Date('1997-05-17')},
    {"Name":"Jhordy","Tanggallahir":new Date('2001-11-15')},
    {"Name":"Raihan","Tanggallahir":new Date('2000-05-01')},
    {"Name":"Jawir","Tanggallahir":new Date('2000-01-03')},
    {"Name":"Sindy","Tanggallahir":new Date('2001-06-30')}];

MHS.sort(function(a, b){
	return a.Tanggallahir-b.Tanggallahir
})

   for(i=0; i<MHS.length; i++) {      
        lahiran = MHS[i].Tanggallahir;             
        var diffDays = parseInt((today.getYear() - lahiran.getYear()));
        console.log(MHS[i].Name + " saat ini berumur " + diffDays + " tahun");                                       
     }
console.log(today)
console.log("Terima Kasih"); 