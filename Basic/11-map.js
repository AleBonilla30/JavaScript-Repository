//map o un diccionario es una coleccion de elemento y cada elemento ya no es unico, cada elemento esta formado por un par esta formado por una clave(key) y valor(value)

//declaracion
let myMap = new Map()
console.log(myMap)

//inicializacion 

myMap = new Map([
    ["name", "Alejandra"],//clave ->valor
    ["email", "ale@gmail.com"],
    ["age", 33]
])

console.log(myMap)

//metodos y propiedades

//set vale es para actualizar un elemento o agregarlo

myMap.set("alias","Ale")
console.log(myMap)
myMap.set("name", "Lisbeth")//no puede haber repetidos en clave por eso se modifica o se agrega un nuevo elemento con set
console.log(myMap)

//get para recuperar el valor 

console.log(myMap.get("name"))

//has para comprobar si existe una clave o no 
console.log(myMap.has("surname"))
console.log(myMap.has("age"))

//delete
myMap.delete("email")//tenemos que utilizar la clave
console.log(myMap)

//keys lo que esta retornando un listado con solo las claves
console.log(myMap.keys())

//tambien puedes sacar la lista de valores
console.log(myMap.values())

//size el tamaño del mapa 
console.log(myMap.size)

//entries muestra un listado de todas las claves y los valores
console.log(myMap.entries())

//clear para borrar todo el mapa 
myMap.clear()
console.log(myMap)


