document.getElementById("currentDate")

var tanggal = new Date();
    var kode_hari = tanggal.getDate;
    var nama_hari = "";

    switch (kode_hari) {
        case 0:
            nama_hari = "Sunday";
            break;
        case 1:
            nama_hari = "Monday";
            break;
        case 2:
            nama_hari = "Tuesday";
            break;
        case 3:
            nama_hari = "Wednesday";
            break;
        case 4:
            nama_hari = "Thursday";
            break;
        case 5:
            nama_hari = "Friday";
            break;
        case 6:
            nama_hari = "Saturday";
            break;
    }

    document.write("Current Date : "+tanggal.getDate()+"/"+(tanggal.getMonth()+1)+"/"+(tanggal.getFullYear()));