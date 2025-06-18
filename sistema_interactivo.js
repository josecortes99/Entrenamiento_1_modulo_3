console.log("Bienvenido al sistema de registro de Riwi");

let nombre;
let edad;

while (true) {
  nombre = prompt("Ingrese su nombre (solo letras)", "Ej: Ana Pérez");

  const soloLetras = /^[a-zA-Z\s]+$/;

  if (nombre && soloLetras.test(nombre)) {
    break;
  } else {
    alert("Error: El nombre debe contener solo letras y espacios. Intenta nuevamente.");
    console.error("Nombre inválido ingresado.");
  }
}

while (true) {
  edad = prompt("Ingrese su edad", "Solo números");
  edad = parseInt(edad);

  if (!isNaN(edad)) {

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
