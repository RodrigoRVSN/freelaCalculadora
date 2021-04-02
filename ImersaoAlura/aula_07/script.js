var cartaRodrigo = {
    nome: "Roronoa Zoro",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 20
    }
}
var cartaGabrielly = {
    nome: "Ace",
    atributos: {
        ataque: 30,
        defesa: 80,
        magia: 80
    }
}

var cartaMae = {
    nome: "Naruto",
    atributos: {
        ataque: 60,
        defesa: 70,
        magia: 60
    }
}

var cartaMaquina;
var cartaJogador;
var cartas = [cartaRodrigo, cartaGabrielly, cartaMae];

function sortearCarta() {
    var numeroCartaComputador = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaComputador];
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaComputador) {
        numeroCartaJogador == parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    exibirOpcoes();
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes');
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='checkbox' name='atributo' value='" + atributo + "'/>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo');
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert('Você venceu! :3');
    }
    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert('Você Perdeu :(');
    }
    else {
        alert('Houve um empate');
    }
}