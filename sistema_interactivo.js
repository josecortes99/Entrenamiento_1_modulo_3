/*Mensaje de bienvenida*/
console.log("Bienvenido al sistema de registro de Riwi");

/*Declaracion de variables*/
let nombre;
let edad;

/*Ciclo while para que cuando se ingrese un nombre no valido se repita*/
while (true) {

  /*Se pide al usuario el nombre*/
  nombre = prompt("Ingrese su nombre (solo letras)", "Ej: Ana Pérez");

  /*Variable donde se valida solo letras y espacios*/
  const soloLetras = /^[a-zA-Z\s]+$/;

  /*Validacion nombre solo con letras y espacios*/
  if (nombre && soloLetras.test(nombre)) {
    console.log(`Nombre ${nombre} ingresado correctamente`);
    break;
  } else {
    alert("Error: El nombre debe contener solo letras y espacios. Intenta nuevamente.");
    console.error("Nombre inválido ingresado.");
  }
}

/*Ciclo while para que cuando se ingrese una edad no valido se repita*/
while (true) {

  /*Se pide al usuario la edad*/
  edad = prompt("Ingrese su edad", "Solo números");

  /*Se convierte edad a numero entero*/ 
  edad = parseInt(edad);


  /*Validacion edad solo con nuneros*/
  if (!isNaN(edad)) {

    console.log(`Edad ${edad} ingresada correctamente`);
    
    /*Validaciones de edad*/
    if (edad < 18) {
      console.log(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
      alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    } else {
      console.log(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
      alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
    } break;
  } else {
    alert("Error: La edad debe ser un número válido. Intenta nuevamente.");
    console.error("Edad inválida ingresada.");
  }
}
