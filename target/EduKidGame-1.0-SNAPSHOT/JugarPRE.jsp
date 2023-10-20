<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EduKidGame</title>
        <link rel="stylesheet" href="Recursos/css/estiloPRE.css">
        <link rel="icon" type="image/svg+xml" href="Recursos/img/icon.svg">
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

        <div class="cuerpo">
            <div class="tip" onclick='reproducirBoton(), mostrarTip()' onmouseover='reproducirBoton()'>
                <img src="Recursos/img/bombilla.png" class="bombilla"/>
                <p>Ayuda</p>
            </div>

            <div id="abejaTip">
                <img src="Recursos/img/tipAbeja.png" class="abejaTipImg">
            </div>

            <div  id="dialog" class="dialogo">
                Suma (+): Debes unir las unidades de cada numero.<Br><br>
                Resta (-): Debes restar las unidades del segundo numero al primero.<br><br>
            </div>

            <div class="col" onclick='reproducirBoton(), mostrarTip()'>
                <img class="colI" src="Recursos/img/colmena.png">
            </div>
            <div class="panal1">
                <img class="panalImg" src="Recursos/img/panal1.png">
            </div>
            <div class="panal2">
                <img class="panalImg" src="Recursos/img/panal.png">
            </div>
            <div class="panal3">
                <img class="panalImg" src="Recursos/img/panal1.png">
            </div>
            <div class="panal4">
                <img class="panalImg" src="Recursos/img/panal.png">
            </div>
            <div class="panal5">
                <img class="panalImg" src="Recursos/img/panal1.png">
            </div>
            <div class="panal6">
                <img class="panalImg" src="Recursos/img/panal.png">
            </div>
            <div class="abeja">
                <img class="abejaImg" src="Recursos/img/abeja.png">
            </div>
        </div>
    </body>
</html>
