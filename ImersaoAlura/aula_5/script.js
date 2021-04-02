function adicionarFilme() {
    var filmeFavorito = document.querySelector('#filme');
    var filmeEscolhido = filmeFavorito.value;

    if (filmeEscolhido.endsWith('.jpg')) {
        listarFilmesNaTela(filmeEscolhido);
    }
    else {
        alert('Imagem inválida. Deve-se usar .jpg');
    }
    filmeFavorito.value = "";
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes');
    var elementoFilme = "<img src=" + filme + ">";
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}