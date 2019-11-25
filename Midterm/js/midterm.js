document.getElementById("firstGame");

var answer = window.confirm("Are you ready?");
if (answer == true) {
    var respond1 = "<br> Mari bermain Data & Angka";
    document.write(respond1.fontcolor("salmon"));

    document.write("<br> Ini contoh Variabel = A, iniContoh, Contoh lain");
    document.write("<br> ini contoh hitungan");

    document.write("<br> 4 * 2 = "+(4*2));
    document.write("<br> 3 % 2 = "+(4%2));
    document.write("<br> 7 + 11 = "+(7*11));
    document.write("<br> 7 - 11 = "+(4-2));

    document.write("<br> Sudah berhasil dengan latihan Javascriptmu ?");
    document.getElementById("calc");

        if (document.score.score1.value>=60) {
            document.getElementById('result').innerHTML = "Kamu sudah Berhasil!";
        }
        else {
            document.getElementById('result').innerHTML = "Kamu belum Berhasil!";
        }
}