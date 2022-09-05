function checkType(mensaje) {
    mensaje = String(mensaje).trim();
    const regxs = {
      "lower": /^[a-z0-9 ]+$/,
      "upper": /^[A-Z0-9 ]+$/,
      "upperLower": /^[A-Za-z0-9 ]+$/
    };
 
    if (regxs.lower.test(mensaje)) {
      return '0';
    }
 
    if (regxs.upper.test(mensaje)){
     return '1';
    }
 
    if (regxs.upperLower.test(mensaje)){
     return '2';
    }
 
    return -1;
}
 
function enviar() {
    var mensaje = document.getElementById("mensaje").value;
    var result = checkType(mensaje);
 
    if (result == '0') {
        console.log('minusculas');
    }  else if (result == '1') {
        console.log('MAYUSCULAS');
    } else if (result == '2') {
        console.log('minusculas - MAYUSCULAS');
    } else {
       console.log('El mensaje no incluye letras');
    }
}

