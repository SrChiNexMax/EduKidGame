window.onload = function () {
    // Obtener la preferencia del filtro almacenada en localStorage
    var filtroGuardado = localStorage.getItem('filtroDaltonismo');

    // Si hay una preferencia almacenada, aplicarla
    if (filtroGuardado) {
        document.body.className = filtroGuardado;
    }
};
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


function redirigir(id) {
    // Redirige a la página correspondiente según la opción seleccionada
    switch (id) {
        case 'pre':
            window.location.href = 'JugarPRE.jsp';
            break;
        case 'primaria':
            window.location.href = 'JugarPRIMARIA.jsp';
            break;
        case 'ajustes':
            window.location.href = 'Ajustes.jsp';
            break;
    }
}

function iniciarAnimacionBoton() {
    var botones = document.querySelectorAll('.botonNivel');
    botones.forEach(function (boton) {
        boton.addEventListener('mouseover', function () {
            boton.classList.add('flotarBoton');
        });
        boton.addEventListener('mouseout', function () {
            boton.classList.remove('flotarBoton');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    iniciarAnimacionBoton();
});

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

verificarTiempo();

