// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(`${i}. Hello JavaScript`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let numbers = 100
let suma = 0;
for (let i = 1; i <= numbers; i++) {
    suma += i
    
}
console.log(`El resultado de la suma de los 100 numero es : ${suma}.`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 0; i <= 50; i++) {
    if (i %2 == 0){
        console.log(`Los numeros pares son: ${i}`)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArray = ["Jorge", "Alma","Damaris","Jose","Luis","Paloma"]
for (let valor of myArray) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let myString = "Esto es una cadena de texto"
let vocales = "aeiouAEIOU"
let contador = 0

for (let i = 0; i < myString.length; i++) {
    if (vocales.includes(myString[i])) {
        contador++
    }
}
console.log(`El numero de vocales en el texto es: ${contador}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let myArray2 = [1,2,3,4,5,6,7,8,9]
let resultado =1//inicializas en 1
for (let valor of myArray2) {
    resultado *= valor
    
}
console.log(`El resultado de la multiplicacion de todos los numeros es: ${resultado}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let numero = 5

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    console.log(`${numero} X ${i} = ${resultado} `)
    
    
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena = "Hola esto es una cadena de texto que se va a invertir"
let invertida = ""
for (let i = cadena.length-1; i >= 0; i--){
    invertida += cadena[i]
}
console.log(cadena)
console.log(`La cadena invertida es: ${invertida}`)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let number1 = [5,9,6,9,3,2,10,15,18,22,46,35,]
let number3 = []

for (let i = 0; i < number1.length; i++) {
    if (number1[i] > 10) {
        number3.push(number1[i])
    }  
}
console.log(`Los numeros del nuevo array mayores a 10 es: ${number3}`)