let letras = [];
let conversion = [
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
];
let botonEncriptar = document.querySelector('.encriptar');
botonEncriptar.onclick = encriptar;
function encriptar() {
    let textoEntrada = document.querySelector('#texto-entrada').value;
    if (restricciones(textoEntrada) != 0) {
        alert(restricciones(textoEntrada))
    } else {
        separarLetras(textoEntrada, letras);
        encriptarVocales(letras, conversion);
        let textoSalida = document.querySelector('#texto-salida').innerHTML = concatenarLetras(letras);
        return textoSalida
    }
}