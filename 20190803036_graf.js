var key = require('readline-sync');

console.log("Graf Jarak Dengan Masing Masing 4 Titik");
console.log("Data A");
var jalur_a = [];
    jalur_a.push(parseInt(key.question('Jarak A Titik 1 : ')));
    jalur_a.push(parseInt(key.question('Jarak A Titik 2 : ')));
    jalur_a.push(parseInt(key.question('Jarak A Titik 3 : ')));
    jalur_a.push(parseInt(key.question('Jarak A Titik 4 : ')));

console.log("Data B");
var jalur_b = [];
    jalur_b.push(parseInt(key.question('Jarak B Titik 1 : ')));
    jalur_b.push(parseInt(key.question('Jarak B Titik 2 : ')));
    jalur_b.push(parseInt(key.question('Jarak B Titik 3 : ')));
    jalur_b.push(parseInt(key.question('Jarak A Titik 4 : ')));

        var jarak_jalur_a = jalur_a[0]+jalur_a[1]+jalur_a[2]+jalur_a[3];
        var jarak_jalur_b = jalur_b[0]+jalur_b[1]+jalur_b[2]+jalur_b[3];

if(jarak_jalur_a>jarak_jalur_b){
    console.log("==============================");
    console.log("Jarak Terpanjang : "+jarak_jalur_a+"KM");
    console.log("Jarak Terdekat : "+jarak_jalur_b+"KM");
    console.log("==============================");
}else{
    console.log("==============================");
    console.log("Jarak Terpanjang : "+jarak_jalur_b+"KM");
    console.log("Jarak Terdekat : "+jarak_jalur_a+"KM");
    console.log("==============================");
}