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