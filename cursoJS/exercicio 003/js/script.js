// Conversão de tipos

/*
Pedir para o usuário digitar o num1, num2, SOMAR esses valores
e mostrar o resultado, numa nova variável, usando o alert
*/

let num1 = prompt('Digite o primeiro valor:');
num1 = Number(num1);
let num2 = prompt('Digite o segundo valor:');
num2 = Number(num2);

alert(`O resultado da soma é ${num1 + num2}`);