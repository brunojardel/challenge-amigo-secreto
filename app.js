//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; //Criação e inicialização com 0 elementos do array (vetor) que receberá a relação de amigos

//Função para adicionar um novo amigo ao vetor
function adicionarAmigo() { 
    let inputAmigo = document.getElementById('amigo'); //Cria uma variável para apontar para a caixa de textos
    let nomeAmigo = inputAmigo.value; //Lê o conteúdo do campo de texto

    if (nomeAmigo == "") { //Se o campo tiver sido deixado em branco, emite alerta e retorna sem adicionar um novo amigo
        alert("Digite o nome do amigo"); 
        return;
    }
    amigos.push(nomeAmigo); // Adiciona o novo amigo ao array amigos
    console.log(amigos); // Auxilia no console exibindo o vetor atualizado
    inputAmigo.value = ""; //Limpa a caixa de textos
    inputAmigo.focus(); //Retorna o foco para a caixa de textos
    atualizarLista(); //Chama função para atualizar lista
}

//Função para Atualiza a lista de amigos
function atualizarLista() { 
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

//Função para sortear um novo amigo
function sortearAmigo() { 
    if (amigos.length === 0) {                                        //Verifica de o vetor não está vazio para exibir erro
        alert("Nenhum amigo adicionado");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)]; //Sorteia um número aleatório entre 0 e o comprimento do vetor
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`

    //limparLista() //Opção de limpar lista após sorteio - Desabilitada
}

//Função para Limpar Lista
function limparLista() {
    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    resultado.innerHTML = "";
    amigos = [];
}
    