// Variáveis

/*
Criar um programa em que varA = 'A';, varB = 'B' e varC = 'C'.
Mas que varA aponte para o valor de B, varB aponte para o valor de C
e varC aponte para o valor de A
*/

let varA = 'A';
let varB = 'B';
let varC = 'C';
let aux = varA;

varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);

/*
A solução mais moderna consiste em fazer da seguinte maneira:
[varA, varB, varC] = [varB, varC, varA];
*/