
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdIngressoDesejada = parseInt(document.getElementById('qtd').value);
    // Verificação para garantir que a quantidade inserida pelo usuário seja um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.
    if (isNaN(qtdIngressoDesejada)) {
        alert('Por favor, insira um número!');
        return;
    } else if (qtdIngressoDesejada <= 0) {
        alert('Por favor, insira um número maior que 0!');
        return;
    }
    if (tipoIngresso == 'pista') {
        comprarPista(qtdIngressoDesejada, tipoIngresso);  
        } else if (tipoIngresso == 'superior') {
            comprarCadeiraSuperior(qtdIngressoDesejada, tipoIngresso);
        } else {
            comprarCadeiraInferior(qtdIngressoDesejada, tipoIngresso);
        }
}

function comprarPista(qtdIngressoDesejada, tipoIngresso) {
    let qtdPistaDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
    // alert(qtdPistaDisponivel);
    if (qtdPistaDisponivel >= qtdIngressoDesejada) {
        // alert(qtdPistaDisponivel, qtdIngressoDesejada)
        qtdPistaDisponivel -= qtdIngressoDesejada;
        document.getElementById('qtd-pista').textContent = qtdPistaDisponivel;
        alert(`Você comprou ${qtdIngressoDesejada} ingressos de ${tipoIngresso}`);
    } else {
        alert('Quantidade de ingressos indisponível!');
    }
}

function comprarCadeiraSuperior(qtdIngressoDesejada, tipoIngresso) {
    let qtdCadeiraSuperiorDisponivel = parseInt(document.getElementById('qtd-superior').textContent);
    // alert(qtdPistaDisponivel);
    if (qtdCadeiraSuperiorDisponivel >= qtdIngressoDesejada) {
        // alert(qtdPistaDisponivel, qtdIngressoDesejada)
        qtdCadeiraSuperiorDisponivel -= qtdIngressoDesejada;
        document.getElementById('qtd-superior').textContent = qtdCadeiraSuperiorDisponivel;
        alert(`Você comprou ${qtdIngressoDesejada} ingressos de ${tipoIngresso}`);
    } else {
        alert('Quantidade de ingressos indisponível!');
    }
}

function comprarCadeiraInferior(qtdIngressoDesejada, tipoIngresso) {
    let qtdCadeiraInferiorDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);
    // alert(qtdPistaDisponivel);
    if (qtdCadeiraInferiorDisponivel >= qtdIngressoDesejada) {
        // alert(qtdPistaDisponivel, qtdIngressoDesejada)
        qtdCadeiraInferiorDisponivel -= qtdIngressoDesejada;
        document.getElementById('qtd-inferior').textContent = qtdCadeiraInferiorDisponivel;
        alert(`Você comprou ${qtdIngressoDesejada} ingressos de ${tipoIngresso}`);
    } else {
        alert('Quantidade de ingressos indisponível!');
    }
}