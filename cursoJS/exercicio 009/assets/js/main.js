/* Meu jeito ------------------------------------------------------------------------- */

// Função para formatar a data
function formatarData (data) {
    return data >= 10 ? data : `0${data}`;
}

// Função para pegar as informações
function getDadosData (data) {
    const dia = formatarData(data.getDate());
    const mes = data.getMonth();
    const ano = formatarData(data.getFullYear());
    const hora = formatarData(data.getHours());
    const min = formatarData(data.getMinutes());
    const semana = data.getDay();

    function nomeMes (mes) {
        switch (mes) {
            case 0:
                return 'janeiro';
            case 1:
                return 'fevereiro';
            case 2:
                return 'março';
            case 3:
                return 'abril';
            case 4:
                return 'maio';
            case 5:
                return 'junho';
            case 6:
                return 'julho';
            case 7:
                return 'agosto';
            case 8:
                return 'setembro';
            case 9:
                return 'outubro';
            case 10:
                return 'novembro';
            case 11:
                return 'dezembro';
        }
    }

    // Função para pegar o dia da semana
    function diaSemana (semana) {
        switch (semana) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-feira';
            case 2:
                return 'Terça-feira';
            case 3:
                return 'Quarta-feira';
            case 4:
                return 'Quinta-feira';
            case 5:
                return 'Sexta-feira';
            case 6:
                return 'Sábado';
        }
    }

    return `${diaSemana(semana)}, ${dia} de ${nomeMes(mes)} de ${ano} ${hora}:${min}`;
}

// Função para criar HTML
function criarElemento () {
    const paragrafo = document.createElement('h1');
    return paragrafo;
}

// Função pegar a data
function mostrarData () {
    // salvando a data atual - é ela que vai rodar na função getDadosData()
    const data = new Date();
    // passando a data como argumento para a função getDadosData()
    const mensagem = getDadosData(data);
    // pegando a div que vai receber a mensagem
    const container = document.querySelector('.container');

    // criando o elemento h1 (como se eu tivesse salvando um elemento por
    // ID, mas estou criando um na outra função)
    const paragrafo = criarElemento ();
    // passando a mensagem para o elemento
    paragrafo.innerHTML = mensagem;

    // Unindo o elemento criado na div existente
    container.appendChild(paragrafo);
}

mostrarData();






/* Jeito do curso ----------------------------------------------------------------------- */

/*
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full';
    timeStyle: 'short';
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
*/



/* ou ----------------------------------------------------------------------------------- */

/*
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
*/