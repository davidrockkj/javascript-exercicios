alert('Mensagemzinha só pra dale.') // Retorna undefined (nada)
// alert nao aparece no node
// alert é um atalho para window.alert

window.confirm('Deseja, realmente, cancelar?'); // Retorna True ou False


window.prompt('Digite o seu nome:'); // Retorna o valor digitado

// Para armazenar o valor retornado, basta inicializar uma variável
const confirmado = confirm('TU confirma a parada ai?');
console.log(confirmado);