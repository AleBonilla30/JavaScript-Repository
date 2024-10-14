// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
    console.log(a + b)
}
suma(3,8)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let arrayNumeros = [2,6,87,5,99,3,4,5]

arrayNumeros.sort(function(a,b) {
    return a -b// Si el resultado es negativo, a será colocado antes que b (lo que implica que a es menor que b).a - b hace que sort ordene los números en orden ascendente. Si fuera b - a, los ordenaría en orden descendente.
}) 
console.log(arrayNumeros[arrayNumeros.length-1])

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vocales(params) {
    let vocales = "aeiouAEIOU"
    let contador = 0
    for (let i = 0; i < params.length; i++) {
        if(vocales.includes(params[i])){
            contador++
        }
        
    }
    console.log(`El numero de vocales que tiene son: ${contador}`)
    
}
vocales("Hola, mi nombre es Alejandta y se van a contar las vocales que hay en este string")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let myArrayString = ["perro","gato", "perico","oso panda"]
let strArrayNuevo = []

function convertirMayusculas(array) {
    for (let i = 0; i < array.length; i++) {
        strArrayNuevo.push(array[i].toUpperCase())
    }
    return strArrayNuevo
    
}
console.log(convertirMayusculas(myArrayString))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function numerosPrimos(numero) {
    if (numero <= 1) {
        return false
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false//si tiene el divisor distinto de 1 o de el mismo
        }
        return true //si no tiene divisores
    }

    
}
console.log(numerosPrimos(8))
console.log(numerosPrimos(4))
console.log(numerosPrimos(13))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let arrayNum = [1,2,3,5,78,8,5,6,10,13,14]

function sumaArrayPares(array) {
    let suma1 = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0){
            suma1 += array[i]
        }
    }
    return suma1
}
console.log(sumaArrayPares(arrayNum))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let myArray2 = [1,5,8,9,5,8]

function elevadoAlCuadrado(array) {
    let myArray3 = []
    for (let i = 0; i < array.length; i++) {
        myArray3.push(array[i] ** 2)  
    }
    return myArray3
    
}
console.log(myArray2)
console.log(elevadoAlCuadrado(myArray2))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function cadenaInvertida(cadena) {
    let invertida = ""
    for (let i = cadena.length-1; i >= 0; i--) {
        invertida += cadena[i]
    }
    return invertida
    
}
console.log(cadenaInvertida("Vamos a invertir este texto"))

// 10. Crea una función que calcule el factorial de un número dado