function isEvent() {
    var fnumber = document.getElementById("fnumber").value;
    var fis = document.getElementById("fis");
    
	if (fnumber % 2 == 0)
		return fis.innerHTML = "Genap";
	else
		return fis.innerHTML = "Ganjil";
}