// Lista dos elemetos
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

// Pegando a classe pai
const principalDiv = document.getElementById('principal');
// Criando a div nova
const divNova = document.createElement('div');

    // Iterando (percorrendo) a lista Elementos
    for (let i = 0; i < elementos.length; i++) {
        // Salvando a tag na variável
        let tagObj = elementos[i].tag;
        // Salvando o texto na variável
        let textoObj = elementos[i].texto;

        /* JEITO DO CURSO
        // Usando Associação por Desestruturação ficaria assim:
        let { tag, texto } = elementos[i];
        // Criando a tag (msm jeito que eu fiz)
        let tagCriada = document.createElement(tag);
        // O texto também é um elemento, então dá pra criar
        let textoCriado = document.createTextNode(texto);
        
        // Adicionando o texto na tag criada
        tagCriada.appendChild(textoCriado);
        // Adicionando a tag criada no container
        div.appendChild(tagCriada);
        */

        // Criando o novo elemento (tag definida pela variável)
        const tag = document.createElement(`${tagObj}`);
        // Adicionando o texto no elemento
        tag.innerHTML = `${textoObj}`;
        // Implementando o novo elemento na div nova
        divNova.appendChild(tag)
        // Implementando a div nova na div pai
        principalDiv.appendChild(divNova);
    }
