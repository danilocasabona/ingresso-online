// 2. Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.
function converterStringParaInt(string) {
    const numero = parseInt(string);
  return numero;
}

// 3. Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.

function calculadora(a, b) {
    let opcaoDesejada = prompt('Qual operação deseja realizar? Digite 1 para adiçao; Digite 2 para subtraçao; Digite 3 para multiplicaçao; Digite 4 para divisao.');
    if (opcaoDesejada == '1') {
        adicao(a, b);
    } else if (opcaoDesejada == '2') {
        subtracao(a, b);
    } else if (opcaoDesejada == '3') {
        multiplicacao(a, b);
    } else if (opcaoDesejada == '4') {
        divisao(a, b);
    } else {
        alert('Opção invalida, tente novamente!')
    }
}

function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

// 4. Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.
let numero = prompt('Digite um numero:');

function parOuImpar(numero) {
    if (numero % 2 == 0) {
        alert('O numero é par!');
        return 'Par';
    } else {
        alert('O numero é impar!');
        return 'Impar';
    }
}

// 5. Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar

let menu = prompt('Digite 1 para converter Celsius para Fahrenheit; Digite 2 para converter Fahrenheit para Celsius');
if (menu == '1') {
    celsiusParaFahrenheit();
} else if (menu == '2') {
    fahrenheitParaCelsius();
} else {
    alert('Opção invalida, tente novamente!')
}
function celsiusParaFahrenheit() {
    let celsius = prompt('Digite a temperatura em Celsius:');
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(`A temperatura em Fahrenheit é ${fahrenheit}`);
}
function fahrenheitParaCelsius() {
    let fahrenheit = prompt('Digite a temperatura em Fahrenheit:');
    let celsius = (fahrenheit - 32) * 5 / 9;
    alert(`A temperatura em Celsius é ${celsius}`); 
}