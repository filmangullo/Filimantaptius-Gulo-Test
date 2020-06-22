function isPalindrome ()  {
    var fkata = document.getElementById("fkata").value;
    
    var i = 0 ; 
    var j = fkata.length - 1; 
    
    while ( i < j) {
        
        if ( fkata.charAt(i) != fkata.charAt(j)) {
            document.getElementById("keterangan").innerHTML = false;
        } else {
            document.getElementById("keterangan").innerHTML = true;
        }
        i++;
        j--;
    }
    
}