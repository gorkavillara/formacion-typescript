let db: IDBDatabase
const openDB = window.indexedDB.open("db_tareas", 1)

openDB.addEventListener("error", () =>
    console.error("Error abriendo la IndexedDB")
)

openDB.addEventListener("success", () => {
    console.log("IndexedDB abierta correctamente")
    db = openDB.result
})

openDB.addEventListener("upgradeneeded", () => {
    db = openDB.result

    db.onerror = () => {
        console.error("Error creando la IndexedDB.")
    }

    db.createObjectStore("tareas", { keyPath: "id", autoIncrement: true })
})

const tareas = document.querySelector("ol") as HTMLOListElement
const form = document.querySelector("form") as HTMLFormElement
const todoTitle = document.querySelector("#task-name") as HTMLInputElement

const muestraTareas = () => {
    const transaction = db.transaction(["tareas"], "readwrite")
    const objectStore = transaction.objectStore("tareas")
    const query = objectStore.getAll()
    query.onsuccess = () => console.log(query.result)
}

const nuevaTarea = (e: SubmitEvent) => {
    e.preventDefault()
    const newTodo = { tarea: todoTitle.value }

    const transaction = db.transaction(["tareas"], "readwrite")
    const objectStore = transaction.objectStore("tareas")

    const query = objectStore.add(newTodo)
    query.onsuccess = () => (todoTitle.value = "")
    transaction.oncomplete = () => muestraTareas()
    transaction.onerror = () => console.log("Error en la transacción")
}

form.addEventListener("submit", nuevaTarea)
