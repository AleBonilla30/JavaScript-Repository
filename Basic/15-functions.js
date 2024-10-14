//funciones

//simpe
function myFunc() {
    console.log("Hello, my function")
}

//para imprimirlo 5 veces
for (let i = 0; i < 5; i++) {
    myFunc()
}

//parametros 

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}
myFuncWithParams("Alejandra")

//funciones anonimas, son funciones que no tienen un nombre definido

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Ale Bonilla")

//arrow function es mas consisa de escribir funciones

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

myFunc3("Jorge Amor")

//otra manera de crear funciones

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`) 

myFunc4("Jorge Amor")

//parametros
function suma(a, b) {
    console.log(a + b)
}
suma(5,10)

//valores por defecto 
function defaultSum(a = 0, b= 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(5)

//retorno de valores
function mult(a, b) {
    return a * b 
}
let result = mult(5,10)
console.log(result)

//funciones anidada

function extern() {
    console.log("Funcion externa")
    function intern() {
        
        console.log("Funcion interna")
    }
    intern()//se llama a la funcion interna para que se pueda imprimir 
}

extern()

//funciones de orden superior, son funciones que reciben otras funciones como argumentos 

function applyFunc(func, param) { //se le pasa la funcion y el dato que tiene la funcion que vamos a llamar 
    func(param)//se llama a la funcion
}
applyFunc(myFunc4, "Funcion de orden superior")

//forEach, es una funcion que nos sirve para ejecutar bucles asociados para elementos iterarlos
let myArray = [1,2,4,6,8]

myArray.forEach((value) => console.log(value))

//otra forma de el foreach

myArray.forEach(function (value) {
    console.log(value)
})

