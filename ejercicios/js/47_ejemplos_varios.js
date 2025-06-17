var manejador;

function Iniciar(){
   muestraHora();
    manejador = setInterval(muestraHora, 1000);

}

function muestraHora(){
    const reloj = document.getElementById("reloj");
    const fechaElemento = document.getElementById("fecha");
    const temphumElemento = document.getElementById("temphum");

    const fecha = new Date();

    //HORA-------------------------------

    let hora = fecha.getHours().toString().padStart(2, '0');
    let minutos = fecha.getMinutes().toString().padStart(2, '0');
    let segundos = fecha.getSeconds().toString().padStart(2, '0');

    //FECHA -----------------------------
    let dia = fecha.getDate().toString().padStart(2, '0');
    let mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    let año = fecha.getFullYear();

    reloj.textContent = `${hora}:${minutos}:${segundos}`;
    fechaElemento.textContent = `${dia}/${mes}/${año}`;


}

function parar(){
    clearInterval(manejador);
}
 
