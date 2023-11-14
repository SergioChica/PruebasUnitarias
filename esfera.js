
function volumenEsfera(radio) {
    const pi = Math.PI
    let volumen = (4/3) * pi * Math.pow(radio,3) 

    return volumen
}

module.exports = volumenEsfera