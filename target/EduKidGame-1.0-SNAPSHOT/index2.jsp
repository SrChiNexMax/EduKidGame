<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EduKidGame</title>
        <link rel="stylesheet" href="Recursos/css/estilo.css">
    </head>
    <body>
        <!--Cabecera-->
        <div>
            <a class="logo" href="index.jsp">
                <div class="svg-logo-div">
                    <img src="Recursos/img/bee.svg" alt="Logo EduKidGame"/>
                    <svg>
                </div>
                <div class="titulo">
                    EduKidGame
                </div>
            </a>
        </div>
        <!--Fin de Cabecera-->

        <!--Cuerpo (2 Secciones: Instrucciones y Botones de dificultad)-->
        <div class="cuerpo">
            <div class="d1">
                <h1>¿Como jugar?</h1>
                <p>
                    Para empezar a jugar debes seleccionar una de las 2 dificultades <em><strong>PRE ESCOLAR</strong></em> o <em><strong>PRIMARIA</strong></em>
                </p>
                    Se te mostrara panales de abeja en el que debes solucionar las operaciones matemáticas (+ - x /) hasta llegar a la colmena.
                <p>
                <h3><strong>PRE ESCOLAR</strong></h3>Debes resolver operaciones matemáticas de sumas y restas (+ y -)
                <h3><strong>PRIMARIA</strong></h3>Debes resolver operaciones matemáticas de sumas, restas, multiplicación y división (+ - x /)
                </p>
            </div>
            <div>
                x
            </div>
            <video autoplay muted loop class="fondovideo">
                <source src="Recursos/img/vfondo.mp4" type="video/mp4">
            </video>
        </div>
    </body>
</html>
