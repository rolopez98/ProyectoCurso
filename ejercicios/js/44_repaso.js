// 1. Imprimir en la consola los números del 1 al 20

// for(var i = 1;i <= 20; i++){
//     console.log(i);
// }

// var limite = 1;
// while (limite <= 20) {
//     console.log('While: ' + limite);
//     limite += 1;
// }

// 2. Igual que antes, pero en una sola fila

var lista = [];
for(var i = 1;i <= 20; i++){
    lista.push(i);
}
console.log(lista);
console.log(lista.toString());

var cadena = lista.toString();
var x = cadena.split(',');
console.log(cadena.split(','));

// Volver a convertir la cadena en un array de números
var numeros = [];

for(var valor of x){
    numeros.push(parseInt(valor));
}
console.log(numeros);


// 3. Hacer una función que reciba un array de números y devuelva otro array solo con los mayores de 10.

// [12,2,3,4,55,6,7,17,66]
    