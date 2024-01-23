let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', "Jogo do número secreto");
    exibirTextoNaTela('p', "Escolha um número entre 1 e 10");
}

exibirMensagemInicial()
function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!!");
        let palavraTentiva = tentativa > 1 ? "Tentativas" : "Tentativa";
        let mensagemTentiva = `Você descobriu o número secreto com ${tentativa} ${palavraTentiva}!`;
        exibirTextoNaTela("p", mensagemTentiva);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor");
        }else{
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativa ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

