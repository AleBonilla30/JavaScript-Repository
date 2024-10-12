
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let phrases = "Esto es una frase para poder definir una variable de tipo string"
let myAge = 33;
let imStudent = true
let UndefinedValue
let mySymbol = Symbol ("Hola")
let bigIntNumber = 1233353465467576879798n

// 4. Imprime por consola el valor de todas las variables
console.log(phrases)
console.log(myAge)
console.log(imStudent)
console.log(UndefinedValue)
console.log(mySymbol)
console.log(bigIntNumber)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof phrases)
console.log(typeof myAge)
console.log(typeof imStudent)
console.log(typeof UndefinedValue)
console.log(typeof mySymbol)
console.log(typeof bigIntNumber)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
phrases = "Esta es una nueva cadena de texto"
myAge = 45
imStudent = false
mySymbol = "My Symbol"
bigIntNumber = 7890000000000000000000n
console.log(phrases)
console.log(myAge)
console.log(imStudent)
console.log(UndefinedValue)
console.log(mySymbol)
console.log(bigIntNumber)


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
phrases = 45
myAge = false
imStudent = "Si soy estudiante"
mySymbol = 1.56
UndefinedValue = 'C'
bigIntNumber = 2
console.log(phrases)
console.log(myAge)
console.log(imStudent)
console.log(UndefinedValue)
console.log(mySymbol)
console.log(bigIntNumber)
console.log(typeof phrases)
console.log(typeof myAge)
console.log(typeof imStudent)
console.log(typeof UndefinedValue)
console.log(typeof mySymbol)
console.log(typeof bigIntNumber)
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myString = "Hola, JavaScript"
const myHeight = 1.60
const imTeacher = false
const mySymbol2 = Symbol ("Alejandra")
const UndefinedValue2 = "hola" //esta se tiene que inicializar si no si 
const nullValue = null
const bigNumber = BigInt(122333434455465656565)

console.log(myString)
console.log(myHeight)
console.log(imTeacher)
console.log(mySymbol2)
console.log(UndefinedValue2)
console.log(nullValue)
console.log(bigNumber)

console.log(typeof myString)
console.log(typeof myHeight)
console.log(typeof imTeacher)
console.log(typeof mySymbol2)
console.log(typeof UndefinedValue2)//este se convierte en String 
console.log(typeof nullValue)
console.log(typeof bigNumber)
// 9. A continuación, modifica los valores de las constantes

myString = "Holaaaaaa"// no se puede modificar las constantes
myHeight = 1.75
imTeacher = true
mySymbol2 = "Im working with JavaScript"
UndefinedValue2 = "Ale"
nullValue = 2
bigNumber = 123456789999999n


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse