// Evento del botón Play
let intervalo;
let audio = new Audio('./ff_audio.mp3');

document.getElementsByName("play")[0].onclick = function () { //getElementsByName te devuelve un array con varios elementos que tengan el mismo name, por eso el [0]
    // Obtener los valores de los inputs usando el atributo "name"
    let minutes = parseInt(document.getElementsByName("minutes")[0].value);
    let seconds = parseInt(document.getElementsByName("seconds")[0].value);

    // Iniciar la cuenta regresiva
    intervalo = setInterval(cuentaAtras, 1000); // Intervalo de 1 segundo
    function cuentaAtras() {
        if (seconds == 0 && minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (seconds > 0) {
            seconds--;
        }

        // Actualizar los valores en los inputs
        document.getElementsByName("minutes")[0].value = minutes;
        document.getElementsByName("seconds")[0].value = seconds;

        // Detener la cuenta regresiva al llegar a 0
        if (minutes == 0 && seconds == 0) {
            clearInterval(intervalo);
            audio.play();
        }
    }
}

document.getElementsByName("pause")[0].onclick = function() {
    clearInterval(intervalo);
}

document.getElementsByName("reset")[0].onclick = function () {
    document.getElementsByName("minutes")[0].value = 0;
    document.getElementsByName("seconds")[0].value = 0;
    clearInterval(intervalo);
}

document.getElementsByName("Smusic")[0].onclick = function () {
    audio.pause();
}