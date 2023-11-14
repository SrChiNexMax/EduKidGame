function reproducirBoton() {
    //Funcion para reproducir un sonido con los botones
    var boton = new Audio();
    boton.src = "Recursos/sonido/clic.mp3";
    boton.volume = 0.3;
    boton.play();
}
function Musica() {
    //Funcion para reproducir la musica de la pagina
    document.getElementById("musicaFondo").play();
    var musica = document.getElementById("musicaFondo");
    musica.volume = 0.4;
}

function mostrarDif() {
    // Muestra las dificultades al hacer clic en "Jugar"
    document.getElementById('popupdif').style.display = 'flex';
}

function redirigir(id) {
    // Redirige a la página correspondiente según la opción seleccionada
    if (id === 'pre') {
        window.location.href = 'JugarPRE.jsp';
    } else if (id === 'primaria') {
        window.location.href = 'JugarPRIMARIA.jsp';
    }

    // Oculta el popup después de la redirección
    document.getElementById('popupdif').style.display = 'none';
}

function mostrarTip() {
    var abejaTip = document.getElementById('abejaTip');
    var dialogo = document.getElementById('dialog');
    if (abejaTip.style.right === '-60px') {
        // Si el tip ya está visible, ocúltalo
        abejaTip.style.transition = 'right 1s ease-in-out';
        abejaTip.style.right = '-100%';
        dialogo.style.opacity = '0';
        dialogo.style.transition = 'opacity 1s ease-in-out';
    } else {
        // Si el tip está oculto, muéstralo
        abejaTip.style.right = '-60px';
        dialogo.style.opacity = '1';
        dialogo.style.transition = 'opacity 1s ease-in-out';
    }
}
var panalS = null;

function moverAbeja(panal) {
    var abeja = document.querySelector('.abeja');
    var panalSeleccionado = document.querySelector('.' + panal);

    panalS = panalSeleccionado;

    // Mueve la abeja hacia el panal seleccionado
    abeja.style.transition = 'top 1s ease-in-out, left 1s ease-in-out';
    abeja.style.top = (panalSeleccionado.offsetTop + 20) + 'px';
    abeja.style.left = (panalSeleccionado.offsetLeft + 20) + 'px';

    // Muestra el popup después de 1 segundo (ajusta el tiempo según tus necesidades)
    setTimeout(mostrarPopup, 1000);
}

function mostrarPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    let problemaMatematicoDiv = document.getElementById('problemaMatematicoDiv');
    let problemaMatematico = generarProblemaMatematico();
    problemaMatematicoDiv.innerHTML = "<p class='pProblema'>" + problemaMatematico + "</p>";
    document.getElementById('contenedorRespuesta').style.display = 'flex';
}

function generarProblemaMatematico() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * num1) + 1;
    let operador = Math.random() < 0.5 ? '+' : '-';

    return `${num1} ${operador} ${num2}`;
}
function evaluarRespuesta() {
    // Obtén la respuesta del usuario desde el input
    let respuestaUsuario = document.getElementById('respuestaInput').value;

    // Obtiene el problema matemático actual desde el div
    let problemaMatematicoDiv = document.getElementById('problemaMatematicoDiv');
    let problemaMatematico = problemaMatematicoDiv.textContent;

    // Evalúa la respuesta del usuario
    let resultadoEsperado = eval(problemaMatematico); // Utiliza eval para calcular la respuesta esperada
    let respuestaCorrecta = parseInt(respuestaUsuario) === resultadoEsperado;

    // Muestra un mensaje en el popup según si la respuesta es correcta o incorrecta
    let mensajeFelicitaciones = document.getElementById('mensajeFelicitaciones');
    if (respuestaCorrecta) {
        mensajeFelicitaciones.style.display = 'block';
        mensajeIntento.style.display = 'none';
        document.getElementById('respuestaInput').value = '';
        document.getElementById('contenedorRespuesta').style.display = 'none';
        setTimeout(function () {
            var popup = document.getElementById('popup');
            popup.style.display = 'none';

            if (panalS) {
                panalS.style.filter = 'grayscale(0%)';
            }

            panalS = null;

            mensajeFelicitaciones.style.display = 'none'; // Oculta el mensaje de felicitaciones
        }, 1800);
    } else {
        document.getElementById('respuestaInput').value = '';
        mensajeFelicitaciones.style.display = 'none';
        mensajeIntento.style.display = 'block';
    }
}

function validarInput(input) {
    input.value = input.value.replace(/[^0-9]/g, ''); // Elimina caracteres no numéricos
}
