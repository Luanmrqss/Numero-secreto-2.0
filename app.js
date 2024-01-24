let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroLimite = numeroMaximo;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número secreto");
    exibirTextoNaTela("p", `Escolha um Número entre 1 e ${numeroMaximo}`);
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector("input").value;
 
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa} !`
        exibirTextoNaTela("h1", mensagemTentativas);
        exibirTextoNaTela("p",`O número secreto era ${numeroSecreto}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(chute > numeroSecreto){exibirTextoNaTela("p", "O número secreto é menor");
        }else{
        exibirTextoNaTela("p", "O numero secreto é maior");
    } tentativas++;
    limparCampo()
    }
    
}

function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() *numeroMaximo + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute=document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}