<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EduKidGame</title>
        <link rel="stylesheet" href="Recursos/css/manual.css">
        <link rel="icon" type="image/svg+xml" href="Recursos/img/icon.svg">
        <script src="Recursos/js/manual.js"></script>
    </head>
    <body class="normal" onclick="Musica()" onmouseover="verificarTiempo()">
        <!--Cabecera-->
        <div class="Cabezal">
            <a href="index.jsp">
                <div onclick='reproducirBoton()' onmouseover='reproducirBoton()' class="botonInicio">
                    Inicio
                </div>
            </a>

            <a onclick='reproducirBoton()' onmouseover='reproducirBoton()' href="index.jsp">
                <div class="titulo1">
                    EduKid
                </div>
                <div class="titulo2">
                    Game
                </div>
            </a>
            <div class="abejaCJ">
                <img class="abejaCJI" src="Recursos/img/abejaT.png" alt="Abeja"/>
            </div>
            <div class="circulo"></div>

            <div class="manual" onclick='reproducirBoton(), mostrarManual()' onmouseover='reproducirBoton()'>
                <img src="Recursos/img/manual.png" class="manualimg"/>
                <p>Manual</p>
            </div>

            <div class="soporte" onclick='reproducirBoton(), mostrarSoporte()' onmouseover='reproducirBoton()'>
                <img src="Recursos/img/pregunta.png" class="soporteimg"/>
                <p>Ayuda</p>
            </div>
        </div>

        
        <div id="slider-container">
          <div class="slide">
            <img src="Recursos/img/Interfaz.png" alt="Imagen 1">
            <img src="Recursos/img/Tip.JPG" alt="Imagen 2">
            <img src="Recursos/img/EjercicioPropuesto.png   " alt="Imagen 3">
          </div>
        </div>

        <div class="slider-buttons">
          <button id="prev-btn"> ANTERIOR</button>
          <button id="next-btn">SIGUIENTE</button>
        </div>


        <div>
            <div class="florF1">
                <img class="florImg" src="Recursos/img/flor.png" alt="Girasol"/>
            </div>
            <div class="florF2">
                <img class="florImg2" src="Recursos/img/flor.png" alt="Girasol"/>
            </div>
            <div class="panalF1">
                <img class="panalImg" src="Recursos/img/panal2.png" alt="Panal de Abeja"/>
            </div>
            <div class="panalF2">
                <img class="panalImg" src="Recursos/img/panal2.png" alt="Panal de Abeja"/>
            </div>
            <div class="panalF3">
                <img class="panalImg" src="Recursos/img/panal2.png" alt="Panal de Abeja"/>
            </div>
            <div class="panalF4">
                <img class="panalImg" src="Recursos/img/panal2.png" alt="Panal de Abeja"/>
            </div>
        
        <audio id="musicaFondo" loop>
            <source src="Recursos/sonido/musicaF.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </body>
</html>