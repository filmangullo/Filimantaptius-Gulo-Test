function myFunction() {
    var fnumber = document.getElementById("fnumber").value;
    var fgrade = document.getElementById("fgrade");
   
    if (fnumber >= 90 ) {
         return fgrade.innerHTML = "A";
    } else if (fnumber >= 80 && fnumber <= 89 ){
        return fgrade.innerHTML = "B";
    } else if (fnumber >= 70 && fnumber <= 79 ){
        return fgrade.innerHTML = "C";
    } else if (fnumber >= 60 && fnumber <= 69 ){
        return fgrade.innerHTML = "D";
    } else if (fnumber <= 69 ){
        return fgrade.innerHTML = "E";
    }
}