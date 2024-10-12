//set 


//declaracion

let mySet = new Set() // se tiene que hacer asi

//inicializar con valores
mySet = new Set(["Ale", "Gonzalez", "Bonilla", 33, true])//los datos del set tienen que ir entre corchetes
console.log(mySet)

//metodos comunes

//add y delete
mySet.add("https://github.com/AleBonilla30")//lo añade al final
console.log(mySet)

mySet.delete(true)//hay que indicar cual elemento queremos borrar el valor
console.log(mySet)

//has

console.log(mySet.has("Gonzalez"))

//size
console.log(mySet.size)

//convertir un set a array 
let myArray = Array.from(mySet)
console.log(myArray)

//convertir un array a set
mySet = new Set(myArray)
console.log(mySet)

//diferencias entre set y array 

//los sets no admite duplicados

mySet.add("https://github.com/AleBonilla30")
console.log(mySet)