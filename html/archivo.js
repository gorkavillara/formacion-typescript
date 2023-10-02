// const nuevoMensaje: string = "Hola mundo"
// for (let i = 0; i < 10; i++) {
//     console.log("Mensaje", i)
// }
// console.log(nuevoMensaje)
console.warn("Esto es una advertencia desde typescript");
console.error("Esto es un error");
console.info("Esto es un mensaje de información");
console.assert(5 > 0);
console.assert(5 < 0);
var personas = [{
        nombre: "Gorka",
        edad: 35
    }, {
        nombre: "Juan",
        edad: 25
    }, {
        nombre: "Ana",
        edad: 24
    }];
console.table(personas);
console.time("prueba"); // Inicie el temporizador
for (var i = 0; i < 123456; i++) {
    var a = true;
}
console.timeEnd("prueba"); // Detenga el temporizador
//# sourceMappingURL=archivo.js.map