<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EduKidGame</title>
        <link rel="stylesheet" href="Recursos/css/estiloComoJugar.css">
        <script src="Recursos/js/script.js"></script>
    </head>
    <body>
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
        </div>
        <!--Fin de Cabecera-->

        <!--Cuerpo (2 Secciones: Instrucciones y Botones de dificultad)-->
        <div class="cuerpo">
            <div class="f1">
                ¿COMO<br>JUGAR?
            </div>
            <div class='f2'>
                <div class="f1">
                <p class='p1'>¿COMO<br>JUGAR?</p>
            </div>
            </div>
            <div class="f3">
                <div class="f1">
                <p class='p1'>¿COMO<br>JUGAR?</p>
            </div>
            </div>
        </div>
        <div class="panal1">
                <img class="panalImg" src="Recursos/img/panal2.png" alt="Panal"/>
            </div>
            <div class="panal2">
                <img class="panalImg" src="Recursos/img/panal2.png" alt="Panal"/>
            </div>
            <div class="panal3">
                <img class="panalImg" src="Recursos/img/panal2.png" alt="Panal"/>
            </div>
    </body>
</html>
