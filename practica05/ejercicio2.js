let nombre = window.prompt("Introduce tu nombre: ");
let edad = window.prompt("Introduce tu edad: ");
let profesion = window.prompt("Introduce tu profesion: ");

para = document.createElement("p");
para.innerText = `Nombre: ${nombre}; Edad: ${edad}; Profesion: ${profesion}`;
document.body.appendChild(para);