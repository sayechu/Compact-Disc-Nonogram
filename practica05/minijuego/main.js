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
let numFilas = 10;
let numColumnas = 10;
let vidas = 3;
let disk = true;

play();

function play() {
    let vidas = 3;
    crearTablero();
    mostrarIndices(flag.length);
    crearContenedor();
    mostrarVidas(vidas);
    mostrarSelector();
}

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
                    logicaPrograma(divToCenter, this.id);
                }
            }
            celda.appendChild(divToCenter);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}

function logicaPrograma(divToCenter, idCelda) {
    if (!tieneImagen(idCelda)) {  
        pos = idCelda.split("_");
        if ((flag[pos[0]-1][pos[1]-1] == 1) && disk) {
            imagen = document.createElement("img");
            imagen.src = "./img/compactDisc.png";
            imagen.width = "26";
            imagen.height = "26";
            divToCenter.appendChild(imagen);
        } else if ((flag[pos[0]-1][pos[1]-1] == 0) && !disk) {
            imagen = document.createElement("img");
            imagen.src = "./img/X.png";
            imagen.width = "20";
            imagen.height = "20";
            divToCenter.appendChild(imagen);
        } else {
            eliminarVida();
        }
    }
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

function mostrarVidas(numVidas) {
    let container = document.getElementById("container");

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
    container.appendChild(divVidas);
}

function eliminarVida(){
    imagen = document.getElementById(vidas-1);
    imagen.src = "./img/emptyHeart.png";
    vidas--;
    if (vidas === 0) {
        alert("Game Over!");
    }
}

function crearContenedor() {
    let container = document.createElement("div");
    container.id = "container";

    document.body.appendChild(container);
}

function mostrarSelector() {
    let container = document.getElementById("container");

    let divSelector = document.createElement("div");
    divSelector.id = "selector";

    let imagenDisc = document.createElement("img");
    imagenDisc.src = "./img/compactDisc.png";
    imagenDisc.width = "26";
    imagenDisc.height = "26";
    imagenDisc.id = "imga";
    imagenDisc.onclick = function () {
        if (imagenDisc.src.endsWith("/img/X.png")) {
            imagenDisc.src = "./img/compactDisc.png";
            disk = true;
        } else {
            imagenDisc.src = "./img/X.png";
            disk = false;
        }
    }
    divSelector.appendChild(imagenDisc);

    container.appendChild(divSelector);
}

function calcularIndiceFilaNonograma(row) {
    let counter = 0;
    let sol = "";
    
    for (var i = 0; i < row.length; i++) {
        if (row[i] === 1) {
            counter += 1;
        } else if (counter > 0) {
            sol = sol.concat(counter.toString());
            sol = sol.concat("\n");
            counter = 0;
        }
    }

    if (counter > 0) {
        sol = sol.concat(counter.toString());
    }
    return sol;
}

function mostrarIndices(length) {
    for (var i = 0; i < length; i++) {
        let cellRowToPutIndice = document.getElementById((i + 1) + "_0");
        let cellColumnToPutIndice = document.getElementById("0_" + (i + 1));
        res1 = calcularIndiceFilaNonograma(flag[i]);
        res2 = calcularIndiceFilaNonograma(getColumn(flag, i));
        cellRowToPutIndice.innerText = res1;
        cellColumnToPutIndice.innerText = res2;
    }
}

function getColumn(matrix, columnIndex) {
    let column = [];
    for (var i = 0; i < matrix.length; i++) {
        column.push(matrix[i][columnIndex]);
    }
    return column;
}