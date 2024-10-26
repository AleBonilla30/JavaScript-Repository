//exportacion de modulos -> un modulo es una forma de dividir el codigo en piezas que se puede reutilizar 

export function add(a,b) {
    return a + b
}

console.log(add(5,10));


//propiedades

export const PI = 3.1416

export let name = "Alejandra"

//exportacion de clases
export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    perimetro() {
        return 2 * Math.PI * this.radius
    }
}

//exportacion por defecto se puede exportar a funciones y clases
export default function subtract(a,b) {
    return a - b
}

/* export default class myClass {
    func() {
        console.log("Mi clase");
        
    }
}
 */
