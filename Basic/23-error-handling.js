//excepcion

/* produce un error
let myObject 
console.log(myObject.email) */

//tratamiento de errores

let  myObject 

//try-catch
try {
    console.log(myObject.email);
    
    console.log("Finaliza la ejecucion sin errores");
    
} catch  {
    console.log("Se ha producido un error");
    
}

//captura del error 
try {
    console.log(myObject.email);
    
} catch (error) {
    console.log("Se ha producido un error", error.message);
    
}

//finally

try {
    console.log(myObject.email);
    
} catch (error) {
    console.log("Se ha producido un error", error.message);
    
}finally{
    console.log("Este codigo se ejecuta siempre");
    
}

//lanzamiento de errores
//throw
function sum(a, b) {
    if (typeof a != Number || typeof b != Number ) {
        console.log("No se pueden sumar estas propiedades");
        
    }
    return  a + b

}

//throw new Error("se ha producido un error");

function sumInteger(a, b) {

    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operacion solo suma numeros")
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operacion solo suma numeros enteros");
        
    }
    if (a == 0 || b == 0) {
        throw new SumIntegerError("Se esta intentando sumar 0", a,b)
    }
    return a + b
    
}


try {
    console.log(sumInteger(5,10));
    console.log(sumInteger("5",10));
    console.log(sumInteger(5,"10"));
    console.log(sumInteger("5","10"));
    
}catch (error) {
    console.log("Se ha producido un error ", error.message);
    
}

//capturar varios tipos de errores

try {
    console.log(sumInteger(5.5,10));
    console.log(sumInteger("5",10));
    //console.log(sumInteger(5,"10"));
    //console.log(sumInteger("5","10"));
    
}catch (error) {

    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo: ", error.message);
        
    }else if (error instanceof Error) {
        console.log("Se ha producido un error ", error.message);
    }
    
    
}

//crear excepciones personalizadas

class SumIntegerError extends Error {
    constructor(message,a,b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a,"+",this.b);
        
    }
}

try {
    console.log(sumInteger(0,10));
    
}catch(error) {
    console.log("Se ha producido un error personalizado:",error.message);
    error.printNumbers()
    
}