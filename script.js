function agregarTarea () {

    //obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value

    //validar que el valor no sea vacio
    if (nuevaTareaTexto === "") {
        alert("Por favor, ingrese una tarea.")
        return;
    }

    //Crear elemento en la lista

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    nuevaTarea.className = "miTarea";

    //crear boton eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.className = "miBotonEliminar"
    botonEliminar.onclick = function () {nuevaTarea.remove();}


    //Funcionalidad Completar la tarea
    let botonCompletar = document.createElement("Button")
    botonCompletar.textContent = "?";
    botonCompletar.className = "miBotonCompletar"

    //Agregar boton eliminar y completar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);
    nuevaTarea.appendChild(botonCompletar);

    //Agregar la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar cuadro de texto
    document.getElementById("nuevaTarea").value = "";
}