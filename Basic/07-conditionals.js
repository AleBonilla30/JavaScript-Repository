//condicionales if, else if, else

//if (si)
let age = 33

if (age == 33) {
    console.log("La edad es 33")
}else if (age < 18) {
    console.log("Es menos de edad")
}else{
    console.log("La edad no es 33 ni es menor de edad")
}

//operador ternario
const message = age == 33 ? "La edad es 33" : "La edad no es 33"
console.log(message)

//switch
let day = 7
let dayName
switch (day) {
    case 0:
        dayName = "Lunes"
        break;
    case 1:
        dayName = "Martes"
        break;
    case 2:
        dayName = "Miercoles"
        break;
    case 3:
        dayName = "Jueves"
        break;
    case 4:
        dayName = "Viernes"
        break;
    case 5:
        dayName = "Sabado"
        break;
    case 6:
        dayName = "Domingo"
        break;

    default:
        dayName =  "Numero de dia incorrecto"
        break;
}
console.log(dayName)


