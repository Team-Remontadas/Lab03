function verificarPalabra() {
    var textoIngresado1 = document.getElementById("palabra1").value;
    var palabraCorrecta1 = "Cocina";

    var textoIngresado2 = document.getElementById("palabra2").value;
    var palabraCorrecta2 = "Habitacion";

    var textoIngresado3 = document.getElementById("palabra3").value;
    var palabraCorrecta3 = "Balon";

    var textoIngresado4 = document.getElementById("palabra4").value;
    var palabraCorrecta4 = "Televisor";

    var puntaje = 0;

    if (palabraCorrecta1 == textoIngresado1) {
        document.getElementById("resultado1").innerText = " \n\n¡Palabra acertada!";
        puntaje = puntaje + 1;
    }
    else {
        document.getElementById("resultado1").innerText = "La palabra correcta era: \n\n Cocina";
    }

    if (palabraCorrecta2 == textoIngresado2) {
        document.getElementById("resultado2").innerText = " \n\n¡Palabra acertada!";
        puntaje = puntaje + 1;

    }
    else {
        document.getElementById("resultado2").innerText = "La palabra correcta era: \n\n Habitacion";
    }

    if (palabraCorrecta3 == textoIngresado3) {
        document.getElementById("resultado3").innerText = " \n\n¡Palabra acertada!";
        puntaje = puntaje + 1;

    }
    else {
        document.getElementById("resultado3").innerText = "La palabra correcta era: \n\n Balon";
    }

    if (palabraCorrecta4 == textoIngresado4) {
        document.getElementById("resultado4").innerText = " \n\n¡Palabra acertada!";
        puntaje = puntaje + 1;

    }
    else {
        document.getElementById("resultado4").innerText = "La palabra correcta era: \n\n Televisor";
    }

    document.getElementById("puntaje").innerText = "Puntaje total obtenido: " + puntaje;




}