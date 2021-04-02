function mentalista(event) {
    var secreto = parseInt(Math.random() * 10);
    var tentativas = 3;
    for (let i = 0; i < tentativas; i++) {
        var chute = document.getElementById('numero').value;
        if (chute == secreto) {

            document.write("<h2>Acertou, parabéns lindo(a) :*</h2>");
            break;
        }
        else if (chute < secreto) {
            document.write("<h2>O número é menor rs</h2>");
        }
        else {
            document.write("<h2>O número é menor rs</h2>");
        }
    }

    if (chute != secreto) {
        document.write("<h2>O número secreto é: </h2>" + secreto);
    }
}
document.getElementById('form').addEventListener('submit', mentalista);