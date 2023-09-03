enum Meses {
    Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre
}

Meses.Enero
Meses.Febrero

enum Colores {
    Rojo = "rojo", Azul = "azul", Verde = "verde"
}

console.log(Colores.Rojo)

type Mes = "Enero" | "Febrero" | "Marzo"

const mes: Mes = "Lunes"