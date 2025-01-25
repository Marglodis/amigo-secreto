// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.querySelector('#amigo');
    let amigoSecreto = inputAmigo.value.trim();
    if (amigoSecreto == '') {
        alert("Por favor, inserte un nombre");
    }
    else {

        console.log("Amigo secreto: ", amigoSecreto);
        amigos.push(amigoSecreto);
        actualizarLista();
        inputAmigo.value = "";
    }

}

function actualizarLista() {
    const listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(listItem);
    });
}