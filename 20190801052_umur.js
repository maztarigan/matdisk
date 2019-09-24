var key = require('readline-sync');

var umur = parseInt(key.question("Masukkan Umur:"));

if ((umur>=3) && (umur<=4))
{
    console.log("Anda PG");
}else if ((umur>4) && (umur<=6))
{
    console.log ("Anda TK");
}else if ((umur>6) && (umur<13))
{
    console.log ("Anda SD");
}else if ((umur >12) && (umur<=15))
{
    console.log("Anda SMP");
}else if ((umur>15) && (umur<=18))
{
    console.log("Anda SMA");
}else {
    console.log("ERROR, UMUR TIDAK SESUAI")
}