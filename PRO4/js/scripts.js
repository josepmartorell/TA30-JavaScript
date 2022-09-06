
function MyOps() {

let array = [true, 5, false, "hola", "adios", 2];

for (i = 0; i<array.length; i++){
    console.log(array[i]);
}

array.forEach(element => console.log(typeof element));
//prueba && boleanos
let check = false;
 if (array[0] && array[2]) {
    check = true
 }
 console.log("array[0] && array[2] = " + check);
//prueba || boleanos
 check = false;
 if (array[0] || array[2]) {
    check = true
 }
console.log("array[0] || array[2] = " + check);

console.log(array[1]+array[5]);
console.log(array[1]-array[5]);
console.log(array[1]*array[5]);
console.log(array[1]/array[5]);
    
}


