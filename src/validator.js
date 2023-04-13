const validator =  {
  isValid(numerot) { //funcion validar tarjeta - recibe el numero de la tarjeta
    //invertir el numero de la tarjeta 
    const invertido = Array.from(numerot).reverse() //almacena todo el numero invertido y validados 
    //recorrer el array forEach
    invertido.forEach(function(numero, index){  //index es la posicion de cada numero en el array 
      //numero es el numero de la posicion 

      if(index % 2 !== 0){ //si el residuo es diferente a 0
        let numero2 = numero * 2 //multiplica las posiciones pares por dos
        if(numero2 >= 10){ 
          const digitos = Array.from(numero2.toString())//convierte el numero en un texto para luego convertilo en array y digitos tiene 
          numero2 = parseInt(digitos[0]) + parseInt(digitos[1]) //numero2 se convierte en la suma de sus digitos 
        }
        invertido[index] = numero2 //reemplaza el numero original por su multiplicacion
      }
    })
    
    
    let sumaN = 0 //guarda la suma de los digitos de la tarjeta

    invertido.forEach(function(numero){ //recorro nuevamente los digitos de la tarjeta con el foreach
      sumaN += parseInt(numero) //se acumula la suma de cada digito
    
    })
    return sumaN % 10 === 0 //si el resultado de la sumatoria es multiplo de 10 es verdadero
    

  },
  
  maskify(numerot) {
    const numeroEnmascarado = Array.from(numerot) //tomar numero de la tarjeta y lo converti en array
    const limite = numeroEnmascarado.length - 4 //calcular la posicion de los ultimos cuatro numeros. longitud del array siempre tome los ultimos cuatro 
    return numeroEnmascarado.map(function(numero, index){ //index es la posicion de cada numero en el array 
      //map lo convierte en un nuevo array 
      //numero es el numero de la posicion 

      return index < limite ? "#" : numero; //operador ternario, cuando el index sea menor a 12 
      


    }).join("") //unir todos los elementos del array 

  }
};

export default validator;





