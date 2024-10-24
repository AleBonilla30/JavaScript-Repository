//console-log -> para mostrar la inf mas general

console.log("Hola, JavaScript");


//error es para manejar mensaje de error va aparecer en rojo

console.error("Este es un mensaje de error");
console.error("Error al conectarse a la base de datos: ", new Error("conexion fallida")); //se le pueda pasar una exepcion

//warn es de advertencia 
console.warn("Este es un mensaje de advertencia");//lo pone en amarillo


//info un mesnaje de informacion adicional

console.info("Este e un mensaje de informacion adicional")

//table 

let data = [
    ["Alejandra", 33],
    ["Sara", 21]
]
console.table(data)


//imprimir la table con clave valor 

data = [
    {name: "Alejandra", age: 33},
    {name: "Sara", age: 21}
]

console.table(data)

//group y group end 

console.group("Usuario:")
console.log("Nombre: Alejandra");
console.log("Edad: 33");
console.groupEnd()//para cerrar el grupo y poder hacer otro console log de otra cosa 

console.log("assdasd");

//time
console.time("Tiempo de ejecucion")
for (let i = 0; i < 10000; i++) {

    
}
console.timeEnd("Tiempo de ejecucion")//este es para que para la ejecucion y se le tiene que poner el mismo nombre que al pricipio

//assert muestra un mensaje de error si lo que evalua es falso 
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")//hay que meter un mensaje y la condicion

//count cuanta la cantidad de veces  que se ha llamado con una etiqueta especifica

console.count("click")
console.count("click")
console.count("click")
console.countReset("click")//para resetar

//trace muestra el seguimiento de la pila de ejecucion llamado start trace

function funcA() {
    funcB()
}
function funcB(){
    console.trace("seguimiento de la ejecucion")
}
funcA()

//clear

console.clear()
