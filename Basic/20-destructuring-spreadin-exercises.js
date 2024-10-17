// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1,2,3,4,5]
let [myValue0, myValue1] = myArray
console.log(myValue0);
console.log(myValue1);


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [myValue2, myValue3, myValue4,myValue5, myValue6, myValue7 = "Hola"] = myArray
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);
console.log(myValue5);
console.log(myValue6);
console.log(myValue7);


// 3. Usa desestructuración para extraer dos propiedades de un objeto
let coche = {
    color: "negro",
    CV: 110,
    puertas: 5
}

let {color, CV, puertas} = coche
console.log(color);
console.log(puertas);


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {CV: cv2, color: color2} = coche
console.log(cv2);
console.log(color2);


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let perro = {
    raza: "Labrador",
    color: "Negro",
    años: 1,
    dueño: {
        nombre: "Ale",
        edad: 33
    }

}

let {raza, años, dueño:{nombre: dueñoName}} = perro
console.log(raza);
console.log(dueñoName);


// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = [7,8,9]
let tuArray = [...myArray, ...myArray2]
console.log(tuArray);


// 7. Usa propagación para crear una copia de un array
let myArray3 = [...myArray2]
console.log(myArray3);


// 8. Usa propagación para combinar dos objetos en uno nuevo
let alumno1 = {
    nombre: "Damaris",
    edad: 35,
    direccion: "dublin",
    nota: 9
}
let alumno2 = {
    nombre: "Ale",
    edad: 33,
    direccion: "España",
    nota: 9
}

let alumnos = {...alumno1, ...alumno2}
console.log(alumnos)
// 9. Usa propagación para crear una copia de un objeto
let alumnos1 = {...alumno1}
console.log(alumnos1);


// 10. Combina desestructuración y propagación