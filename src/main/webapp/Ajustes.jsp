<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EduKidGame</title>
        <link rel="stylesheet" href="Recursos/css/ajustes.css">
        <link rel="icon" type="image/svg+xml" href="Recursos/img/icon.svg">
        <script src="Recursos/js/ajustes.js"></script>
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
        <!--Fin de Cabecera-->
        
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
        </div>

        <div onclick='reproducirBoton(), mostrarPopup()' onmouseover='reproducirBoton()' class="btnContra row col-mx-12">
            Contraseña
        </div>

        <div id="popupContra">
            <div id="contraDinamico">
                <!-- El contenido del problema matemático se llenará dinámicamente-->
            </div>
        </div>

        <div id="mensajeContra">
            <p>
                Contraseña guardada exitosamente
            </p>
        </div>

        <div id="controlVolumen">
            <label for="volumen">Volumen:</label>
            <input type="range" id="volumen" min="0" max="1" step="0.025" onchange="ajustarVolumen()">
        </div>

        <div class="tiempodiv">
            Tiempo disponible para jugar:
            <div class="tiempodiv2">
                <input type="text" id="tiempoInput" placeholder="Tiempo disponible (minutos)" oninput="validarInput(this)">
                <div class="btnGuardar" onclick="guardarTiempo()">Guardar</div>
            </div>
        </div>
        <div id="contadorTiempo"></div>

        <div id="mensajeTiempo">
            <p>
                Tiempo limitado exitosamente
            </p>
        </div>

        <div class="daltonismodiv">
            <label style="text-align: center;">Filtro Daltonismo</label>
            <div class="botonesDaltonismo">
                <div class="btnNormal" onclick="aplicarFiltro('normal')">Sin filtro</div>
                <div class="btnDeu" onclick="aplicarFiltro('deuteranopia')">Deuteranopía</div>
                <div class="btnTrita" onclick="aplicarFiltro('tritanopia')">Tritanopía</div>
                <div class="btnPro" onclick="aplicarFiltro('protanopia')">Protanopía</div>
            </div>
        </div>

        <div class="difdiv">
            Dificultad
            <div class="botonesdif">
                <div class="btnFacil" onclick="aplicarDif('facil')">Facil</div>
                <div class="btnDificil" onclick="aplicarDif('dificil')">Dificil</div>
            </div>
        </div>

        <div id="mensajeDificultad">
            <p>
                Dificultad seleccionada exitosamente
            </p>
        </div>

        <div id="formDiv">
            <form action="https://formsubmit.co/c1bfdbd2307d7e76ef309af743e9537f" method="POST" class="formQueja"/>
            <label>
                Tu Correo:
                <input type="email" name="Correo:" id="formEmail" placeholder="Tu e-mail">
            </label>
            <label>
                Queja/Consulta:
            </label>
            <div class="l1">
                <textarea name="Queja/Consulta" id="mensajeForm"></textarea>
                <button onclick="reproducirBoton()" class="btnEnviar" type="submit">Enviar</button>
            </div>
            <input type="hidden" name="_next" value="http://localhost:8080/EduKidGame/Ajustes.jsp">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_template" value="table">
            </form>
        </div>

        <div id="imagenDiv">
            <img class="indexManual" src="Recursos/img/ManualIndex.jpg" alt="Imagen de Manual de la pagina Index"/>
        </div>
        
        
        <audio id="musicaFondo" loop>
            <source src="Recursos/sonido/musicaF.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <script>
            volumen.value = localStorage.getItem('volumen') || 0.4;</script>
    </body>
</html>
