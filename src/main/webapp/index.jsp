<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EduKidGame</title>
        <link rel="stylesheet" href="Recursos/css/estiloIndex.css">
        <link rel="icon" type="image/svg+xml" href="Recursos/img/icon.svg">
        <script src="Recursos/js/script.js"></script>
    </head>
    <body>
        <div>
            <div class="titulo1">
                EduKid
            </div>
            <div class="titulo2">
                Game
            </div>

            <a href="Dialogo.jsp">
                <div onclick='reproducirBoton()' onmouseover='reproducirBoton()' class="boton1">
                    Jugar
            </div>
            </a>


            <a href="ComoJugar.jsp">
                <div onclick='reproducirBoton()' onmouseover='reproducirBoton()' class="boton2">
                    Como Jugar
                </div>
            </a>
        </div>

        <div id="popupdif" class="popupdif">
            <div class="botondif" onmouseover='reproducirBoton()' onclick="redirigir('pre')">
                PREESCOLAR
            </div>
            <div class="botondif" onmouseover='reproducirBoton()' onclick="redirigir('primaria')">
                PRIMARIA
            </div>
        </div>

        <!--Elementos de fondo-->
        <div>
            <div class="abejaF1">
                <img class="abejaImg" src="Recursos/img/abejaT.png" alt="Abeja"/>
            </div>
            <div class="abejaF2">
                <img class="abejaImg2" src="Recursos/img/abejaT.png" alt="Abeja"/>
            </div>
            <div class="florF1">
                <img class="florImg" src="Recursos/img/flor.png" alt="Girasol"/>
            </div>
            <div class="florF2">
                <img class="florImg2" src="Recursos/img/flor.png" alt="Girasol"/>
            </div>
            <div class="florF3">
                <img class="florImg" src="Recursos/img/flor.png" alt="Girasol"/>
            </div>
            <div class="florF4">
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
    </body>
</html>
