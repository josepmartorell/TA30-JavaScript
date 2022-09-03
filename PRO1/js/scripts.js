function MyScript() {
    //este mensaje sale por consola
    console.log("Hola Mundo!")
    //y este mensaje a través de un elemento de la pagina index.html
    let message = "Soy el primer script"
    document.getElementById("display").innerHTML = message;
}