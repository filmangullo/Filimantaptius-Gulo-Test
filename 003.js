function myFunction() {    
    var angka = [ 14, 10, 96, 13, 11, 12 ,95 ];
    var text = "";
    
    var maksimum = angka[0];
    var minimum = angka[0];
    var average = 0;
    // Menampikan Nilai di HTML
    for (i = 0; i < angka.length; i++) {
      text += angka[i] + " ,";
    }
    
    // Cek Nilai Max
    for (i = 1; i < angka.length; i++) {
        if (angka[i] > maksimum)  {
            maksimum = angka[i];
        }
    }
    
    // Cek Nilai Min
    for (i = 1; i < angka.length; i++) {
        if (angka[i] < minimum)  {
            minimum = angka[i];
        }
    }
    
    // Cek Nilai Rata2
    for (i = 0; i < angka.length; i++) {
        average += angka[i] ;
    }
    
    document.getElementById("deretAngka").innerHTML = text;
    document.getElementById("max").innerHTML = maksimum;
    document.getElementById("min").innerHTML = minimum;
    document.getElementById("average").innerHTML = (average / angka.length).toFixed(2);
}