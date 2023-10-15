const formulario = document.querySelector("form")!
const input = document.querySelector("input[name=nombre]") as HTMLInputElement

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    console.log(evento)

    const nombre = input.value
    console.log(nombre)

    localStorage.setItem("username", nombre)
    console.log("El usuario se ha guardado correctamente")

    chequeaDisplay()
})

const divSaludo = document.querySelector("div#saludo") as HTMLDivElement
const spanNombre = document.querySelector("span#nombre") as HTMLSpanElement

const chequeaDisplay = () => {
    const nombreUsuario = localStorage.getItem("username")
    if(!nombreUsuario) {
        divSaludo.style.display = "none"
        return
    }

    divSaludo.style.display = "block"
    formulario.style.display = "none"
    spanNombre.innerText = nombreUsuario
}

chequeaDisplay()