console.log("selamat datang");
console.log("Menghitung Usia");
var hari_ini = new Date();

var MHS =
    [["Alfian",parseInt(hari_ini.getFullYear() - new Date('1997-12-19').getFullYear())],
    ["Androw",parseInt(hari_ini.getFullYear() - new Date('1997-10-28').getFullYear())],
    ["Andri",parseInt(hari_ini.getFullYear() - new Date('2000-02-29').getFullYear())],
    ["Anrian",parseInt(hari_ini.getFullYear() - new Date('1999-10-29').getFullYear())],
    ["Dimas",parseInt(hari_ini.getFullYear() - new Date('2000-06-21').getFullYear())],
    ["Tiara",parseInt(hari_ini.getFullYear() - new Date('2001-03-06').getFullYear())],
    ["Nia",parseInt(hari_ini.getFullYear() - new Date('2001-02-14').getFullYear())],
    ["Kresna",parseInt(hari_ini.getFullYear() - new Date('2000-11-29').getFullYear())],
    ["Lorenzo",parseInt(hari_ini.getFullYear() - new Date('1996-06-26').getFullYear())],
    ["Sutna",parseInt(hari_ini.getFullYear() - new Date('1998-12-24').getFullYear())],
    ["Fikry",parseInt(hari_ini.getFullYear() - new Date('1997-05-17').getFullYear())],
    ["Jhordy",parseInt(hari_ini.getFullYear() - new Date('2001-11-15').getFullYear())],
    ["Raihan",parseInt(hari_ini.getFullYear() - new Date('2000-05-01').getFullYear())],
    ["Ilham",parseInt(hari_ini.getFullYear() - new Date('2000-01-03').getFullYear())],
    ["Sindy",parseInt(hari_ini.getFullYear() - new Date('2001-06-30').getFullYear())]];
    MHS.sort((a,b) => {
    if(a[1]  <b[1]) return 1;
    if(b[1]  <a[1]) return -1;
    return 0;
 })
   for(i=0; i<MHS.length; i++) {      
        console.log(MHS[i][0] + " saat ini berusia " + MHS[i][1] + " tahun");                                       
     }
console.log(hari_ini)
console.log("Terima Kasih");