// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
class Alumno {
    constructor (name, age, n1,n2,n3){
        this.name = name
        this.age = age
        this.n1 = n1
        this.n2 = n2
        this.n3 = n3

    }
    infAlumno(){
        console.log(`El alumno con nombre: ${this.name}, tiene ${this.age} años.`);
            
    }

    static notaFinal(a,b,c) {
        let nota = (a + b + c) /3
        return console.log(`La nota final del alumno  es: ${nota}`);
    }
    
}

let alumno =  new Alumno("Alejandra Bonilla", 33,6,8,10);
//console.log(alumno);

// 3. Muestra los valores de las propiedades e invoca a la función
Alumno.prototype.toString = function mostrarDatos(){
    let datos = `\nNombre: ${this.name}\n Edad: ${this.age}\n Nota 1: ${this.n1}\n Nota 2: ${this.n2}\n Nota 3: ${this.n3}}}`
    return datos

}
console.log(alumno.toString());
alumno.infAlumno()

// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático
console.log(Alumno.notaFinal(6,9,10))

// 6. Crea una clase que haga uso de herencia

class FigurasGeometricas {

    constructor(name) {
        this.name = name
    }

    calcularPerimetro () {
    }

}

class Circulo extends FigurasGeometricas {
    
    constructor (name, radio){
        super(name)
        this.radio = radio
    }
    calcularPerimetro(){
        const pi = Math.PI
        return 2 * pi * this.radio
    }
    
}



// 10. Sobrescribe un método de una clase que utilice herencia 
class Cuadrado extends FigurasGeometricas {
    
    constructor(name, lado) {
        super(name)
        this.lado = lado
    }

    calcularPerimetro(){
        return 4 * this.lado
    }
    
}

let circulo1 = new Circulo("Circulo", 6)

console.log(`El perimetro de un ${circulo1.name} es: ${circulo1.calcularPerimetro()}`);

let cuadrado = new Cuadrado("Cuadrado", 7)

console.log(`El perimetro de un ${cuadrado.name} es: ${cuadrado.calcularPerimetro()}`);

// 7. Crea una clase que haga uso de getters y setters

class Login {
    #email
    #pass

    constructor(email, pass) {
        this.#email = email
        this.#pass = pass
    }

    get email() {
        return this.#email
    }
    set email(email) {
        this.#email = email
    }

    get pass() {
        return this.#pass
    }

    set pass(pass) {
        this.#pass = pass
    }

    mostrarDatos() {
        console.log(`Tu email es : ${this.#email}`);
        console.log(`Tu password es : ${this.#pass}`);
        
    }
}
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
let login = new Login("ale.bonilla@gmail.com", 123455666)
console.log(login.email)
console.log(login.pass);
login.email = "lis@gmail.com"

login.mostrarDatos()



