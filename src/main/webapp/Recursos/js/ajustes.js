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
}

function ajustarVolumen() {
    var musica = document.getElementById("musicaFondo");
    var controlVolumen = document.getElementById("volumen");

    // Ajustar el volumen de acuerdo con el valor seleccionado por el usuario
    musica.volume = controlVolumen.value;
    localStorage.setItem('volumen', controlVolumen.value);
}

function mostrarPopup() {
    var popup = document.getElementById('popupContra');
    let contraDinamico = document.getElementById('contraDinamico');

    // Verificar si ya hay una contraseña en el localStorage
    var contraAlmacenada = localStorage.getItem('contra');

    if (contraAlmacenada) {
        // Si hay una contraseña almacenada, mostrar formulario para modificar
        contraDinamico.innerHTML = `
            <p class="pPop">Modifica tu contraseña:</p>
            <div id="contenedorContra">
                <input type="password" id="inputContra" placeholder="Nueva contraseña">
                <div class="btnInput" onclick='modificarContra(), reproducirBoton()'>Modificar</div>
            </div>
        `;
    } else {
        // Si no hay una contraseña almacenada, mostrar formulario para crear
        contraDinamico.innerHTML = `
            <p class="pPop">Ingresa una contraseña:</p>
            <div id="contenedorContra">
                <input type="password" id="inputContra" placeholder="Contraseña">
                <div class="btnInput" onclick='guardarContra(), reproducirBoton()'>Guardar</div>
            </div>
        `;
    }

    popup.style.display = 'block';
}

function guardarContra() {
    //Obtener la contraseña ingresada por el usuario
    var nuevaContra = document.getElementById('inputContra').value;

    // Validar si se ingresó una contraseña
    if (nuevaContra.trim() === '') {
        alert('Por favor, ingresa una contraseña válida.');
        return;
    }

    // Guardar la contraseña en el localStorage
    localStorage.setItem('contra', nuevaContra);

    // Cerrar el popup
    cerrarPopup();
}

function modificarContra() {
    // Obtener la nueva contraseña ingresada por el usuario
    var nuevaContra = document.getElementById('inputContra').value;

    // Validar si se ingresó una contraseña
    if (nuevaContra.trim() === '') {
        alert('Por favor, ingresa una contraseña válida.');
        return;
    }
    // Pedir al usuario que ingrese la contraseña anterior
    var contraAnterior = prompt('Ingresa tu contraseña anterior para confirmar la modificación:');

    // Obtener la contraseña almacenada en el localStorage
    var contraAlmacenada = localStorage.getItem('contra');

    // Validar si la contraseña anterior es correcta
    if (contraAnterior !== contraAlmacenada) {
        alert('La contraseña anterior no es correcta. La modificación no está permitida.');
        return;
    }

    // Modificar la contraseña en el localStorage
    localStorage.setItem('contra', nuevaContra);

    // Cerrar el popup
    cerrarPopup();
}

function cerrarPopup() {
    var popup = document.getElementById('popupContra');
    var mensaje = document.getElementById('mensajeContra');
    popup.style.display = 'none';
    mensaje.style.display = 'block';
    setTimeout(function () {
        mensaje.style.display = 'none'; // Oculta el mensaje
    }, 1600);
}

function validarInput(input) {
    input.value = input.value.replace(/[^0-9.]/g, ''); // Elimina caracteres no numéricos
}

function guardarTiempo() {
    var tiempoLimite = document.getElementById('tiempoInput').value;
    const tiempoInicio = new Date().getTime();
    localStorage.setItem('tiempoLimite', tiempoLimite);
    localStorage.setItem('tiempoInicio', tiempoInicio);
    var mensaje = document.getElementById('mensajeTiempo');
    mensaje.style.display = 'block';
    setTimeout(function () {
        mensaje.style.display = 'none'; // Oculta el mensaje
    }, 1600);
}

function verificarTiempo() {
    const tiempoActual = new Date().getTime();
    const tiempoInicio = localStorage.getItem('tiempoInicio');
    const tiempoLimite = localStorage.getItem('tiempoLimite');
    const tiempoLimiteMs = tiempoLimite * 60 * 1000;
    const tiempoTranscurrido = tiempoActual - tiempoInicio;

    if (tiempoLimite === 0 || tiempoLimite === null) {
        alert("XD");
        setTimeout(verificarTiempo, 1000); // Verifica cada segundo
    } else {
        if (tiempoTranscurrido >= tiempoLimiteMs) {
            // Si se alcanza el tiempo límite, bloquea la aplicación
            alert("Tiempo de juego agotado. EduKidGame se bloqueara.");
            window.location.href = 'Bloqueo.jsp'; // Cambia esto según tus necesidades
        } else {
            // Si no se ha alcanzado el límite, sigue verificando después de un intervalo de tiempo
            setTimeout(verificarTiempo, 1000); // Verifica cada segundo
        }
    }

}

verificarTiempo();


