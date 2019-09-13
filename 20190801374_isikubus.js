var masukkan_keyboard = require("readline-sync");

var sisi_kubus = masukkan_keyboard.question("Masukkan Nilai s : ");

var Volume = sisi_kubus*sisi_kubus*sisi_kubus;

console.log("Isi Kubus : " +Volume);