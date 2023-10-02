function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('#resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        // Previne que o navegador atualize ao apertar no botão

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(nome.value, sobrenome.value, peso.value, altura.value);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        console.log(pessoas);
    }


    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();