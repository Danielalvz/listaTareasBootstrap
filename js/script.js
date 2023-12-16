const nuevaTareaInput = document.getElementById("nuevaTarea");
const listaTareas = document.getElementById("listaTareas");
const colorInputBackground = document.querySelector('#color');
const colorInputText = document.querySelector('#colorText');

function agregarTarea() {
    const tarea = nuevaTareaInput.value.trim();

    // Comprobar si el valor de la tarea no esta vacío
    if (tarea !== "") {
        // Nos permite agregar un nuevo elemento a la lista
        let elemento = document.createElement("li")

        // Establecer el texto del elemento li con el valor que capturo el campo de entrada
        elemento.textContent = tarea;

        // Cambiar el color de fondo utilizando el color seleccionado
        cambiarColorFondo(elemento);
        cambiarColorTexto(elemento);

        // Agregar botón para eliminar tarea
        agregarBotonEliminar(listaTareas, elemento);

        // Ordenar las tareas de acuerdo al orden de ingreso
        listaTareas.appendChild(elemento);

        // Resetear el campo de entrada para quede vacío después de haber ingresado un dato
        nuevaTareaInput.value = "";

    } else {
        mostrarErrorDatosVacios();
    }
}


function cambiarColorFondo(elemento) {
    let color = colorInputBackground.value;
    elemento.style.backgroundColor = color;
}


function cambiarColorTexto(elemento) {
    let color = colorInputText.value;
    elemento.style.color = color;
}

function agregarBotonEliminar(listaTareas, elemento) {
    const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
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
                    listaTareas.removeChild(elemento);
                    Swal.fire({
                        title: "Eliminado!",
                        text: "Tarea eliminada.",
                        icon: "success"
                    });
                }
            });
        };

        elemento.appendChild(botonEliminar);
}

function mostrarErrorDatosVacios() {
    Swal.fire({
        title: 'Error de Datos',
        text: 'Debes ingresar una tarea en el campo',
        icon: 'error',
    });
}

