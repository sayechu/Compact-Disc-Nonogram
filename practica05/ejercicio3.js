let minNumber = 1;
let maxNumer = 10;
let num = Math.floor(Math.random() * (maxNumer-minNumber) + minNumber);

let respuesta = window.prompt("Introduce el numero a averiguar");

while (respuesta != num) {
    respuesta = window.prompt("Incorrecto, prueba otra vez!");
}

para = document.createElement("p");
para.innerText = "Respuesta correcta";
document.body.appendChild(para);