//strings
//concatenacion 
let myName = "Alejandra"
let greeting = "Hola, " +myName + "!"

console.log(greeting)
console.log(typeof greeting)

//longitud
console.log(greeting.length)

//acceso a caracteres

console.log(greeting[0])
console.log(greeting[6])

//Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Alejandra"))//indice donde ha encontrado la palabra alejandra
console.log(greeting.includes("Alejandra"))//que es lo que incluye la cadena de texto
console.log(greeting.includes("Bonilla"))
console.log(greeting.slice(0,10))//slice sirve para retornar un pedazo de la cadena de texto entre el indice 10 y el indice 10

console.log(greeting.replace("Hola", "Hello"))//remplaza la primera palabra por la segunda

//template literals(plantilla literales)

let message = `Hola, este es mi 
curso de JavaScript` //puedes imprimir los textos con salto de linea

console.log(message)
let email = "ale@gmail.com"

console.log(`Hola, ${myName}! tu email es ${email}.`)//aqui podemos interpolar las variables 

