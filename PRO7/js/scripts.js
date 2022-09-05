function factorial() { 
    var data = prompt("Introduzca un número para obtener el factorial", ""); 
    let result = 1;
    for(let i = data; i>0; i--){
        result *= i;
    }
    console.log(result);
    var r = result;
    document.getElementById("display").innerHTML = r;
}




