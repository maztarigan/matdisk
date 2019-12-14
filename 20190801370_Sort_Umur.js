console.log("");
console.log("====== WELCOME ======");
console.log("=== Menghitung Usia ===");
console.log("=======================================");
console.log("")

var today = new Date();

var MHS =
[
     {"Nama":"Alfian","Kelahiran":new Date('1997-12-19')},
     {"Nama":"Androw","Kelahiran":new Date('1997-10-28')},
     {"Nama":"Andri","Kelahiran":new Date('2000-02-29')},
     {"Nama":"Anrian","Kelahiran":new Date('1999-10-29')},
     {"Nama":"Dimas","Kelahiran":new Date('2000-06-21')},
     {"Nama":"Tiara","Kelahiran":new Date('2001-03-06')},
     {"Nama":"Nia","Kelahiran":new Date('2001-02-14')},
     {"Nama":"Kresna","Kelahiran":new Date('2000-11-29')},
     {"Nama":"Lorenzo","Kelahiran":new Date('1996-06-26')},
     {"Nama":"Sutna","Kelahiran":new Date('1998-12-24')},
     {"Nama":"Fikry","Kelahiran":new Date('1997-05-17')},
     {"Nama":"Jhordy","Kelahiran":new Date('2001-11-15')},
     {"Nama":"Raihan","Kelahiran":new Date('2000-05-01')},
     {"Nama":"Ilham","Kelahiran":new Date('2000-01-03')},
     {"Nama":"Sindy","Kelahiran":new Date('2001-06-30')}
];
MHS.sort(function(a,b){
        return a.Kelahiran-b.Kelahiran
})
        for(var i=0; i<MHS.length; i++) {    
        lahiran = MHS[i].Kelahiran             
        var TglToday = parseInt((today.getYear() - lahiran.getYear()));
        console.log("Nama : " + MHS[i].Nama);
        console.log("Kelahiran : " + MHS[i].Kelahiran);
        console.log("Usia : " + TglToday + " tahun");
        console.log("")
        }
console.log("Tgl Sekarang : " + today)
console.log("=======================================");
