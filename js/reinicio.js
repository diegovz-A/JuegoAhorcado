
var continua = true;

//Función que crea un botón para volver a jugar y deja las variables en su estado inicial
function reiniciar(continua,opcionGanasPierdes){
    var contenido = document.querySelector(".contenido");
    var contenedor = document.querySelector(".contenedor");
    var mensaje = document.createElement("h2");
    var reiniciar = document.createElement("button");
    var contenedorReinicio = document.createElement("div");
    contenedorReinicio.classList.add("posAbs-flex-colum");
    contenido.appendChild(contenedorReinicio);
    reiniciar.classList.add("btn-reinicio");
    reiniciar.id = "btn-jugar";
    reiniciar.innerText = "Volver a jugar";
    GanasPierdes(contenedorReinicio,mensaje,opcionGanasPierdes);
    contenedorReinicio.appendChild(reiniciar);
    contadorCorrectas = 0;
    contadorIncorrectas = 0;
    contenedorCorrectas = "";
    contenedorErroneas = "";
    arregloLetrasPalabra = [];
    contenedor.classList.add("deshabilitarContenido");
    reiniciar.addEventListener("click",function(){

        contenedorReinicio.removeChild(mensaje);  

        //En caso de ser "true" sigue con la siguiente palabra, en caso que ya hayas terminado, te pregunta si seguir jugando o no
        if(continua){
            reiniciarPantalla(contenedorReinicio,contenedor,reiniciar);
        }
        else{
            contenido.removeChild(contenedorReinicio);
            var contenedorRespuesta = document.createElement("div");
            var pregunta = document.createElement("span");
            var si = document.createElement("button");
            var no = document.createElement("button");
            pregunta.innerText = "¿Desea reiniciar el juego?";
            pregunta.style.fontSize = "x-large";
            si.innerText = "SI";
            si.classList.add("btn-juego");
            no.innerText = "NO";
            no.classList.add("btn-juego");
            contenedorRespuesta.classList.add("posAbs-flex-colum");
            contenedorRespuesta.appendChild(pregunta);
            contenedorRespuesta.appendChild(si);
            contenedorRespuesta.appendChild(no);

            contenido.appendChild(contenedorRespuesta);
            
            si.onclick = function(){
                arregloIndicesAleatorios = [];
                reiniciarPantalla(contenedorReinicio,contenedor,reiniciar);
                contenido.removeChild(contenedorRespuesta);
            }
            no.onclick = function(){
                window.open("./index.html","_self");
            }

        }
        
    });

}
//Función que limpia la pantalla
function reiniciarPantalla(contenedorReinicio,contenedor,reiniciar){
    dibujoenpantalla(0);
    eliminarCuadros();
    mostrarEnPantalla();
    contenedorReinicio.removeChild(reiniciar);
    contenedor.classList.remove("deshabilitarContenido");
}