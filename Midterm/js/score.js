function calculation() {
    var nilai = document.score.score1.value;
    if(nilai >= 60){
        document.getElementById('result').innerHTML = "Kamu sudah Berhasil!";
        event.preventDefault();
    }
    else{
        document.getElementById('result').innerHTML = "Kamu belum Berhasil!";
        event.preventDefault();
    }
};