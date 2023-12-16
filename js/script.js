// Definir la función
function agregarTarea() {
    // Obtener el valor del elemento con el id "nuevaTarea"
    let tarea = document.getElementById("nuevaTarea").value;

    // Obtener la lista de tareas con el id "listaTareas"
    let lista = document.getElementById("listaTareas");

    // Comprobar si el valor de la tarea no esta vacío
    if (tarea.trim() !== "") {
        // Nos permite agregar un nuevo elemento a la lista
        let elemento = document.createElement("li");

        // Establecer el texto del elemento li con el valor que capturo el campo de entrada
        elemento.textContent = tarea;

        // Agregar botón para eliminar tarea
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = function () {

            Swal.fire({
                title: "¿Quieres borrar esta tarea?",
                text: "No podrás revertir el cambio",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then((result) => {
                if (result.isConfirmed) {
                    lista.removeChild(elemento);
                    Swal.fire({
                        title: "Eliminado!",
                        text: "Tarea eliminada.",
                        icon: "success"
                    });
                }
            });


        };

        elemento.appendChild(botonEliminar);


        // Ordenar las tareas de acuerdo al orden de ingreso
        lista.appendChild(elemento);

        // Resetear el campo de entrada para quede vacío después de haber ingresado un dato
        document.getElementById("nuevaTarea").value = "";

    } else {
        Swal.fire({
            title: 'Error de Datos',
            text: 'Debes ingresar una tarea en el campo',
            icon: 'error',
        });
    }
}

