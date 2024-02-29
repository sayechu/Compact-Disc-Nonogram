let personajes = ["Gandalf", "Frodo", "Sam", "Legolas", "Aragorn"];
let personajesUpper = personajes.map(toUpper);

/* https://www.w3schools.com/jsref/dom_obj_text.asp */
inputText = document.createElement("input");
inputText.setAttribute("id", "inputText");
inputText.setAttribute("type", "text");
inputText.setAttribute("name", "inputUser");
inputText.setAttribute("placeholder", "introduce personaje");
document.body.appendChild(inputText);

/* https://www.w3schools.com/jsref/dom_obj_submit.asp */
button = document.createElement("input");
button.setAttribute("type", "submit");
button.setAttribute("value", "enviar");
document.body.appendChild(button);

/* https://www.w3schools.com/jsref/dom_obj_event.asp */
button.addEventListener("click", handler);
para = document.createElement("p");

function handler(){
    input = document.getElementById("inputText").value;
    //console.log(input);
    if (personajesUpper.includes(toUpper(input))){
        //console.log("YAY");
        para.innerText = "Es un personaje de El Señor de los Anillos";
    } else {
        //console.log("N YAY");
        para.innerText = "NO es un personaje de El Señor de los Anillos";
    }
    document.body.appendChild(para);
}

function toUpper (name) {
    return name.toUpperCase();
}