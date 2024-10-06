updateTime();
let volume = 0.5;

setInterval(updateTime, 1000);
function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Accede a los inputs usando el índice [0]
    document.getElementsByName("hours")[0].value = String(hours).padStart(2, '0'); // Agrega un 0 al principio si es necesario
    document.getElementsByName("minutes")[0].value = String(minutes).padStart(2, '0'); // Agrega un 0 al principio si es necesario
    document.getElementsByName("seconds")[0].value = String(seconds).padStart(2, '0'); // Agrega un 0 al principio si es necesario
}

let Asong;
document.getElementsByName("set")[0].onclick = function () {
    let Ahours = parseInt(document.getElementsByName("Ahours")[0].value);
    let Aminutes = parseInt(document.getElementsByName("Aminutes")[0].value);
    let Aseconds = parseInt(document.getElementsByName("Aseconds")[0].value);
    let value = document.getElementsByName("music")[0].value;

    // Cargar la canción según la opción seleccionada
    if (value == "op1") {
        Asong = new Audio("./ff_audio.mp3");
    } else if (value == "op2") {
        Asong = new Audio("./jazz.mp3");
    } else if (value == "op3") {
        Asong = new Audio("./nuclear.mp3");
    }

    // Iniciar el intervalo para verificar el tiempo
    setInterval(function () {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Comprobar si la hora actual coincide con la hora programada
        if (hours == Ahours && minutes == Aminutes && seconds == Aseconds) {
            Asong.play(); // Reproducir la música
            Asong.volume = volume;
        }
    }, 1000);
};


let song;
document.getElementsByName("music")[0].onchange = function () {
    song.pause();
    if (value == "op1") {
        song = new Audio("./ff_audio.mp3");
    } else if (value == "op2") {
        song = new Audio("./jazz.mp3");
    } else if (value == "op3") {
        song = new Audio("./nuclear.mp3");
    }
}

document.getElementsByName("start")[0].onclick = function () {

    let value = document.getElementsByName("music")[0].value;
    if (value == "op1") {
        song = new Audio("./ff_audio.mp3");
    } else if (value == "op2") {
        song = new Audio("./jazz.mp3");
    } else if (value == "op3") {
        song = new Audio("./nuclear.mp3");
    }

    song.volume = volume;
    song.play();
}

document.getElementsByName("stop")[0].onclick = function () {
    song.pause();
    Asong.pause();
}

document.getElementsByName("volume")[0].addEventListener("input", function () {
    volume = this.value / 10; // Actualiza el volumen actual
    if (song) {
        song.volume = volume; // Ajusta el volumen de la canción actual
    }
    if (Asong) {
        Asong.volume = volume; // Ajusta el volumen de la canción actual
    }
});