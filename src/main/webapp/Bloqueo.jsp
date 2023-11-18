<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EduKidGame</title>
        <link rel="stylesheet" href="Recursos/css/bloqueo.css">
        <link rel="icon" type="image/svg+xml" href="Recursos/img/icon.svg">
        <script src="Recursos/js/bloqueo.js"></script>
    </head>
    <body onclick="Musica()">
        <!--Cabecera-->
        <div class="Cabezal">
            <a onclick='reproducirBoton()' onmouseover='reproducirBoton()'>
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
        </div>
        <!--Fin de Cabecera-->

        <div class="btnDesbloquear" onclick="mostrarPopup()">
            Desbloquear
        </div>
        
        <div id="popupDesbloquear">
            <p class="pPop">Coloca la contraseña parental:</p>
            <div id="contenedorContra">
                <input type="password" id="inputContra" placeholder="Pon tu contraseña">
                <div class="btnInput" onclick='verificarContra(), reproducirBoton()'>Verificar</div>
            </div>
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
        </div>
        <audio id="musicaFondo" loop>
            <source src="Recursos/sonido/musicaF.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </body>
</html>
