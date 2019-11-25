document.getElementById("currentDate")

document.write("Mengoding dengan Javascript");
var tanggal = new Date();
var kode_hari = tanggal.getDay();
var nama_hari = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Fridat", "Saturday");


document.write("<br> Current Date : " + nama_hari[kode_hari] + " " 
+ tanggal.getDate() + "/" + (tanggal.getMonth() + 1) + "/" + (tanggal.getFullYear()));

