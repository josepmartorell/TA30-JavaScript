function show() {
    var str = prompt("Introduzca un frase para saber si es palíndromo", "")
    MyBol = true;
    var array = str.split('');
    console.log(array);
    var ar = array.length;
    console.log(ar);

    var j = 1;
    for (let i = 0; i < array.length / 2; i++) {
        var start = array[i];
        console.log(start);
        var final = array[ar - j];
        console.log(final);
        if(start != final){
            MyBol = false
        }
        j++;
    }
    if (MyBol) {
        console.log("ES PALÍNDROMO");
    } else { console.log("NO ES PALÍMDROMO") }

}

