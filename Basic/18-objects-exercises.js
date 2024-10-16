// 1. Crea un objeto con 3 propiedades

let alumno = {
    nombre: "Maria",
    edad: 23,
    curso: "DAW"
}

// 2. Accede y muestra su valor

console.log(alumno.nombre);
console.log(alumno.edad);


// 3. Agrega una nueva propiedad
alumno.notaGeneral = 7
console.log(alumno);


// 4. Elimina una de las 3 primeras propiedades
delete alumno.curso
console.log(alumno)

// 5. Agrega una función e invócala
let alumno2 = {
    name: "Juan",
    age: 36,
    notaGeneral: 8,
    hobbie: function () {
        console.log("Juega al tenis");
        
    }
}
alumno2.hobbie();


// 6. Itera las propiedades del objeto

for (let key in alumno2) {
    console.log(key + ":" +alumno2[key])
}

// 7. Crea un objeto anidado
alumno2.practicas = {
    empresa: "Acceture",
    comienzo: "Marzo",
    horas: 370,
    estado: function () {
        console.log(`El alumno esta emocionado por empezar sus practicas en ${this.empresa} el mes de ${this.comienzo}`)
    }
}
for (let key in alumno2) {
    console.log(key + ":" +alumno2[key])
}
// 8. Accede y muestra el valor de las propiedades anidadas
alumno2.practicas.estado();
// 9. Comprueba si los dos objetos creados son iguales
console.log(alumno == alumno2);
console.log(alumno === alumno2);


// 10. Comprueba si dos propiedades diferentes son iguales
console.log(alumno.nombre == alumno2.name)
