//destructuracion y propagacion

//destructuracion es una sintaxis que permite extraer valores de array o objetos y asignarlas a variables de manera consisa

let myArray = [1,2,3,4]

let person = {
    name: "Alejandra",
    age: 33,
    alias: "aleBo"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName);

//sintaxis en array

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray //cada variable tiene asignado un elemento del array, se acaba desestructurando el array en diferentes variables
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

//sintasis de arrays con valores predeterminado 

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

//ignorar elementos array 
let [myValue10, , , myValue13] = myArray
console.log(myValue10);
console.log(myValue13);
//sirve para intercambiar valores

let a = 1, b = 2
console.log(a);
console.log(b);

/* [a,b] = [b,a]
console.log(a);
console.log(b); */

//sintaxis objects

let {name,age,alias} = person
console.log(name);
console.log(age);
console.log(alias);


//sintasis de obejtos con valores predeterminado 


let {name2,age2,alias2, email = "ale.@gmail.com"} = person
console.log(name2);
console.log(age2);
console.log(alias2);
console.log(email);

let { alias: alias3, name: name3, age: age3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

let { name: name4, job: { name: jobName } } = person3

console.log(name4)
console.log(jobName)

// Propagación (...)

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]

console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objects

let person4 = { ...person, email: "braismoure@mouredev.com" }

console.log(person4)

// Copia de objects

let person5 = { ...person }

console.log(person5)


