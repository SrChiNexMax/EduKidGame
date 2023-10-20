function reproducirBoton() {
    //Funcion para reproducir un sonido con los botones
    var boton = new Audio();
    boton.src = "Recursos/sonido/clic.mp3";
    boton.volume = 0.3;
    boton.play();
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
