"use scrict";
//1. Clasica

function operacionPotencia(/* recibir argumentos o parametros*/base,potencia){
    return Math.pow(base, potencia);    
}

//invocacion
const resultado = operacionPotencia(2,3);
console.info(resultado);
console.log(operacionPotencia(10,4));

//2.Flecha

const operacionFactorial = (numero) => {
    let resultado = 1;
    for (let i = 1; i<=numero; i++) {
        resultado *= i;
    }
    return resultado;
}  

const opreacionSuma = (num1,num2) => num1 + num2;

//3.Funcion tipo objeto

const numero1 = 10;
const numero2 = 2;
const result = new Function(
    "num1", "num2", "return num1 + num2"
);
console.log(result(numero1, numero2));