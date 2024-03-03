let correctAnswers = ["Madrid", "Antoni Gaudí", "Ebro", "El Día de la Hispanidad", "Paella"];
let formNames = ["capital", "arquitecto", "rio", "festividad", "plato"];

function validateForm() {
    contador = 0;
    for (var i = 0; i < correctAnswers.length; i++) {
        if (getSelectedValue(formNames[i]) === correctAnswers[i]) {
            contador++;
        } else {
            document.getElementById(formNames[i]).style.color = "red";
        }
    }
    let form = document.getElementsByName("tipoTestForm")[0];
    let para = document.createElement("p");
    para.innerText = `Número de aciertos: ${contador}`;
    form.appendChild(para)
    return false;
}

function getSelectedValue(questionName) {
    var options = document.getElementsByName(questionName);
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            return options[i].value;
        }
    }
    // Return null if no option is selected
    return null;
}