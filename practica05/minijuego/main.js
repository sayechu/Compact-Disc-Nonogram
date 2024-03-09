let numFilas = 10;
let numColumnas = 10;

crearTablero();

function crearTablero(){
    let tabla = document.createElement("table");

    for (var i = 0; i <= numFilas; i++){
        let fila = document.createElement("tr");
        for (var j = 0; j <= numColumnas; j++){
            let celda = document.createElement("td");
            let divToCenter = document.createElement("div");
            divToCenter.className = "centered";
            if (i == 0 || j == 0) {
                celda.className = "numbered";
                celda.id = i + "_" + j;
            } else {
                celda.className = "blank";
                celda.id = i + "_" + j;
                celda.onclick = function () {
                    if (!tieneImagen(this.id)) {
                        imagen = document.createElement("img");
                        imagen.src = "./compactDisc.png";
                        imagen.width = "26";
                        imagen.height = "26";
                        divToCenter.appendChild(imagen);
                    }
                }
            }
            celda.appendChild(divToCenter);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}

function tieneImagen(idCelda) {
    let celdaImagen = document.getElementById(idCelda);
    let contenedorDiv = celdaImagen.querySelector('.centered');
    let elementoImagen = contenedorDiv.querySelector('img');

    if (elementoImagen) {
        return true;
    }
        
    return false;
}