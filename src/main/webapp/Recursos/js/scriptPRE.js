window.onload = function () {
    // Obtener la preferencia del filtro almacenada en localStorage
    var filtroGuardado = localStorage.getItem('filtroDaltonismo');

    // Si hay una preferencia almacenada, aplicarla
    if (filtroGuardado) {
        document.body.className = filtroGuardado;
    }
};

var ejerciciosCompletados = 0;
var respuestasCorrectas = 0;
var totalEjercicios = 6;

var estadoPanales = {
    panal1: false,
    panal2: false,
    panal3: false,
    panal4: false,
    panal5: false,
    panal6: false
};

var panalS = null;

function reproducirBoton() {
    //Funcion para reproducir un sonido con los botones
    var boton = new Audio();
    boton.src = "Recursos/sonido/clic.mp3";
    boton.volume = 0.3;
    boton.play();
}

function Musica() {
    //Funcion para reproducir la musica de la pagina
    var musica = document.getElementById("musicaFondo");
    document.getElementById("musicaFondo").play();
    var volumenAlmacenado = localStorage.getItem('volumen');
    musica.volume = volumenAlmacenado;
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
    let num1, num2;
    var dif = localStorage.getItem('dificultad');
    switch (dif) {
        case 'facil':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * num1) + 1;
            break;
        case 'dificil':
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * num1) + 1;
            break;
        default:
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * num1) + 1;
            break;
    }
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

        respuestasCorrectas++; // Incrementa el contador de respuestas correctas

        if (respuestasCorrectas === 3) {
            // Solo muestra el mensaje de ánimo cuando el contador de respuestas correctas llega a 3
            setTimeout(mostrarMensajeAnimo, 1800);
        }

        setTimeout(function () {
            var popup = document.getElementById('popup');
            popup.style.display = 'none';

            if (panalS) {
                panalS.style.filter = 'grayscale(0%)';
            }

            panalS = null;

            mensajeFelicitaciones.style.display = 'none'; // Oculta el mensaje de felicitaciones
            mostrarRespuestaCorrecta(problemaMatematico, resultadoEsperado);

        }, 1800);

        ejerciciosCompletados++; // Incrementa el contador de ejercicios completados

        document.getElementById('contadorNumero').innerText = ejerciciosCompletados;

        if (ejerciciosCompletados === totalEjercicios) {
            setTimeout(mostrarDialogoExito, 2000);
        }
    } else {
        document.getElementById('respuestaInput').value = '';
        mensajeFelicitaciones.style.display = 'none';
        mensajeIntento.style.display = 'block';
    }
}

function moverAbeja(panal) {
    // Verificar si el panal ya ha sido seleccionado
    if (estadoPanales[panal]) {
        return;
    }

    var abeja = document.querySelector('.abeja');
    var panalSeleccionado = document.querySelector('.' + panal);

    panalS = panalSeleccionado;

    // Mueve la abeja hacia el panal seleccionado
    abeja.style.transition = 'top 1s ease-in-out, left 1s ease-in-out';
    abeja.style.top = (panalSeleccionado.offsetTop + 20) + 'px';
    abeja.style.left = (panalSeleccionado.offsetLeft + 20) + 'px';

    // Actualizar el estado del panal a seleccionado
    estadoPanales[panal] = true;

    // Muestra el popup después de 1 segundo (ajusta el tiempo según tus necesidades)
    setTimeout(mostrarPopup, 1000);
}


function validarInput(input) {
    input.value = input.value.replace(/[^0-9.,-]/g, ''); // Elimina caracteres no numéricos
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

var jsonUrl = 'Recursos/js/particlesconfig.json';

function mostrarDialogoExito() {
    console.log('Ejercicios completados:', ejerciciosCompletados);

    var dialogoExito = document.createElement('div');
    dialogoExito.className = 'dialogo-exito';
    dialogoExito.innerHTML = '<p>¡Felicidades! Has completado todos los ejercicios con éxito.</p>';
    document.body.appendChild(dialogoExito);

    var particulas = document.getElementById('particles-js');
    particulas.style.display = 'block';

    fetch(jsonUrl)
            .then(response => response.json())
            .then(configParticles => {
                // Llamar a particlesJS con la configuración del JSON
                particlesJS('particles-js', configParticles);

                // Otras funciones y código de tu script...
            })
            .catch(error => {
                console.error('Error al cargar el archivo JSON:', error);
            });

    // Reproducir audio de felicitaciones
    var audioFelicitaciones = document.getElementById('audioFelicitaciones');
    audioFelicitaciones.play();

    // Ocultar el mensaje después de 5 segundos
    setTimeout(function () {
        document.body.removeChild(dialogoExito);
        particulas.style.display = 'none';
    }, 5000);
}

function mostrarMensajeAnimo() {
    if (respuestasCorrectas % 3 === 0 && respuestasCorrectas > 0) {
        // Muestra el mensaje de ánimo solo cuando el contador de respuestas correctas es un múltiplo de 3 y mayor que 0
        var mensajeAnimo = document.createElement('div');
        mensajeAnimo.className = 'dialogo-exito';
        mensajeAnimo.innerHTML = '<p>¡Vas muy bien, sigue así!</p>';
        document.body.appendChild(mensajeAnimo);

        // Muestra la abeja al mismo tiempo que el mensaje de ánimo
        var abejaAnimo = document.createElement('div');
        abejaAnimo.className = 'abeja-animo';
        abejaAnimo.innerHTML = '<img class="abeja-animo-img" src="Recursos/img/abejaPRE.png">';
        document.body.appendChild(abejaAnimo);

        setTimeout(function () {
            document.body.removeChild(mensajeAnimo);
            document.body.removeChild(abejaAnimo);
        }, 1800);
    }
}

let tiempoExpirado = false;

function verificarTiempo() {
    if (tiempoExpirado) {
        return;  // Si el tiempo ya ha expirado, no realizar más verificaciones
    }

    const tiempoInicio = localStorage.getItem('tiempoInicio');
    const tiempoLimite = localStorage.getItem('tiempoLimite');
    const tiempoLimiteMs = tiempoLimite * 60 * 1000;
    const tiempoActual = new Date().getTime();
    const tiempoTranscurrido = tiempoActual - tiempoInicio;
    const tiempoRestanteMs = Math.max(tiempoLimiteMs - tiempoTranscurrido, 0);

    if (tiempoTranscurrido >= tiempoLimiteMs) {
        // Si se alcanza el tiempo límite, bloquea la aplicación
        alert("Tiempo de juego agotado. EduKidGame se bloqueará.");
        tiempoExpirado = true;  // Establecer la bandera de tiempo expirado
        window.location.href = 'Bloqueo.jsp'; // Cambia esto según tus necesidades
    } else {
        // Si no se ha alcanzado el límite, sigue verificando después de un intervalo de tiempo
        setTimeout(verificarTiempo, 1000); // Verifica cada segundo
    }
}

function representarComoManzanas(cantidad) {
    var imagenesManzana = [];

    for (var i = 0; i < cantidad; i++) {
        var imgManzana = document.createElement('img');
        imgManzana.src = 'Recursos/img/manzana.png'; // Reemplaza 'ruta_de_tu_imagen/' con la ruta real
        imgManzana.alt = 'manzana';
        imgManzana.className = 'manzana-img'; // Agrega una clase a la imagen
        imagenesManzana.push(imgManzana);
    }

    return imagenesManzana;
}


function mostrarRespuestaCorrecta(problemaMatematico, respuestaCorrecta) {
    var respuestaCorrectaPopup = document.createElement('div');
    respuestaCorrectaPopup.className = 'dialogo-exito';


    // Agregar texto de retroalimentación
    var textoRetroalimentacion = document.createElement('p');
    textoRetroalimentacion.textContent = 'Retroalimentación';
    respuestaCorrectaPopup.appendChild(textoRetroalimentacion);
    
    // Representar el problema matemático
    for (var i = 0; i < problemaMatematico.length; i++) {
        var caracter = problemaMatematico[i];
        if (!isNaN(caracter)) {
            // Si el caracter es un número, usa la función para representar como manzanas
            var cantidadManzanas = parseInt(caracter);
            var imagenesManzana = representarComoManzanas(cantidadManzanas);

            // Agrega cada imagen de manzana al popup
            imagenesManzana.forEach(function (imagenManzana) {
                respuestaCorrectaPopup.appendChild(imagenManzana);
            });
        } else {
            // Si el caracter no es un número, crea un elemento de texto normal
            var textoNormal = document.createTextNode(caracter);
            respuestaCorrectaPopup.appendChild(textoNormal);
        }
    }

    // Agrega el signo igual (=)
    respuestaCorrectaPopup.appendChild(document.createTextNode(" = "));

    // Representar la respuesta correcta como manzanas
    var imagenesRespuesta = representarComoManzanas(respuestaCorrecta);

    // Agrega cada imagen de manzana al popup
    imagenesRespuesta.forEach(function (imagenManzana) {
        respuestaCorrectaPopup.appendChild(imagenManzana);
    });

    document.body.appendChild(respuestaCorrectaPopup);

    // Oculta el mensaje después de 5 segundos
    setTimeout(function () {
        document.body.removeChild(respuestaCorrectaPopup);
    }, 3000);
}


verificarTiempo();
