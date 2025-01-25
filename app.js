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

function sortearAmigo() {
    console.log("Sortear amigo");

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear. Por favor, añade al menos un nombre.");
        return;
    }
    //Multiplicamos el valor aleatorio por el tamaño del arreglo amigos (amigos.length) 
    // y utilizamos Math.floor() para redondear hacia abajo y obtener un índice válido dentro del rango.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoElemento = document.querySelector('#resultado');
    resultadoElemento.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}