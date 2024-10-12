// 1. Concatena dos cadenas de texto
let message1 = " Este es mi primer mensaje "
let message2 = "Hola, este es tu mensaje: "+message1+ "!"
console.log(message2)

// 2. Muestra la longitud de una cadena de texto
console.log(message2.length)

// 3. Muestra el primer y último carácter de un string
console.log(message2[0])
console.log(message2[message2.length-1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(message2.toUpperCase())
console.log(message2.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let lines = `Hola, estoy haciendo 
un curso de JavaScript 
con Mouredev
y se aprende mucho`
console.log(lines)
// 6. Interpola el valor de una variable en un string
let myName = "Ale Bonilla"
let myAge = 33

console.log(`Hola, ${myName}, tienes ${myAge} años.`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(message2.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(message2.includes("primer"))

// 9. Comprueba si dos strings son iguales
console.log(message1 == message2)

// 10. Comprueba si dos strings tienen la misma longitud
let mensaje1 = "Hola que tal!"
let mensahe2 = "Tu nombre es?"
console.log(mensaje1.length == mensahe2.length)