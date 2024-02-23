const form = document.getElementById('form-contato')
const nome = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarContato();
    atualizaAgenda();
});

function adicionarContato() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if (nome.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já foi inserido`);
    } else {
        nome.push(inputNomeContato.value);

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}`;
        linha += `<td>${inputNumeroContato.value}`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
}


function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}