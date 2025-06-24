var numero_objetivo = Math.floor(Math.random()*100) + 1;
var max_intentos = 10;
var intentos = 0;

console.log(numero_objetivo);
function adivinar(){
    let num;
    let num_txt = document.getElementById('numero');
    let quedan = document.getElementById('quedan');
    let resultado = document.getElementById('resultado');
    let historial = document.getElementById('historial');
    let btn = document.getElementById('enviar');


    if(intentos < max_intentos){
        num = parseInt(num_txt.value);
        quedan.textContent = max_intentos - intentos -1;
        intentos ++ ; 

        if(num == numero_objetivo){
           resultado.textContent = "¡¡ENHORABUENA!! Has acertado.";
            btn.disabled = true;
        }

        if(num > numero_objetivo){
            let li = document.createElement('li');
            li.textContent = `El número ${num} es mayor que el objetivo`;
            historial.appendChild(li);
        }
        
        if(num < numero_objetivo){
            let li = document.createElement('li');
            li.textContent = `El número ${num} es menor que el objetivo`;
            historial.appendChild(li);
        }

        if(intentos == max_intentos){
            resultado.textContent = `TERMINADO. El número era ${numero_objetivo}`;   
            btn.disabled = true;
        }

        num_txt.value = '';
        num_txt.focus();
    }


}

function reiniciar(){
    window.location.reload();
}