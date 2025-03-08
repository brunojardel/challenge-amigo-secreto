//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; //Criação do array que receberá a relação de amigos

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo == "") {
        alert("Digite o nome do amigo");
        return;
    }
    amigos.push(nomeAmigo);
    console.log(amigos);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}


function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo adicionado");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`

    //Código para limpar lista
    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    amigos = [];
}