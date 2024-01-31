let listaNumerosGerados = [];
let tentativas = 1;
let numeroMaximo = 200;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campoIndex = document.querySelector(tag);
    campoIndex.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let tamanhoDaLista = listaNumerosGerados.length

    if (tamanhoDaLista == numeroMaximo) {
        listaNumerosGerados = [];
    }

    if (listaNumerosGerados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }   else {
        listaNumerosGerados.push(numeroEscolhido);
        return numeroEscolhido
    }
}

function mensagemInicial () {
    exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela ('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}
mensagemInicial ();

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}!`
        exibirTextoNaTela ('h1', 'Acertou!');
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', `O número secreto é menor que ${chute}.`);
        }   else {
            exibirTextoNaTela ('p', `O número secreto é maior que ${chute}.`);
        }
        tentativas++
        limparCampo ();
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo ();
    tentativas = 1;
    mensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}