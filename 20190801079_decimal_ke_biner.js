var inputkeyboard = require ('readline-sync');
var n = parseInt(inputkeyboard.question('Masukkan Nilai: '));

dec_to_bho = function (n, base) {
    if (n<0) {
        n = 0xFFFFFFFF + n +1;
    }
    switch(base)
    {
        case 'B':
            return parseInt(n, 10).toString(2);
        break;
        case 'H':
            return parseInt(n, 10).toString(16);
        break;
        case 'O':
            return parseInt(n, 10).toString(8);
        break;
        default:
            return ("Wrong input...............");

    }
}

console.log(dec_to_bho(n,'B'));
console.log(dec_to_bho(n, 'H'));
console.log(dec_to_bho(n,'O'));