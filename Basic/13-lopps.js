//loops o bucles repetir un bloque de codigo mientras la condicion sea verdadera

//for
for (let i = 0; i< 5; i++) {
    console.log(`Hola, ${i}`)
}

const numbers = [1,2,3,4,5,6,7,8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

//while
let i = 0
while (i < 5) {
    i++
    console.log(`Hola, ${i}`)
}

/* Bucle infinito 
while(true){
}
*/

//do while
let indice = 0
do {
    
    console.log(`Hello, ${indice}`)
    indice++

}while (indice < 5)

//for of vale para recorrer valores de algo que sea iterable(una estructura de datos)
let myArray = [1,2,3,4]
let mySet = new Set(["Damaris", "Gonzalez", "Bonilla", 35])
let myMap = new Map([
    ["name", "Alejandra"],//clave ->valor
    ["email", "ale@gmail.com"],
    ["age", 33]
])

let myString = "¡Hola, JavaScript!"

for (let valor of myArray) {
    console.log(valor)

}

for (let valor of mySet) {
    console.log(valor)

}
for (let valor of myMap) {
    console.log(valor)

}
for (let valor of myString) {
    console.log(valor)

}


//uso del breack y continue

for(let i = 0; i <10; i++) {

    if (i == 5) {
        continue//no queremos contar el 5
    }else if (i == 7) {
        break
    }
    console.log(`HELLO, JAVAScript, ${i}.`)
}

