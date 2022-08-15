function restricciones(texto) {
    const prohibiciones = {
        numeros: /[0-9]/,
        mayusculas: /[A-Z]/,
        caracterEspeciales: /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/,
        vocalConAcento: /[áéíóúÁÉÍÓÚ]/
    };
    const errorMensaje = [
        'Numeros',
        'Mayusculas',
        'Caracteres especiales',
        'Acentos'
    ];
    let errores = '';
    let prohibicion = Object.values(prohibiciones);
    for (let i = 0; i < errorMensaje.length; i++) {
        if (prohibicion[i].test(texto)) errores += `${errorMensaje[i]} no son validos!\n`;
    }
    return errores
}