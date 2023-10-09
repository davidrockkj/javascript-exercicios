// Pegando a div de class 'paragrafos'
const paragrafos = document.querySelector('.paragrafos');
// Pegando todos as tags 'p' dentro da div 'paragrafos' (nodeList != array)
const ps = paragrafos.querySelectorAll('p');

// Pegando todos os estilos computados do body
const estiloBody = getComputedStyle(document.body);
// Salvando a cor do body numa variável
const corBody = estiloBody.backgroundColor;

// Iterando (percorrendo) a nodeList 'ps'
for (let p of ps) {
    // Adicionando o backgroundColor 'corBody' em todos as tags 'p'
    p.style.backgroundColor = corBody;
    // Adicionando a color 'white' em todos as tags 'p'
    p.style.color = 'white';
}