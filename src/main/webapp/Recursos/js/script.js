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
