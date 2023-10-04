// Jeito que eu fiz ------------------------------------------------

// function calculoIMC() {
//     const form = document.querySelector('.formDados');
//     const btnCalcular = document.querySelector('#btnCalcular');
//     let aviso = document.getElementById('aviso');

//     function calcular (evento) {
//         evento.preventDefault();

//         let peso = form.querySelector('#peso').value;
//         let altura = form.querySelector('#altura').value;

//         if(!peso && !altura) {
//             console.log('ta de brinks ne');
//             aviso.innerHTML = `Preencha os campos!`
//             aviso.classList.add('invalido');

//         } else if ( (!altura) || (altura < 0.01)) {
//             console.log('Campo Altura vazio');
//             aviso.innerHTML = `Altura inválida!`
//             aviso.classList.add('invalido');

//         } else if ( (!peso) || (peso < 1) ) {
//             console.log('Campo Peso vazio');
//             aviso.innerHTML = `Peso inválido!`
//             aviso.classList.add('invalido');

//         } else {
//             console.log('Pode passa, milady');
//             let imc = (peso / (altura * altura)).toFixed(2);
//             if (imc < 18.5)
//                 aviso.innerHTML = `IMC: ${imc} - Abaixo do peso`;
//             else if (imc >= 18.5 && imc <= 24.5)
//                 aviso.innerHTML = `IMC: ${imc} - Peso normal`;
//             else if (imc >= 25 && imc <= 29.9)
//                 aviso.innerHTML = `IMC: ${imc} - Sobrepeso`;
//             else if (imc >= 30 && imc <= 34.9)
//                 aviso.innerHTML = `IMC: ${imc} - Obesidade grau 1`;
//             else if (imc >= 35 && imc <= 39.9)
//                 aviso.innerHTML = `IMC: ${imc} - Obesidade grau 2`;
//             else if (imc > 40)
//                 aviso.innerHTML = `IMC: ${imc} - Obesidade grau 3`;
            
//             aviso.classList.remove('invalido');
//             aviso.classList.add('preenchido');
//         }
//     }

//     form.addEventListener('submit', calcular);
// }

// calculoIMC();


// Jeito do curso ---------------------------------------------------------

// Capturando evento de submit do formulário
const form = document.querySelector('.formDados');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return; // Sempre que tiver um 'return' a função para
    }

    if (!altura) {
        setResultado('Altura inválido!', false);
        return; // Sempre que tiver um 'return' a função para
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc)

    const msg = `Seu IMC é ${imc} (${nivelIMC})`;

    setResultado(msg, true);
});

// Função para saber o nível da massa corporal
function getNivelIMC (imc) {
    // Criando um objeto que contem todas as frases
    const nivel = ['Abaixo do peso', 'Peso normal',
        'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
        'Obesidade grau 3']

    // Verificando qual vai ser o nível do imc
    if (imc > 39.9) return nivel[5];
    if (imc > 34.9) return nivel[4];
    if (imc > 29.9) return nivel[3];
    if (imc > 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// Função que calcula o IMC
function getIMC(peso, altura) {
    // Calculando IMC
    const imc = peso / altura ** 2;
    // Retornando valor do IMC com 2 casas decimais
    return imc.toFixed(2);
}

// Função para settar resultado
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#aviso');
    // Limpando a div onde aparece o resultado
    resultado.innerHTML = '';
    
    const p = criaP();

    if (isValid) {
        p.classList.add('preenchido');
    } else {
        p.classList.add('invalido');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

// Função para criar o parágrafo com o resultado
function criaP (className) {
    const p = document.createElement('p');
    return p; 
}