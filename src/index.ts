const imagen = document.querySelector("img")!

imagen.addEventListener("load", () => {
    console.log("Anchura de la imagen:", imagen.width)
    console.log("Altura de la imagen:", imagen.height)
})

window.addEventListener("pointerdown", (event) => {
    if (event.button !== 2) return
    event.preventDefault()
    alert("No se puede hacer clic con el botón secundario")
})

const divAzul = document.querySelector("div#div-azul") as HTMLDivElement
// Creamos el evento personalizado.
const eventoPasoRaton = new CustomEvent("eventoPasoRaton")

// Escuchamos el evento.
divAzul.addEventListener("eventoPasoRaton", () => {
    console.log("¡Se ha disparado el evento personalizado!")
})

// Disparamos el evento cuando se pase el ratón por encima del div.
divAzul.addEventListener("mouseover", () => {
    divAzul.dispatchEvent(eventoPasoRaton)
})
