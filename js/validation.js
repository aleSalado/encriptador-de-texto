export function validation(text) {
    const limits = {
        "Number": /[0-9]/,
        "Capitals": /[A-ZÑ]/,
        "Special characters": /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/,
        "Accents": /[áéíóúÁÉÍÓÚ]/
    };
    const error = Object.keys(limits).filter(item => limits[item].test(text)).map(error=>`${error} no valids!\n`).join('');
    if(error) document.querySelector('#output-text').classList.add('warning');
    return error
}