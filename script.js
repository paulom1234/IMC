let peso = 85
let altura = 1.93
let imc = calcularIMC(peso, altura)
let classificacao = classificarIMC(imc)


function calcularIMC(peso, altura) {
    return peso / altura**2
}

function classificarIMC(imc) {
    if(imc <=18.5){
        return "Abaixo do peso"
    } else if (imc <=24.9) {
        return "Peso nomal"
    } else if (imc <=29.9) {
        return "Sobrepeso"
    } else if (imc <=34.9) {
        return "Obesidade grau I"
    } else if (imc <= 39.9) {
        return "Obesidade grau II"
    } else {
        return "Obesidade grau III"
    }
}

console.log(`O valor do seu IMC é ${imc} e a classificação é ${classificacao}`)