var jalurA = [[4,25],[7,25],[3,10]]
var jalurB = [[5,40],[6,45],[2,10]]

var jarak_jalurA = jalurA[0,0]+jalurA[1,0]+jalurA[2,0]
var waktu_jalurA = jalurA[0,1]+jalurA[1,1]+jalurA[2,1]

var jarak_jalurB = jalurB[0,0]+jalurB[1,0]+jalurB[2,0]
var waktu_jalurB = jalurB[0,0]+jalurB[1,0]+jalurB[2,0]

if (jarak_jalurA<jarak_jalurB) {
    console.log('Jarak terpanjang adalah Jalur A')
} else {
    console.log('Jarak terpendek adalah jalur A')
}

if (waktu_jalurA < waktu_jalurB) {
    console.log('waktu yang ditempuh jalur A adalah yang paling terlama')
} else {
    console.log('waktu yang ditempuh jalur A adalah yang paling tercepat')
}