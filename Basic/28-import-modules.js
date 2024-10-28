//importacion modulos

import  { add , PI, name, Circle} from "./27-export-modules.js";//aqui hay que importar una a una por el nombre que esta en el archivo de import

import subtract from "./27-export-modules.js";// se le puede cambiar el nombre al ser exportacion por defecto solo lo hace y solo se utiliza el default 
//cuando solo se quiere exportar una cosa por que no se puede volver a utilizar el default tiene que ser unica

//para que funciones la exportacion e importacion hay que poner los archivos en .mjs en lugar de solo js
// o crear un package.json y agregrar el tipo de modulo hay que agregarle a la importarcion.js

console.log(add(5,10));

//propiedades
console.log(PI);
console.log(name);
//clases
let circle = new Circle(10)
console.log(circle.radius);
console.log(circle.area().toFixed(2));//tofixcec(2) le estoy diciendo que muestro solo dos decimales
console.log(circle.perimetro().toFixed(2));



//exportacion default
console.log(subtract(5,10))

//exportacion de clases por defecto

/* let myClass = new subtract()
console.log(myClass);
se puede exportar pero hay que comentar el que ya tenia de substrac
 */

//modulos externos que se llama OS (operative system) solo se puede ejecutar si el fichero cjs no js
const os = require("os");
console.log(os);
