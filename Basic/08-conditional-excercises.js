// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Maria"



if (myName == "Alejandra") {
    console.log(myName)
}else{
    console.log("No te llamas alejandra")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "AleBo"
let password = 12345

if (user == "AleBo" && password == 12345) {
    console.log("Bienvenido, inicio de sesion correctamente")
}else if (user != "AleBo" && password == 12345) {
    console.log("Usuario incorrecto")
}else if (user == "AleBo" && password != 12345){
    console.log("password incorrecto")

}else{
    console.log("Datos incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -20

if (number > 0) {
    console.log("El numero es positivo")
}else if (number ==0) {
    console.log("El numero es 0")
    
}else {
    console.log("El numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 10

if (age >= 18) {
    console.log("Eres mayor de edad, puedes votar")
}else {
    let num = 18 -age
    console.log(`No puedes votar, tienes ${age} años.. te faltan ${num} años.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let votarEdad = 17
let meensaje 
mensaje = votarEdad == 18 ? "Eres adulto": "Eres menor"
console.log(mensaje)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma


// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes = 2
let estacion
let dias

switch (mes) {
    case 1:
        estacion = "Invierno"
        dias = 31
        break;
    case 2:
        estacion = "Invierno"
        dias = 28
        break;
    case 3:
        estacion = "Invierno"
        dias = 31
        break
    case 4:
        estacion = "Primavera"
        dias = 30
        break
    case 5: 
        estacion = "Primavera"
        dias = 31
        break
    case 6:
        estacion = "Primavera"
        dias = 30
        break
    case 7:
        estacion = "Verano"
        dias = 31
        break
    case 8:
        estacion = "Verano"
        dias = 31
        break
    case 9:
        estacion = "Verano"
        dias = 30
        break
    case 10:
        estacion = "Otoño"
        dias = 31
        break
    case 11:
        estacion = "Otoño"
        dias = 30
        break
    case 12:
        estacion = "Otoño"
        dias = 31
        break

    default:
        console.log("Los dias del mes tiene que ser del 1 al 12")
        break;
}
console.log(estacion)
console.log(mes)
console.log(`El numero de dias que tiene el mes ${mes} es: ${dias} dias...`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7