function calcularTemp(event){
    const tempInic = document.getElementById('temperaturaInicial').value
    const tempFinal = document.getElementById('temperaturaFinal').value
    let resultado


    let temp
    if (tempInic === 'Celsius' && tempFinal === "Fahrenheit" ){
        temp= tempInic * 1.8 + 32
    } if (tempInic === 'Celsius' && tempFinal === 'Kelvin'){
        temp= tempFinal - 273.15
    } if (tempInic === 'Fahrenheit' && tempFinal === 'Celsius'){
        temp = (tempInic - 32) / 1,8
    } if (tempInic === 'Fahrenheit' && tempFinal === 'Kelvin'){
        temp = (tempInic + 459.67) * 5/9
    } if (tempInic === 'Kelvin' && tempFinal === 'Celsius'){
        temp =tempInic + 273.15
    } else (tempInic === 'Kelvin' && tempFinal === 'Fahrenheit')
        temp= tempInic * 9 / 5 - 459.67

}

    document.getElementById('resultado').innerHTML =
    ` A temperatura inicial é de, ${temp} e o resultado é ${resultado}`

