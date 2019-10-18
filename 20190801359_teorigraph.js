
var key = require('readline-sync')

var jalur_a1=parseInt([key.question("jarak a Titik 1 : ")]);
var jalur_a2=parseInt([key.question("jarak a Titik 2 : ")]);
var jalur_a3=parseInt([key.question("jarak a Titik 3 : ")]);
var jalur_b1=parseInt([key.question("jarak b Titik 1 : ")]);
var jalur_b2=parseInt([key.question("jarak b Titik 2 : ")]);
var jalur_b3=parseInt([key.question("jarak b Titik 3 : ")]);
var jarak_jalur_a = jalur_a1+jalur_a2+jalur_a3;
var jarak_jalur_b = jalur_b1+jalur_b2+jalur_b3;
if (jarak_jalur_a>jarak_jalur_b)
{
   console.log("jarak terpanjang adalah jalur b : " +jarak_jalur_a + "km");
    console.log("jarak terpendek adalah jalur b : " +jarak_jalur_b + "km");
}else{
    console.log("jarak terpanjang adalah jalur b : " +jarak_jalur_b + "km");
    console.log("jarak terpendek adalah jalur a : " +jarak_jalur_a + "km");
}