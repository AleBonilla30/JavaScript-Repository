//operadores se utilizan para relacionar esos datos, operar con esos valores

//Operadores aritmeticos 
let a = 5
let b = 10
console.log(a + b)//suma
console.log(a - b)//resta
console.log(a * b)//multiplicacion
console.log(a / b)//division

console.log(a % b)//modulo, resto de la division
console.log(a ** b)//exponente

console.log(a++)//incremento 
console.log(b--)//decremento


//operadores de asignacion

let myVariable = 2 
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable -=2
myVariable *=2
myVariable /=2
myVariable %=2
myVariable **=2

//operadores de comparacion 
console.log(a > b)
console.log(a < b)
console.log(10 >= 10)
console.log(a <= b)
console.log(a == 6)//igualdad por valor
console.log(a == "6")
console.log(a === a)//igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")//esto es false por que no es igual el tipo
console.log(a != 6)//distinto
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = true
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")

