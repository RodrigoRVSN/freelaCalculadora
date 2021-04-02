var cartaRodrigo = {
    nome: "Roronoa Zoro",
    som: "/Audio/santoryo.mp3",
    imagem: "https://i.servimg.com/u/f61/20/16/65/61/tm/0f620510.jpg",
    atributos: {
        ATAQUE: 90,
        DEFESA: 80,
        MAGIA: 20
    }
}
var cartaGabrielly = {
    nome: "Ace",
    som: "/Audio/ace.mp3",
    imagem: "https://pa1.narvii.com/6748/e6aa152b28a441300627a5ad163a23d5ba05950e_128.gif",
    atributos: {
        ATAQUE: 30,
        DEFESA: 90,
        MAGIA: 85
    }
}

var cartaMae = {
    nome: "Naruto",
    som: "/Audio/rasengan.mp3",
    imagem: "https://i.pinimg.com/originals/98/26/16/98261691bf06ecf67815ff95eee0a87c.jpg",
    atributos: {
        ATAQUE: 60,
        DEFESA: 70,
        MAGIA: 60
    }
}

var cartaTanjiro = {
    nome: "Tanjiro",
    som: "/Audio/tanjiro.mp3",
    imagem: "https://bot.to/wp-content/uploads/2020/09/tanjiro-music_5f6faced9baaa.png",
    atributos: {
        ATAQUE: 80,
        DEFESA: 60,
        MAGIA: 20
    }
}
var cartaDeku = {
    nome: "Midoryia (Deku)",
    som: "/Audio/deku.mp3",
    imagem: "https://cdn140.picsart.com/338892408045201.gif?to=crop&r=256",
    atributos: {
        ATAQUE: 85,
        DEFESA: 60,
        MAGIA: 10
    }
}
var cartaNezuko = {
    nome: "Nezuko",
    som: "/Audio/nezuko.mp3",
    imagem: "https://pa1.narvii.com/7340/7855aa402bbbbbcc447bb012374399148d801fcer1-410-498_128.gif",
    atributos: {
        ATAQUE: 60,
        DEFESA: 60,
        MAGIA: 60
    }
}
var cartaBarba = {
    nome: "Barba Branca",
    som: "/Audio/barba.mp3",
    imagem: "https://c-sf.smule.com/rs-s40/arr/20/36/32f16fe2-0f90-4eae-accc-bb5f4fe982b1.jpg",
    atributos: {
        ATAQUE: 100,
        DEFESA: 100,
        MAGIA: 100
    }
}
var cartaZenitsu = {
    nome: "Zenitsu",
    som: "/Audio/zenitsu.mp3",
    imagem: "https://steamuserimages-a.akamaihd.net/ugc/769475109201589972/E71823B38077FCE158B7083A07263E1D3FC775D6/",
    atributos: {
        ATAQUE: 85,
        DEFESA: 40,
        MAGIA: 10
    }
}

var cartaMaquina;
var cartaJogador;
var cartas = [cartaRodrigo, cartaGabrielly, cartaMae, cartaBarba, cartaNezuko, cartaTanjiro, cartaDeku, cartaZenitsu];

var pontosJogador = 0;
var pontosMaquina = 0;


atualizaPontos();
atualizaCartas();

function atualizaCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas');
    var html = "Quantidade de cartas no jogo: " + cartas.length;
    divQuantidadeCartas.innerHTML = html;
}

function atualizaPontos() {
    var divPlacar = document.getElementById('placar');
    var html = "Jogador " + pontosJogador + " | " + pontosMaquina + " Máquina";
    divPlacar.innerHTML = html;
}

function sortearCarta() {
    var numeroCartaComputador = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaComputador];
    cartas.splice(numeroCartaComputador, 1);

    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    exibeCartaJogador();
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'/>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    var html = "<div id='opcoes' class = 'carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>';

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
    var divResultado = document.getElementById("resultado");
    var atributoSelecionado = obtemAtributoSelecionado();
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class = "resultado-final">VITÓRIA</p>';
        pontosJogador++;
    }
    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class = "resultado-final">DERROTA</p>';
        pontosMaquina++;
    }
    else {
        htmlResultado = '<p class = "resultado-final">EMPATE</p>';
    }
    
    var audio = new Audio(cartaJogador.som);
    audio.play();
    exibeCartaMaquina();
    atualizaPontos();
    atualizaCartas();
    if (cartas.length == 0) {
        alert('Fim das cartas!');
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class = "resultado-final">VOCÊ VENCEU!</p>';
        }
        else if (pontosJogador < pontosMaquina) {
            htmlResultado = '<p class = "resultado-final">VOCÊ PERDEU!</p>';
        }
        else{
            htmlResultado = '<p class = "resultado-final">HOUVE UM EMPAAATE!</p>';
        }
    }
    else {
        document.getElementById('btnProximaRodada').disabled = false;
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById('btnJogar').disabled = true;
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'/>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>";
    }
    var html = "<div id='opcoes' class = 'carta-status'>"
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';

}

function proximaRodada() {
    var divCartas = document.getElementById('cartas');
    divCartas.innerHTML = `<div id="carta-jogador" class = "carta"></div> <div id="carta-maquina" class="carta"></div>`;
    document.getElementById('btnSortear').disabled = false;
    document.getElementById('btnJogar').disabled = true;
    document.getElementById('btnProximaRodada').disabled = true;
    var divResultado = document.getElementById('resultado');
    divResultado.innerHTML = "";
}