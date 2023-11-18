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
    document.getElementById("musicaFondo").play();
}

function mostrarPopup() {
    var popup = document.getElementById('popupDesbloquear');
    popup.style.display = 'block';
}

function verificarContra() {
    var contraAlmacenada = localStorage.getItem('contra');
    var contraIngresada = document.getElementById('inputContra').value;
    var popup = document.getElementById('popupDesbloquear');
    if (contraIngresada === contraAlmacenada) {
        var popup = document.getElementById('popupDesbloquear');
        popup.style.display = 'none';

        //Setea el tiempoLimite en 0
        localStorage.setItem('tiempoLimite',null);
        // Contraseña correcta, redirigir a index.jsp
        window.location.href = 'index.jsp';
    } else {
        // Contraseña incorrecta, mostrar un mensaje de error o tomar otra acción
        alert('Contraseña incorrecta. Intentelo denuevo.');
    }
}

window.onload = function () {
    // Obtener la preferencia del filtro almacenada en localStorage
    var filtroGuardado = localStorage.getItem('filtroDaltonismo');

    // Si hay una preferencia almacenada, aplicarla
    if (filtroGuardado) {
        document.body.className = filtroGuardado;
    }
};