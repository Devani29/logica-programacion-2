function convertirTemperatura() {
    let entradaUsuario;
    let gradosCelsius;
    let esNumValido = false;

    // Bucle para validar que el dato sea número
    while (!esNumValido){
        entradaUsuario = prompt("Ingresa la temperatura en grados Celsius");

        // Convertimos el texto ingresado a número
        gradosCelsius = parseFloat(entradaUsuario);

        // Verifica si la entrada no está vacía y si el resultado es numero valido
        if (entradaUsuario !== null && entradaUsuario.trim() !== "" && !isNaN(gradosCelsius)) {
            esNumValido = true;  // Salimos del bucle
        } else{
            console.log("Error: El dato ingresado no es un número. Por favor intenta de nuevo")
        }
    }

    let fahrenheit = (gradosCelsius * 9/5) + 32;
    let kelvin = gradosCelsius + 273.15;

    console.log("Grados Kelvin: " + kelvin);
    console.log("Grados Fahrenheit: " + fahrenheit);
}

convertirTemperatura();