console.log("konversi bilangan");
var input = require('readline-sync');
var desimal = input.questionInt("masukan desimal : ")

console.log("desimal to biner =  "+ desimal.toString(2));

console.log("desimal to octa =  "+ desimal.toString(8));

console.log("desimal to hexa =  "+ desimal.toString(16).toUpperCase());

