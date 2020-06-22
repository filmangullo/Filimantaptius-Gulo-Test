function leapYear(thnAwal, thnAkhir) {
    var text = "";
    // Menampikan Nilai di HTML
    for (i = thnAwal; i <= thnAkhir; i++) {
      
        if (  i % 400 == 0 ) {
            text += i + " adalah tahun kabisat <br>";
        } else if ( i % 100 == 0 ) {
            text += i + " adalah BUKAN tahun kabisat <br>";
        } else if ( i % 4 == 0 ) {
            text += i + " adalah tahun kabisat <br>";
        } else {
            text += i + " adalah BUKAN tahun kabisat <br>";
        }
    }
    
    document.getElementById("result").innerHTML = text;
}