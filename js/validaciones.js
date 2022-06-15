var letrasErroneas = document.createElement("span");
var contadorCorrectas = 0;
var contadorIncorrectas = 0;
var contenedorErroneas = "";
var contenedorCorrectas = "";

//Función que valida las letras ingresadas
function validar(letraIngresada){
    var contenedorMensajes = document.querySelector(".contenedorMensajes");
    var mensajeEliminar = document.getElementById("mensaje");
    var iconoMensaje = document.getElementById("iconoMensaje");
    if(contenedorMensajes.childElementCount > 0){
        contenedorMensajes.removeChild(iconoMensaje);
        contenedorMensajes.removeChild(mensajeEliminar);
    }
    if (palabraAleatoria.indexOf(letraIngresada) == -1){//Se verifica que la letra no esta en la palabra elegida
        if(contenedorErroneas.indexOf(letraIngresada) == -1){//Revisa que la letra ingresa no este en el conjunto de letra erroneas y la agrega 
            var btnReinicioPantalla = document.getElementById("btn-jugar");
            //Esto verifica que la opción de reiniciar el juego no esté en pantalla, para que no permita ingresar más palabras
            if(btnReinicioPantalla == null){
                contenedorErroneas += letraIngresada;
                letrasErroneas.innerHTML = contenedorErroneas;
                contenedorErrores.appendChild(letrasErroneas);
                contadorIncorrectas++;
                dibujoenpantalla(contadorIncorrectas);
            }
        }
    }
    else{
        if(contenedorCorrectas.indexOf(letraIngresada) == -1){
            //Se usa el metodo filter para que entregue un arreglo con las coincidencias de la letra ingresada en la palabra y asi, ingresarlas en los campos correspodientes donde va la letra en cuestión
            var coincidencias = arregloLetrasPalabra.filter(objetoLetra => objetoLetra.letra == letraIngresada);

            for (var i = 0; i < coincidencias.length; i++ ){
                document.getElementById(coincidencias[i].indice).value = coincidencias[i].letra;
                contenedorCorrectas += letraIngresada
            }
            contadorCorrectas += coincidencias.length;
            
        }
    } 
}

//Función las letras ingresadas por el teclado virtual y entrega resultados en dispositivos
function validacionDispositivos(){
    var teclado = document.querySelector(".tecladoCompleto");
    teclado.addEventListener("click",function(event){
        validar(event.target.innerHTML); //este parametro captura la teclas presionada y obtiene el valor que tiene asignado
        resultadoJuego();
    });

}

//Función que valida y entrega resultados en computador
function validacionDesktop(){

    window.addEventListener("keyup",function(event){
        var letraIngresada = event.key;
        var Caracteres = /[A-ZÑ]/g;
        if (letraIngresada.match(Caracteres) == null || letraIngresada.length > 1){//null significa que no encontro ninguna coincidencia Y se verifica el largo por los casos que no son letras como el "shift", etc.
            mensajes(0);
        }
        else{
            validar(letraIngresada);
            resultadoJuego();
        }

    }); 
}