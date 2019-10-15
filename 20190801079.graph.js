var jalurA = [10, 20, 5];
var jalurB = [10, 10,10];
jalurA.push(80,45)
jalurB.push(100,2000)

var jalur2A = jalurA[0]+jalurA[1]+jalurA[2]+jalurA[3]+jalurA[4];
var jalur2B = jalurB[0]+jalurB[1]+jalurB[2]+jalurB[3]+jalurB[4];

if (jalur2A > jalur2B) {
    console.log('Jalur terpanjang adalah '+jalur2A +' meter')
    console.log('Jalur terpendek adalah '+jalur2B +' meter')
} else {
    console.log('Jalur terpanjang adalah '+jalur2B +' 1meter')
    console.log('jalur terpendek adalah '+jalur2A +' meter')
};

console.log('=======================')
console.log('CARA KEDUA')
console.log('===DATA SATU===');
var inputkeyboard = require('readline-sync');
var jalur_a=[]
jalur_a.push(parseInt(inputkeyboard.question('Jalur pertama: ')));
jalur_a.push(parseInt(inputkeyboard.question('Jalur kedua: ')));
jalur_a.push(parseInt(inputkeyboard.question('Jalur ketiga: ')));
console.log('=============================')

console.log('===DATA DUA====');
var jalur_b=[] 
jalur_b.push(parseInt(inputkeyboard.question('Jalur pertama: ')));
jalur_b.push(parseInt(inputkeyboard.question('Jalur kedua: ')));
jalur_b.push(parseInt(inputkeyboard.question('Jalur ketiga: ')));
console.log('=============================')

jalur_ab=[jalur_a[0]+jalur_a[1]+jalur_a[2]];
jalur_ba=[jalur_b[0]+jalur_b[1]+jalur_b[2]];

if (jalur_ab>jalur_ba) {
    console.log('jalur terpanjang adalah '+jalur_ab)
    console.log('jalur terpendek '+jalur_ba)
} else {
    console.log('jalur terpanjang '+jalur_ba)
    console.log('jalur terpendek '+jalur_ab)
}