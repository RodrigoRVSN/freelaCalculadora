var cartaRodrigo = {
    nome: "Roronoa Zoro",
    som: "/Audio/santoryo.mp3",
    imagem: "https://i.servimg.com/u/f61/20/16/65/61/tm/0f620510.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 20
    }
}
var cartaGabrielly = {
    nome: "Ace",
    som: "/Audio/ace.mp3",
    imagem: "https://pa1.narvii.com/6748/e6aa152b28a441300627a5ad163a23d5ba05950e_128.gif",
    atributos: {
        ataque: 30,
        defesa: 90,
        magia: 85
    }
}

var cartaMae = {
    nome: "Naruto",
    som: "/Audio/rasengan.mp3",
    imagem: "https://i.pinimg.com/originals/98/26/16/98261691bf06ecf67815ff95eee0a87c.jpg",
    atributos: {
        ataque: 60,
        defesa: 70,
        magia: 60
    }
}

var cartaTanjiro = {
    nome: "Tanjiro",
    som: "/Audio/tanjiro.mp3",
    imagem: "https://bot.to/wp-content/uploads/2020/09/tanjiro-music_5f6faced9baaa.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 20
    }
}
var cartaDeku = {
    nome: "Midoryia (Deku)",
    som: "/Audio/deku.mp3",
    imagem: "https://cdn140.picsart.com/338892408045201.gif?to=crop&r=256",
    atributos: {
        ataque: 85,
        defesa: 60,
        magia: 10
    }
}
var cartaNezuko = {
    nome: "Nezuko",
    som: "/Audio/nezuko.mp3",
    imagem: "https://pa1.narvii.com/7340/7855aa402bbbbbcc447bb012374399148d801fcer1-410-498_128.gif",
    atributos: {
        ataque: 60,
        defesa: 60,
        magia: 60
    }
}
var cartaBarba = {
    nome: "Barba Branca",
    som: "/Audio/barba.mp3",
    imagem: "https://c-sf.smule.com/rs-s40/arr/20/36/32f16fe2-0f90-4eae-accc-bb5f4fe982b1.jpg",
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 100
    }
}
var cartaZenitsu = {
    nome: "Zenitsu",
    som: "/Audio/zenitsu.mp3",
    imagem: "https://steamuserimages-a.akamaihd.net/ugc/769475109201589972/E71823B38077FCE158B7083A07263E1D3FC775D6/",
    atributos: {
        ataque: 85,
        defesa: 40,
        magia: 10
    }
}

var cartaMaquina;
var cartaJogador;
var cartas = [cartaRodrigo, cartaGabrielly, cartaMae, cartaBarba, cartaNezuko, cartaTanjiro, cartaDeku, cartaZenitsu];

function sortearCarta() {
    var numeroCartaComputador = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaComputador];
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    while (numeroCartaJogador == numeroCartaComputador) {
        numeroCartaJogador == parseInt(Math.random() * cartas.length);
    }
    cartaJogador = cartas[numeroCartaJogador];
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
    }
    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class = "resultado-final">DERROTA</p>';
    }
    else {
        htmlResultado = '<p class = "resultado-final">EMPATE</p>';
    }
    divResultado.innerHTML = htmlResultado;
    exibeCartaMaquina();
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
    var audio = new Audio(cartaJogador.som);
    audio.play();
    var html = "<div id='opcoes' class = 'carta-status'>"
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';

}