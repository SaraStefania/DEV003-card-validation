import validator from './validator.js';


//capturar los elementos del HTML por medio del id
const numerot = document.getElementById("numerot")
const siguiente1 = document.getElementById("siguiente1")
const siguiente2 = document.getElementById("siguiente2")
const siguiente3 = document.getElementById("siguiente3")
const mensajeValido = document.getElementById("mensajeValido")
const nombre = document.getElementById("nombre")

numerot.addEventListener("keydown", function(event){
  const numbers = ["0","1","2","3","4","5","6","7","8","9", "Backspace"] //guarde en una constante los numeros - array de teclas eprmitidas
  const isNumber = numbers.includes(event.key) //se valida si se presiono una tecla permitida(numeros)
  if(!isNumber){
    event.preventDefault() //se bloquea el evento y no escribe nada
    return; 
  }
  
})

//hacer una funcion de ocultar y mostrar
function ocultar(id) {
  const pre = document.getElementById(id)
  pre.classList.add("oculto")
}
  
function mostrar(id) {
  const pre = document.getElementById(id)
  pre.classList.remove("oculto")
  
}

//crear otra funcion para capturar el valor  del input y con la condicional hacer nula 
//la validacion si la casilla input esta vacia o por el contrario me traslade a la pagina 2
function tarjeta() {
  const datoTarjeta = numerot.value
  if(datoTarjeta === ""){
    alert("Debe ingresar el numero de tarjeta")
  }
  else {
 
    const tarjetaOculta = validator.maskify(datoTarjeta) // guardar el enmascarado
    
    
    if(validator.isValid(datoTarjeta)){ //si al tarjeta es valida oculta la pagina 1 y muestro la pagina 2 con el mensaje
      mostrar("pagina2")
      ocultar("pagina1")
      mensajeValido.innerHTML = nombre.value + " Su tarjeta es valida  " + tarjetaOculta // innerHTML: mostrar un mensaje en el html. Y .value tomar el valor de la casilla
     

    }
    else { //sino muestro el alert que la tarjeta es invalida
      alert(tarjetaOculta + nombre.value + " su tarjeta es invalida")

    }
  }
}



//crear un escuchador que este atento a la interracion del usuario con el boton
siguiente1.addEventListener("click", tarjeta)


//crear otras dos funciones para que se oculte y se muestre las paginas seleccionadas

function paginaa3() {
  mostrar("pagina3")
  ocultar("pagina2")
}
siguiente2.addEventListener("click", paginaa3)


function pagina31() {
  mostrar("pagina1")
  ocultar("pagina3")
}
siguiente3.addEventListener("click", pagina31)

console.log(validator)






