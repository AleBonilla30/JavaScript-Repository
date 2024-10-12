//tipos de datos llamados primitivos son los datos que se fundamentan nuestra interaccion con el lenguaje son datos basicos y son datos inmutables y que representan un solo valor
/*String (cadena d texto)*/
let myName = "Alejandra Bonilla";
let alias = "Ale";
let email = "ale@gmail.com";

//Numeros
let age = 33; //entero
let height = 1.60; //decimal

//Boolean
let isStudent = true;
let isTeacher = false

//Undefined la variable la hemos declarado pero aun no se le ha asignado un valor y es un tipo de dato primitivo
let UndefinedValue
console.log(UndefinedValue)

//Null esta representando es que intencionadamente que se esta indicando intencionadamente es nula
let nullValue = null

//Symbol son valores unicos que pueden ser utilizados como indentificadores de propiedades
let mySymbol = Symbol ("mySymbol")//parentesis separado 

//BigInt se utiliza cuando intentamos usar un numero muy grande que no puede ser representado con number
let myBigInt = BigInt(13243254365654765767678679988887777)
let myBigInt2 = 13243254365654765767678679988887777n //es otra manera de representar el bigInt

//mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof isTeacher)
console.log(typeof UndefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)
