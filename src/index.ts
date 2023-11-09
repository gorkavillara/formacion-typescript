function miDecoradorDeClase(constructor: Function) {
    // Lo que queramos con el constructor
    constructor.prototype.esDesarrollador = true
}
function logueaNombreMetodo(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    const funcionOriginal = target[methodName]

    function funcionConLog(this: any) {
        console.log(`Estamos ejecutando el método ${methodName}`)
        funcionOriginal.apply(this)
    }

    target[methodName] = funcionConLog

    return target
}
function miDecoradorDeParametro(
    target: any,
    nombreDelMetodo: string,
    parameterIndex: number
) {
    console.log(
        `Clase: ${target}, Método: ${nombreDelMetodo}, Índice del parámetro: ${parameterIndex}`
    )
}
function miDecoradorDePropiedad(target: any, nombreDeLaPropiedad: string) {
    console.log({ constructor: target.constructor })
    console.log(`El nombre de la propiedad es: ${nombreDeLaPropiedad}`)
}
// @miDecoradorDeClase
class Personaje {
    @miDecoradorDePropiedad
    nombre: string

    constructor() {
        this.nombre = "Gorka"
    }

    // @logueaNombreMetodo
    saluda() {
        console.log(`Hola mi nombre es ${this.nombre}`)
    }

    hazUnaSuma(a: number, @miDecoradorDeParametro b: number) {
        console.log(`Hola me llamo ${this.nombre} y el resultado es ${a + b}`)
    }
}

const personaje = new Personaje()

//@ts-ignore
console.log(personaje.esDesarrollador)
personaje.saluda()

// personaje.hazUnaSuma(5, 12)
