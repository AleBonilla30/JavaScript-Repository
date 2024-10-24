// 1. Crea un función que utilice error correctamente

function funcError() {
    console.error("Se ha detectado un error en el codigo");

}
funcError()
// 2. Crea una función que utilice warn correctamente
function funcWarn() {
    console.warn("ADVERTENCIA ⚠")
}
funcWarn()

// 3. Crea una función que utilice info correctamente
function funcInfo() {
    console.info("Esta funcion es para dar mas informacion sobre el codigo")
}

// 4. Utiliza table
let table1 = [
    {Name: "Alejandra Bonilla", Age: 33},
    {Name: "Jorge Amor", Age: 34},
    {Name: "Damaris Gonzalez", Age: 35},
    {Name: "Alma Bonilla", Age: 61},
    {Name: "Jose Gonzalez", Age: 60}
]
console.table(table1)
// 5. Utiliza group
console.group("Usuarios:")
console.log("Nombre: Jorge")
console.log("Email: jor@gmail.com")
console.log("Nombre: Alejandra")
console.log("Email: ale@gmail.com")
console.groupEnd()
// 6. Utiliza time
console.time("Inicio")
for (let i = 0; i < 10000; i++) {  
}
console.timeEnd("Inicio")
// 7. Valida con assert si un número es positivo
let numero = -20

console.assert(numero > 0,"El numero tiene que ser positivo");//hay que ponerle una condicion

// 8. Utiliza count
console.count("click")
console.count("click")
console.count("click")
console.countReset("click")
console.count("clicksss")

// 9. Utiliza trace

// 10. Utiliza clear
console.clear()