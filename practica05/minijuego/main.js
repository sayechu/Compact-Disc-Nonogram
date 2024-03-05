let numFilas = 10;
let numColumnas = 10;

crearTablero();

function crearTablero(){
    let tabla = document.createElement("table");

    for (var i = 0; i < numFilas; i++){
        let fila = document.createElement("tr");
        for (var j = 0; j < numColumnas; j++){
            // Añadir IF para meter el numero de elementos/bloques que tiene que ir en cada fila
            let celda = document.createElement("td");
            celda.id = i + "" + j;
            celda.onclick = function () {
                alert(this.id);
            }

            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}