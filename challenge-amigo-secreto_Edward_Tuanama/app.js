//Inicia declarando una variable de tipo array
let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo() {
    //Capturar el valor del campo de entrada:
    const capturar = document.getElementById('amigo');
    const nombre = capturar.value.trim().replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    
    //Validar la entrada:
    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }
    const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    if (amigos.includes(nombreFormateado)) {
        alert("Este amigo ya está en la lista");
        return;
    }
    //Actualizar el array de amigos:
    amigos.push(nombreFormateado);
    console.log('Amigos:', amigos);
    mostrarAmigos();
    limpiarCaja();
    actualizarEstadoBotones();
}

//Limpiar el campo de entrada:
function limpiarCaja(){
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML.
function mostrarAmigos() {
    //Obtener el elemento de la lista: 
    let lista = document.getElementById('listaAmigos');
    let listaMostrada = '';
    
    //Iterar sobre el arreglo:
    for (let i = 0; i < amigos.length; i++) {
    //Agregar elementos a la lista:
        listaMostrada += `<li>${amigos[i]}</li>`;
    }
    
    lista.innerHTML = listaMostrada;
}

function sortearAmigo() {
    //Limpiar la lista existente:
    let lista = document.getElementById('listaAmigos'); lista.innerHTML = "";
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos amigos primero.");
        return;
    }
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    let amigoSecreto = document.getElementById('resultado');
    amigoSecreto.innerHTML = `<li>¡El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>!</li>`;

    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJuego() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    limpiarCaja();
    actualizarEstadoBotones();
}

function actualizarEstadoBotones() {
    const botonReiniciar = document.getElementById('reiniciar');

    if (amigos.length === 0) {
        botonReiniciar.setAttribute('disabled', 'true');
    }
}

// Activar la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});



