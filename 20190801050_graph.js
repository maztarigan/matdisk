var lintas=require('readline-sync')

console.log("Jarak Tempuh A")
var jalur_a=[]
jalur_a.push(parseInt(lintas.question('Titik 1 : ')))
jalur_a.push(parseInt(lintas.question('Titik 2 : ')))
jalur_a.push(parseInt(lintas.question('Titik 3 : ')))

console.log("Jarak Tempuh B")
var jalur_b=[]
jalur_b.push(parseInt(lintas.question('Titik 1 : ')))
jalur_b.push(parseInt(lintas.question('Titik 2 : ')))
jalur_b.push(parseInt(lintas.question('Titik 3 : ')))
    var jarak_jalur_a = jalur_a[0]+jalur_a[1]+jalur_a[2]
    var jarak_jalur_b = jalur_b[0]+jalur_b[1]+jalur_b[2]

if(jarak_jalur_a>jarak_jalur_b)
{
console.log("Jarak Terpanjang : "+jarak_jalur_a+"KM")
console.log("Jarak Terdekat : "+jarak_jalur_b+"KM")

}else{
console.log("Jarak Terpanjang : "+jarak_jalur_b+"KM")
console.log("Jarak Terdekat : "+jarak_jalur_a+"KM")
}