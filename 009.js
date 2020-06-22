var arr = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];
var myJSON = JSON.stringify(arr);
document.getElementById("data").innerHTML =  myJSON;

arr.forEach(myFunction);
function myFunction(item, index) {
    if (item.age < 21 ) {
        document.getElementById("result").innerHTML += item.name + " Dengan Umur : " + item.age + "<br>"; 
    }
  
}