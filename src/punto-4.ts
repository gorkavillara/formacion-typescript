// Definir variables de trabajo
let variable = 12
variable = 90

var varVariable = 12
varVariable = 90

const objeto = {}
// objeto = []

// Palabras reservadas para tipos
type Edad = number
const miEdad: Edad = 21

interface Persona {
    nombre: string
    edad: Edad
}
const yo: Persona = {
    edad: 15,
    nombre: "Gorka"
}

// Palabras reservadas para funciones
function miFuncion(param: string) {
    console.log(param)

    return param.length
}

const resultado = miFuncion("Hola mundo")

console.log(resultado)

// Palabras reservadas para bifurcaciones y control
const valor = -5

if (valor < 0) {
    console.log("El valor es menor que cero")
} else {
    console.log("El valor es mayor que cero")
}

switch (valor) {
    case -5:
        console.log("El valor es -5")
        break
    case 5:
        console.log("El valor es 5")
        break
}

// Palabras reservadas para bucles y estructuras de control
for (let i = 0; i < 5; i++) {
    console.log(i)
}

let val = 0
while (val < 5) {
    console.log(val)
    // val = val + 1
    val++
}

val = 0
do {
    console.log(val)
    // val = val + 1
    val++
} while (val < 5)

// Palabras reservadas para clases y objetos
class Persona {
    edad: Edad
    nombre: string

    constructor() {
        this.edad = 10
        this.nombre = "Gorka"
    }
}
console.log(new Persona())