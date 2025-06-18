function calcularIMC(event) {
    event.preventDefault(); // evitar recarga de página

    let pesoInput = document.getElementById('peso');
    let alturaInput = document.getElementById('altura');
    let resultado = document.getElementById('resultado');

    let peso = parseFloat(pesoInput.value);
    let altura = parseFloat(alturaInput.value) / 100; // convertir cm a m

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert('Por favor, ingresa valores válidos de peso y altura.');
        return;
    }

    let imc = peso / (altura * altura);

    resultado.textContent = imc.toFixed(2);

    if(imc < 18.6) {
        resultado.style.backgroundColor='yellow';
    }
    else{
        if(imc < 24.9) {
            resultado.style.backgroundColor='green';
        }
        else{
            resultado.style.backgroundColor='red';
        }
    }
}

