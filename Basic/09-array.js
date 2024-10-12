//array

//declaracion
let myArray = []
let myArray2 = new Array()

//inicializacion
myArray = [1]
myArray2 = new Array(1)//le esta reservando un hueco
console.log(myArray)
console.log(myArray2)

myArray = [1,2,4,6,8]
myArray2 = new Array(1,2,4,6,8)
console.log(myArray)
console.log(myArray2)

myArray = ["Ale", "Eva", "Bonilla", "Gonzalez"]
myArray2 = new Array("Ale", "Eva", "Bonilla", "Gonzalez")
console.log(myArray)
console.log(myArray2)

//se puede mezclaro palabras, numeros y booleanos

myArray = ["Ale", "Eva", "Bonilla", "Gonzalez",33,true]
myArray2 = new Array("Ale", "Eva", "Bonilla", "Gonzalez",33,false)
console.log(myArray)
console.log(myArray2)

//poner los datos poco a poco 

myArray2 = new Array(3)
myArray2[0] = "Alejandra"
myArray2[1] = "Gonzalez"
myArray2[2] = "Bonilla"

console.log(myArray2)


//metodos comunes push y pop

//push esta es la que sirve para introducir elementos en el array
myArray = []
myArray.push("ALE")
myArray.push("BONILLA")
myArray.push("Gonzalez")
myArray.push(37)

console.log(myArray)

//pop elimina el ultimo elemento del array
myArray.pop()
console.log(myArray)

//shift y unshift
console.log(myArray.shift())//asi lo devuelve
myArray.shift() // shift lo que hace es eliminar el primer elemento del array
console.log(myArray)


//el unshift sirve para agregar uno o mas elementos al principio del array
myArray.unshift("Ale",23)
console.log(myArray)

//length

console.log(myArray.length)

//clear para poner el array sin nada solo lo vuelves a inicializar

myArray = []
console.log(myArray)

//slice devolver una copia superficial de una porcion te devuelve un array pero justo con la parte que tu quieres
myArray.push("Ale", "Gonzalez", "Bonilla",33)
let myNewArray = myArray.slice(0,2)//tenemos encuanta el primer indice pero no el ultimo
console.log(myArray)
console.log(myNewArray)

//splice elimina los que estan en el elmento que le hemos indicado en este caso desde el 1 hasta el 3 
// elimina gonzalez, bonilla , 33

myArray.splice(1,3)
console.log(myArray)

myArray = ["Ale", "Gonzalez", "Bonilla",33]
myArray.splice(1,2,"Nueva entrada")//aqui le estas diciendo que te elimines los datos desde la posicion 1 dos elementos y el tercero se lo añades
console.log(myArray)


