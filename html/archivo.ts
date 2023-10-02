const form = document.getElementById("form") as HTMLFormElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Se ha enviado el formulario", event);
});

const MyEvent = new Event("mi-evento", {
  bubbles: true,
  cancelable: true,
});

const input = document.querySelector("input[name=nombre]") as HTMLInputElement;

input.addEventListener("input", (event) => {
  console.log("El input ha cambiado", event);
});

input.addEventListener("change", (event) => {
  console.log("El input ha cambiado (change)", event);
});

input.addEventListener("focus", (event) => {
  console.log("El elemento ha sido enfocado", event);
});

input.addEventListener("blur", (event) => {
  console.log("El elemento ha sido DESenfocado", event);
  input.dispatchEvent(MyEvent)
});

input.addEventListener("mi-evento", (event) => {
  console.log("Este es mi evento", event);
});
