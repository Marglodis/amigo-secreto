// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.querySelector('#amigo');
    let amigoSecreto = inputAmigo.value.trim();
    if (amigoSecreto == '') {
        alert("Por favor, inserte un nombre");
    }
    else {

        console.log("Agregar amigo secreto..!!!", amigoSecreto);
        amigos.push(amigoSecreto);
        inputAmigo.value = "";
    }

}
