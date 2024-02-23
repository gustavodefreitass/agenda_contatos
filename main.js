const form = document.getElementById('form-contato')

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarContato();
    atualizaAgenda();
});

function adicionarContato() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}`;
    linha += `<td>${inputNumeroContato.value}`;
    linha += '</tr>';

    linhas += linha;
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}