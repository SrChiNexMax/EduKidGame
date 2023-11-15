<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EduKidGame</title>
        <link rel="stylesheet" href="Recursos/css/dialogo.css">
        <link rel="icon" type="image/svg+xml" href="Recursos/img/icon.svg">
        <script src="Recursos/js/script.js"></script>
    </head>
    <body onclick="Musica()">

        <div  id="dialog" class="dialogo">
            Oh no!!! El camino hacia la colmena ha desaparecido debido a un hechizo malvado. 
            
            Acompaña a las abejitas en una aventura a través de problemas matemáticos para hallar el camino a casa donde Cada flor revelará un nuevo tramo 

            ¿Podrás completarlo todo? <br><br><br>¡El Valle de las Abejitas cuenta contigo!
        </div>
        <!--Elementos de fondo-->
        
        <div class="botonesNivel">
            <a href="JugarPRE.jsp" onclick='reproducirBoton()' class="botonNivel">Preescolar</a>
            <a href="JugarPRIMARIA.jsp" onclick='reproducirBoton()' class="botonNivel">Escolar</a>
        </div>
        
        
        <div>
            <div class="abejaReina">
                <img class="abejaReinaImg" src="Recursos/img/abejaReina.png" alt="Abeja"/>
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
        <audio id="musicaFondo" loop>
            <source src="Recursos/sonido/musicaF.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </body>
</html>
