function desencriptarVocales(letras, conversion) {
    letras.map((letra, index )=> {
        for (let vocales of conversion) {
            if (letra == vocales[0]) {
                for (let i = 0; i < conversion.length; i++) {
                    let vocalEncriptado = '';
                    let eliminarSiguiente = false;
                    for (let indexCaracter in vocales[1]) {
                        vocalEncriptado += letras[index + parseInt(indexCaracter)]
                        if (vocalEncriptado == vocales[1]) {
                            for (let k = 0; k < vocales[1].length; k++) {
                                if (letras[index + k] == vocales[0] && !eliminarSiguiente) {
                                    eliminarSiguiente = true;
                                } else {
                                    letras[index + k] = '';
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    return letras
}
