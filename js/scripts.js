//Funções de Mouse
function mouseCima(){
    document.getElementById("teste").innerHTML = "Mouse Em Cima";
    document.getElementById("teste").style.color = "green";
}

function mouseFora(){
    document.getElementById("teste").innerHTML = "Mouse Fora";
    document.getElementById("teste").style.color = "red";
}

function rolando(){
    document.getElementById("teste").innerHTML = "Scroll";
    document.getElementById("teste").style.color = "purple";
}

function clicou(){
    document.getElementById("teste").innerHTML = "Clicou";
    document.getElementById("teste").style.color = "pink";
}

function duploClique(){
    document.getElementById("teste").innerHTML = "Duplo Clique";
    document.getElementById("teste").style.color = "yellow";
}

//Este even to diz que quando você der um clique com o botão direito na janela, você recebera um alerta
window.oncontextmenu = function () {
    document.getElementById("teste").innerHTML = "Botão Direito";
    document.getElementById("teste").style.color = "grey";
}