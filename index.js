import validator from './validator.js';

//obtener el input (donde el usuario va a escribir)
const inputCard = document.getElementById ("numeroTarjeta")
const labelResult = document.getElementById ("respuesta")
const inputName = document.getElementById ("nombreUsuario")
const labelName = document.getElementById ("nombre")
const labelNumero = document.getElementById ("numero")
const imglogos = document.getElementById ("franchise")

console.log(inputCard)

//al input asignarle un evento para detectar cada vez que cambie
inputCard.addEventListener('input', function (evento) {
    var creditCardNumber = evento.target.value;
    labelNumero.innerText = validator.maskify(creditCardNumber);
    var img = validator.franchise(creditCardNumber);
    imglogos.src = "Imagenes/" + img;
    var valid = validator.isValid(creditCardNumber);
    if (valid) {
        labelResult.innerText = "TARJETA VALIDA"
    } else {
        labelResult.innerText = "TARJETA INVALIDA"
    }
});
inputName.addEventListener('input', function (evento) {
    var name = evento.target.value;
    labelName.innerText = (name + "").toUpperCase();
});



console.log(validator);
