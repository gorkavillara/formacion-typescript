type Persona = {
    nombre: string,
    edad: number,
    direccion: {
        calle: string,
        cp: number
    }
}

const yo: Persona = {
    nombre: "Gorka",
    edad: 32,
    direccion: {
        calle: "Calle",
        cp: 12
    }
}

interface Coche { 
    marca: string
    modelo: string
    cv: number
    conduce: (param: boolean) => void
    aparca(param: string): number
}

class Coche implements Coche {
    constructor() {
        this.marca = "BMW"
        this.modelo = "M3"
        this.cv = 450
    }
}

console.log(new Coche())

type CodigoPostal = number | string

// const miCodigoPostal: CodigoPostal = true

interface Forma {
    readonly nombre: string
    color: string
    area?: number
}

const miForma: Forma = {
    nombre: "Cuadrado",
    color: "verde",
}

console.log(miForma)

miForma.color = "azul"

console.log(miForma)

miForma.nombre = "triángulo"

export {}
