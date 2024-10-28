// 1. Exporta una función

function sum(a,b) {
    return a+b;
}

// 2. Exporta una constante
const DNI = "64543212R" ;

// 3. Exporta una clase
class Persona {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

export {
    sum,
    DNI,
    Persona
}



// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior