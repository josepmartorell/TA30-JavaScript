
function valor() {

    var num = prompt("Introduzca un dni para obtener la letra", "");

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'M', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var resto = num % 23;
    //debugeamos con la consola javascript
    console.log(letras[resto]);

    //sacamos el valor del array y lo almacenamos en letra
    var letra = letras[resto];
    document.getElementById("display").innerHTML = letra;
}


