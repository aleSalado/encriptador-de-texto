function encriptarVocales(letras,conversion){
    letras.forEach((letra,index) => {
        for(let i in conversion){
            if(letra == conversion[i][0]) letras.splice(index,1,conversion[i][1]);
        }
    });
    return letras
}