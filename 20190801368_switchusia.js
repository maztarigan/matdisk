var val = require('readline-sync');

var x =parseInt(val.question("Masukan Usia  : "));



switch (x){

    case 3:

    case 4:

        console.log("Tingkat PG");

    break;

    case 5:

    case 6:

        console.log("Tingkat TK");

    break;

    case 6:

    case 7:

    case 8:

    case 9:

    case 10:

    case 11:

    case 12:

    console.log("Tingkat SD");

    break;

    case 13:

    case 14:

    case 15:

        console.log("Tingkat SMP");

    break;

    case 16:

    case 17:

    case 18:

        console.log ("Tingkat SMA");

    break;

}