/* SCRIPT QUE RETORNA A HORA ATUAL */

// Função que coloca um zero a esquerda, caso o número seja menor que zero
function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

// Função que pega os valores e formata a data + hora
function formataData (data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

// Pegando a data atual usando o método construtor
const data = new Date();

// Passando o RETURN da função (formataData) para outra variável
const dataBrasil = formataData(data);

console.log(dataBrasil);