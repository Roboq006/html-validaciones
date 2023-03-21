import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll('input'); //Seleccionamos todos los inputs

inputs.forEach( input =>{ //Le va agregar el addEventListener DE 'BLUR' cuando salga de foco y cuando salga de foco va a mandar a llamar esta funcion:valida(input.target)
    input.addEventListener('blur',(input)=>{
        valida(input.target);
    })


})