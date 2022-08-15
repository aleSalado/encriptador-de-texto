let botonDesencriptar = document.querySelector('.desencriptar');
botonDesencriptar.onclick = desencriptar;
function desencriptar() {
    let textoEntrada = document.querySelector('#texto-entrada').value;
    if (restricciones(textoEntrada) != 0) {
        alert(restricciones(textoEntrada))
    } else {
        separarLetras(textoEntrada, letras);
        desencriptarVocales(letras, conversion);
        let textoSalida = document.querySelector('#texto-salida').innerHTML = concatenarLetras(letras);
        return textoSalida
    }
}
