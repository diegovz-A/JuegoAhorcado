
var botonJugar = document.querySelector("#btn-jugar");

//Se recuperan los datos almacenados en el localStorage
conjuntoDePalabras = localStorage.getItem("arregloPalabras");
conjuntoDePalabras = JSON.parse(conjuntoDePalabras);

var palabraAleatoria = "";
var arregloIndicesAleatorios = [];
var numeroPalabras;

var movil = window.matchMedia("(max-width:575px)");
var tablet = window.matchMedia("(min-width:768px)")

//Funcion que debe crear el conjunto de campos de texto para una palabra al azar
function mostrarEnPantalla(){
    //En caso de que nos e agregue nada las palabras por defecto son las del conjuntoDePalabras
    if(localStorage.length == 0){
        var conjuntoDePalabras = ["ALURA","HOLA","MUNDO"];
    }
    else{
        var conjuntoDePalabras = localStorage.getItem("arregloPalabras");
        conjuntoDePalabras = JSON.parse(conjuntoDePalabras);
    }

    numeroPalabras = conjuntoDePalabras.length;

    var sigue = true;
    var verificador = true;
    var indiceAleatorio = Math.round(Math.random()*conjuntoDePalabras.length);

    while (sigue){

        //Primero verifica que indice no sea 0 y que no este repetido
        if(indiceAleatorio > 0){
            if(arregloIndicesAleatorios.length == conjuntoDePalabras.length){
                verificador = false;
                sigue = false;
            }
            else if(arregloIndicesAleatorios.indexOf(indiceAleatorio) == -1){
                arregloIndicesAleatorios.push(indiceAleatorio);
                sigue = false;
            }
            else{
                indiceAleatorio = Math.round(Math.random()*conjuntoDePalabras.length);
            }
            
        }
        //En caso de ser 0 lanza otro indice aleatorio
        else if(indiceAleatorio == 0){
            indiceAleatorio = Math.round(Math.random()*conjuntoDePalabras.length);
        }
    }

    //crea el campo de texto en caso que no se utilizaran todas las palabras
    if(arregloIndicesAleatorios.length <= conjuntoDePalabras.length){
        palabraAleatoria = conjuntoDePalabras[indiceAleatorio-1];//Palabra que salio segun el numero aleatorio conseguido en "indiceAleatorio"
        crearCampoTexto(palabraAleatoria.length);
    }
}

//Función que muestra si ganaste o perdiste el juego
function GanasPierdes(contenedorReinicio,mensaje,opcionGanasPierdes){

    mensaje.classList.add("ganasPierdes");
    
    if (opcionGanasPierdes == 1){
        mensaje.innerText = "Felicidades! Ganaste";
    }
    else if (opcionGanasPierdes == 2){
        mensaje.innerText = "Que mal, perdiste";
    }
    contenedorReinicio.appendChild(mensaje);
}

//Función encargada de verificar si se continua el juego o si se debe reiniciar, enviando el resultado a la funcion reiniciar
function resultadoJuego(){

    if(contadorCorrectas == palabraAleatoria.length && contadorIncorrectas < 7){
        if(contadorCorrectas > 0){
            if(arregloIndicesAleatorios.length == numeroPalabras){
                continua = false;
                reiniciar(continua,1);
            }
            else{
                continua = true;
                reiniciar(continua,1);
            }
        }
    }
    else if(contadorIncorrectas == 7){

        if(arregloIndicesAleatorios.length == numeroPalabras){
            continua = false;
            reiniciar(continua,2);
        }
        else{
            continua = true;
            reiniciar(continua,2);
        }
    }
}

//Función que muestra los teclados virtuales en caso de detectar que es un dispositivo movil segun los parametros indicados por las resoluciones
function tecladoEnPatantalla(){
    if(movil.matches){
        crearteclas();
    }
    else if(tablet.matches){
        crearteclas();
    }
}

mostrarEnPantalla();
tecladoEnPatantalla();
validacionDesktop();
validacionDispositivos();