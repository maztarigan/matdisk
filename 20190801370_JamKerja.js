console.log("   ");
console.log("Absen Jam Kerja");
var dimas = "Dimas";
var raihan = "Raihan";
var ilham = "Ilham";
var fikry = "Fikry";
var jhordy = "Jhordy";
var kresna = "Kresna";
var sutna = "Sutna";
var durasi = [["16.10","20.55"],["20.40","22.00"],["23.00","24.00"],["05.00","06.30"],["15.00","23.00"],["17.00","21.00"],["02.00","04.00"]];

var tiara = "Tiara";
var sindy = "Sindy";
var nia = "Nia";
var lorenzo = "Lorenzo";
var anrian = "Anrian";
var alfian = "Alfian";
var andri = "Andri";
var androw = "Androw";
var durasi2 = [["19.30","21.30"],["08.00","16.00"],["16.00","23.00"],["17.00","18.15"],["07.00","09.00"],["14.00","06.00"],["00.00","01.30"],["05.10","00.00"]];

//durasi1
var JMdimas = durasi[0][0];
var JKdimas = durasi[0][1];
var Ddimas = durasi[0][1] - durasi[0][0];
var JamDimas = Ddimas.toFixed();
var Totaldimas = 45;

var JMraihan = durasi[1][0];
var JKraihan = durasi[1][1];
var Draihan = durasi[1][1] - durasi[1][0];
var JamRaihan = Draihan.toFixed();
var Totalraihan = 20;

var JMilham = durasi[2][0];
var JKilham = durasi[2][1];
var Dilham = durasi[2][1] - durasi[2][0];
var JamIlham = Dilham.toFixed();
var Totalilham = 00;

var JMfikry = durasi[3][0];
var JKfikry = durasi[3][1];
var Dfikry = durasi[3][1] - durasi[3][0];
var Jamfikry = Dfikry.toFixed();
var Totalfikry = 30;

var JMjhordy = durasi[4][0];
var JKjhordy = durasi[4][1];
var Djhordy = durasi[4][1] - durasi[4][0];
var Jamjhordy = Djhordy.toFixed();
var Totaljhordy = 00;

var JMkresna = durasi[5][0];
var JKkresna = durasi[5][1];
var Dkresna = durasi[5][1] - durasi[5][0];
var Jamkresna = Dkresna.toFixed();
var Totalkresna = 00;

var JMsutna = durasi[6][0];
var JKsutna = durasi[6][1];
var Dsutna = durasi[6][1] - durasi[6][0];
var Jamsutna = Dsutna.toFixed();
var Totalsutna = 00;


//durasi2
var JMtiara = durasi2[0][0];
var JKtiara = durasi2[0][1];
var Dtiara = durasi2[0][1] - durasi2[0][0];
var Jamtiara = Dtiara.toFixed();
var Totaltiara = 00;

var JMsindy = durasi2[1][0];
var JKsindy = durasi2[1][1];
var Dsindy = durasi2[1][1] - durasi2[1][0];
var Jamsindy = Dsindy.toFixed();
var Totalsindy = 00;

var JMnia = durasi2[2][0];
var JKnia = durasi2[2][1];
var Dnia = durasi2[2][1] - durasi2[2][0];
var Jamnia = Dnia.toFixed();
var Totalnia = 00;

var JMlorenzo = durasi2[3][0];
var JKlorenzo = durasi2[3][1];
var Dlorenzo = durasi2[3][1] - durasi2[3][0];
var Jamlorenzo = Dlorenzo.toFixed();
var Totallorenzo = 15;

var JManrian = durasi2[4][0];
var JKanrian = durasi2[4][1];
var Danrian = durasi2[4][1] - durasi2[4][0];
var Jamanrian = Danrian.toFixed();
var Totalanrian = 00;

var JMalfian = durasi2[5][0];
var JKalfian = durasi2[5][1];
var Dalfian = durasi2[5][1] - durasi2[5][0];
var Jamalfian = Dalfian.toFixed();
var Totalalfian = 00;
var alfiantotal = 16;

var JMandri = durasi2[6][0];
var JKandri = durasi2[6][1];
var Dandri = durasi2[6][1] - durasi2[6][0];
var Jamandri = Dandri.toFixed();
var Totalandri = 30;

var JMandrow = durasi2[7][0];
var JKandrow = durasi2[7][1];
var Dandrow = durasi2[7][1] - durasi2[7][0];
var Jamandrow = Dandrow.toFixed();
var Totalandrow = 50;
var androwtotal = 18;

console.log("")
//durasi 1
console.log("Nama : "+dimas+"     Masuk Pukul : "+JMdimas+" WIB     Keluar Pukul : "+JKdimas+" WIB     lama Durasi : "+JamDimas+"  Jam "+Totaldimas+" Menit");
console.log("Nama : "+raihan+"    Masuk Pukul : "+JMraihan+" WIB     Keluar Pukul : "+JKraihan+" WIB     lama Durasi : "+JamRaihan+"  Jam "+Totalraihan+" Menit");
console.log("Nama : "+ilham+"     Masuk Pukul : "+JMilham+" WIB     Keluar Pukul : "+JKilham+" WIB     lama Durasi : "+JamIlham+"  Jam  "+Totalilham+" Menit");
console.log("Nama : "+fikry+"     Masuk Pukul : "+JMfikry+" WIB     Keluar Pukul : "+JKfikry+" WIB     lama Durasi : "+Jamfikry+"  Jam "+Totalfikry+" Menit");
console.log("Nama : "+jhordy+"    Masuk Pukul : "+JMjhordy+" WIB     Keluar Pukul : "+JKjhordy+" WIB     lama Durasi : "+Jamjhordy+"  Jam  "+Totaljhordy+" Menit");
console.log("Nama : "+kresna+"    Masuk Pukul : "+JMkresna+" WIB     Keluar Pukul : "+JKkresna+" WIB     lama Durasi : "+Jamkresna+"  Jam  "+Totalkresna+" Menit");
console.log("Nama : "+sutna+"     Masuk Pukul : "+JMsutna+" WIB     Keluar Pukul : "+JKsutna+" WIB     lama Durasi : "+Jamsutna+"  Jam  "+Totalsutna+" Menit");
//durasi 2
console.log("Nama : "+tiara+"     Masuk Pukul : "+JMtiara+" WIB     Keluar Pukul : "+JKtiara+" WIB     lama Durasi : "+Jamtiara+"  Jam  "+Totaltiara+" Menit");
console.log("Nama : "+sindy+"     Masuk Pukul : "+JMsindy+" WIB     Keluar Pukul : "+JKsindy+" WIB     lama Durasi : "+Jamsindy+"  Jam  "+Totalsindy+" Menit");
console.log("Nama : "+nia+"       Masuk Pukul : "+JMnia+" WIB     Keluar Pukul : "+JKnia+" WIB     lama Durasi : "+Jamnia+"  Jam  "+Totalnia+" Menit");
console.log("Nama : "+lorenzo+"   Masuk Pukul : "+JMlorenzo+" WIB     Keluar Pukul : "+JKlorenzo+" WIB     lama Durasi : "+Jamlorenzo+"  Jam "+Totallorenzo+" Menit");
console.log("Nama : "+anrian+"    Masuk Pukul : "+JManrian+" WIB     Keluar Pukul : "+JKanrian+" WIB     lama Durasi : "+Jamanrian+"  Jam  "+Totalanrian+" Menit");
console.log("Nama : "+alfian+"    Masuk Pukul : "+JMalfian+" WIB     Keluar Pukul : "+JKalfian+" WIB     lama Durasi : "+alfiantotal+" Jam  "+Totalalfian+" Menit");
console.log("Nama : "+andri+"     Masuk Pukul : "+JMandri+" WIB     Keluar Pukul : "+JKandri+" WIB     lama Durasi : "+Jamandri+"  Jam "+Totalandri+" Menit");
console.log("Nama : "+androw+"    Masuk Pukul : "+JMandrow+" WIB     Keluar Pukul : "+JKandrow+" WIB     lama Durasi : "+androwtotal+" Jam "+Totalandrow+" Menit");
console.log("   ");