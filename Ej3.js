creacionTabla(); //Aqui ejecutamos la funcion que definiremos justo abajo
window.setInterval(creacionTabla, 1000); //Esto sin parentesis porque se considera un parametro
function creacionTabla() {
    let tabla = document.getElementById("taula_propietats");
    tabla.innerHTML = `<table border='1px solid black'>
        <tr>
            <td>Valor maximo que puede tener un numero JS</td>
            <td>`+ Number.MAX_VALUE + `</td>
        </tr>
        <tr>
            <td>Altura total de la pantalla</td>
            <td>`+ screen.width + `</td>
        </tr>
        <tr>
            <td>Altura interna de la finestra</td>
            <td>`+ window.innerWidth + `</td>
        </tr>
        <tr>
            <td>URL de la web</td>
            <td>`+ document.URL + `</td>
        </tr>
    </table>`;
}