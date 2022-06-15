
var arregloMensajes = ["Sólo se admiten letras mayúsculas","Palabras eliminadas exitosamente","Esta palabra ya existe"];

//Función que distribuye y muestra los mensajes de "error" que se pueden presentar 
function mensajes(n_mensaje){
    var contenedorMensajes = document.querySelector(".contenedorMensajes");
    var mensajeEliminar = document.getElementById("mensaje");
    var iconoMensaje = document.getElementById("iconoMensaje");

    //En caso de tener un mensaje de "error" lo elimina para mostrar el nuevo
    if(contenedorMensajes.childElementCount > 0){
        contenedorMensajes.removeChild(iconoMensaje);
        contenedorMensajes.removeChild(mensajeEliminar);
    }
    var mensaje = document.createElement("span");
    var icono = document.createElement("img");
    icono.id = "iconoMensaje";
    icono.src = "./img/Warning-bgremovido.png";
    icono.classList.add("icono");
    mensaje.innerText = " " + arregloMensajes[n_mensaje];
    mensaje.id = "mensaje";
    mensaje.style.fontWeight = "bold";
    mensaje.style.color = "orangered";
    contenedorMensajes.appendChild(icono);
    contenedorMensajes.appendChild(mensaje); 

}