const menu = document.querySelector("#menu");
const lista = document.querySelector("#lista")
const opciones = document.querySelector("#opciones");
const cerrar = document.querySelector("#cerrar");

menu.addEventListener("click", () =>{
    opciones.classList.add("visible");
    lista.classList.add("desplegar")
})

cerrar.addEventListener("click", () =>{
    opciones.classList.remove("visible");
    lista.classList.remove("desplegar")
})

