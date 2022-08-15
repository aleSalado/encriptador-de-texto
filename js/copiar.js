let botonCopiar = document.querySelector(".copiar");
botonCopiar.onclick = copiar;
function copiar() {
    let textoSalida = document.getElementById("texto-salida");
    textoSalida.select();
    navigator.clipboard.writeText(textoSalida.innerHTML);
}

