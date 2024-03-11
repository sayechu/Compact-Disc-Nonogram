let numFilas = 10;
let numColumnas = 10;

let flag = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
           [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
           [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

let vidas = 3;

crearTablero();
actualizarVidas(3);

function crearTablero(){
    let tabla = document.createElement("table");

    for (var i = 0; i <= numFilas; i++){
        let fila = document.createElement("tr");
        for (var j = 0; j <= numColumnas; j++){
            let celda = document.createElement("td");
            let divToCenter = document.createElement("div");
            divToCenter.className = "centered";
            divToCenter.id = i + "" + j;
            if (i == 0 || j == 0) {
                celda.className = "numbered";
                celda.id = i + "_" + j;
            } else {
                celda.className = "blank";
                celda.id = i + "_" + j;
                celda.onclick = function () {
                    if (!tieneImagen(this.id)) {
                        imagen = document.createElement("img");
                        imagen.src = "./img/compactDisc.png";
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
    let contenedorDiv = celdaImagen.querySelector(".centered");
    let elementoImagen = contenedorDiv.querySelector("img");

    if (elementoImagen) {
        return true;
    }
        
    return false;
}

function actualizarVidas(numVidas) {
    let divVidas = document.createElement("div");
    divVidas.id = "vidas";
    for (var i = 0; i < numVidas; i++) {
        let imagenVida = document.createElement("img");
        imagenVida.src = "./img/heartSolid.svg";
        imagenVida.id = i;
        imagenVida.width = "30";
        imagenVida.height = "30";
        divVidas.appendChild(imagenVida);
    }
    if (numVidas != 3) {
        for (var i = numVidas; i < 3; i++) {
            let imagenVidaVacia = document.createElement("img");
            imagenVidaVacia.src = "./img/emptyHeart.png";
            imagenVidaVacia.id = i;
            imagenVidaVacia.width = "30";
            imagenVidaVacia.height = "30";
            divVidas.appendChild(imagenVidaVacia);
        }
    }
    document.body.appendChild(divVidas);
}