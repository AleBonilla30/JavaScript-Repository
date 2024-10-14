// 1. Crea un array que almacene cinco animales

let myArray = ["Perro", "Panda", "Oso polar","Gato"]

// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Perico")
myArray.push("Serpiente")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(3,1)//aqui le digo que me elimine el de la posicion 3 1 elemento
console.log(myArray)


// 4. Crea un set que almacene cinco libros
let mySet = new Set(["Harry potter y la camara secreta","IT","El principito","El hombre invisible","Movidik"])

// 5. Añade dos más. Uno de ellos repetido
mySet.add("El poder de las palabras")
mySet.add("El principito")//no se agrega

console.log(mySet)

// 6. Elimina uno concreto a tu elección
mySet.delete("Movidik")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
    ["Enero", 1],
    ["Febrero", 2],
    ["Marzo", 3],
    ["Abril", 4],
    ["Mayo", 5],
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.has("Mayo"))
console.log(myMap.get("Mayo"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let mesesVerano = ["Junio", "Julio", "Agosto"]
myMap.set("Meses verano", mesesVerano)
console.log(myMap.get("Meses verano"))
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 = ["Ale","Bonilla",33]//creas el array
let mySet2 = new Set(myArray2)//creas el set y transformas el array en set 

myMap.set("Mi set", myArray2)
console.log(myMap)