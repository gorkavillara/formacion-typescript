const formulario = document.querySelector("form") as HTMLFormElement
const input = document.querySelector("input[name=nombre]") as HTMLInputElement
const saludo = document.querySelector("div#saludo") as HTMLDivElement
const spanNombre = document.querySelector("span#nombre") as HTMLSpanElement
const botonLogout = document.querySelector("button#logout") as HTMLButtonElement

const checkDisplay = () => {
    const nombreUsuario = localStorage.getItem("nombre")
    if (!nombreUsuario) {
        saludo.style.display = "none"
        formulario.style.display = "block"
        return
    }

    saludo.style.display = "block"
    formulario.style.display = "none"

    spanNombre.innerText = nombreUsuario
}

const logout = () => {
    localStorage.removeItem("nombre")
    checkDisplay()
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    const nombre = input.value

    localStorage.setItem("nombre", nombre)

    console.log("El nombre de usuario se ha guardado correctamente")
    checkDisplay()
})

botonLogout.addEventListener("click", logout)

checkDisplay()
