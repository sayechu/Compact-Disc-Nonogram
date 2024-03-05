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
            celda.className = "blank";
            celda.id = i + "_" + j;
            celda.onclick = function () {
                //alert(this.id);
                celdaImagen = document.getElementById(this.id);
                imagen = document.createElement("img");
                imagen.src = "./compactDisc.png";
                imagen.width = "29";
                imagen.height = "29";
                celdaImagen.appendChild(imagen);
            }

            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}