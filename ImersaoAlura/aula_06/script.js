var gabi = {
    nome: "Gabrielly",
    vitorias: 9,
    empates: 5,
    derrotas: 1,
    pontos: 0
}
var rodrigo = {
    nome: "Rodrigo",
    vitorias: 1,
    empates: 5,
    derrotas: 9,
    pontos: 0
}

gabi.pontos = calculaPontos(gabi);
rodrigo.pontos = calculaPontos(rodrigo);

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 5 + jogador.empates * 1;
    return pontos;
}

var jogadores = [gabi, rodrigo];

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores) {
    var html = "";
    for (var i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>";
        html += "<td>" + jogadores[i].pontos + "</td>";
        html += "<td><button onClick='adicionarVitoria(" + i + ")' > Vitória</button ></td >"
        html += "<td><button onClick='adicionarEmpate(" + i + ")' > Empate</button ></td >"
        html += "<td><button onClick='adicionarDerrota(" + i + ")' > Derrota</button ></td ></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;

}
function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
}