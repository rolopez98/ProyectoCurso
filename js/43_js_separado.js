function saludo(){
    document.write('Esto es una prueba');
}

function cuentaVocales(texto) {
    var vocales = 'aeiouAEIOU';
    var contador = 0;
    for (var letra of texto) {
        if (vocales.indexOf(letra) >= 0) {
            contador ++;
        }
    }
    return contador;
}

// Función que reciba una array de números y devuelva el mayor

function maximo(entrada){
     // [23,4,55,6,7,8,90,12]
     entrada.sort(function (a,b) { return b-a });
     alert(entrada[0]);
}