function pair(n) {
    var n = prompt("Introduzca un número para saber si es par o no", ""); 
    var str = n + "  es par"
    if((n % 2) == 0){
        console.log(str)
    }else{
        str = n + "  no es par";
        console.log(str)
    }
    document.getElementById("display").innerHTML = str;
}


