//objects todo lo que no es un dato primitivo es un objeto

//sintanxis

let person = {
    name: "Ale",
    age: 33,
    alias: "aleBo",
};

//acceso a las propiedades

//notacion llamada por punto
console.log(person.name);

//notacion de corchetes
console.log(person["name"]);

//modificacion

person.name = "Alejandra Gonzalez";

console.log(person.name);
console.log(typeof person.age);

person.age = "33";

console.log(typeof person.age);

//eliminacion de propiedades
delete person.age;

console.log(person);

//añadir una nueva propiedad

person.email = "ale@gmail.com";
console.log(person);

person["age"] = 33;

console.log(person);

//metodos (functions)

let person2 = {
    name: "Ale",
    age: 33,
    alias: "aleBo",
    walk: function () {
    console.log("La persona camina");
    },
};

person2.walk();

//anidar objetos
let person3 = {
    name: "Ale",
    age: 33,
    alias: "aleBo",
    walk: function () {
    console.log("La persona camina");
        },
    job: {
    name: "programador",
    exp: 1,
    work: function (){
        console.log(`La persona de ${this.exp} años de experiencia trabaja`);//para poder acceder a las propiedad se accede con this
        
        }
    }
};

console.log(person3);
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

//igualdad de objetos 

let person4 = {
    name: "Alejandra Gonzalez",
    age: 33,
    alias: "aleBo",
};

console.log(person);
console.log(person4);

console.log(person == person4); //igualdad por valor
console.log(person === person4);//igualdad por identidad
//llegamos a su referencia en memoria por eso las dos sale false para compararlas hay que acceder a sus propiedades

console.log(person.name == person4.name);

//iteracion a lo que se accede es a las claves
for (let keys in person4) {
    console.log(keys + ":" +person4[keys]);//de esta manera accedes a los valores
    
}

//funciones como objetos (constructores)

function Person (name, age) { //deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Lisbeth", 35)

console.log(person5);

console.log(typeof person5);
console.log(typeof person4);

