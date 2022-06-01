
var botonJugar = document.querySelector("#btn-jugar");

conjuntoDePalabras = localStorage.getItem("arregloPalabras");
conjuntoDePalabras = JSON.parse(conjuntoDePalabras);

var palabraAleatoria = "";
var arregloLetrasPalabra = [];
var arregloIndicesAleatorios = [];
var contenedorErroneas = "";
var contenedorCorrectas = "";
var contadorCorrectas = 0;
var contadorIncorrectas = 0;
var contadorIndices = 0;
var numeroPalabras;

function eliminarCuadros(){
    var contenedorErrores =  document.querySelector(".contenedorErrores");
    for (var i = 0; i < palabraAleatoria.length; i++){
        var cuadro = document.getElementById(i+1);
        document.querySelector(".contenedorLetras").removeChild(cuadro);
    }
    if(contenedorErrores.hasChildNodes()){
        contenedorErrores.removeChild(document.querySelector("span"));
    }
}

//funcion que crea un boton para volver a jugar
function reiniciar(continua){
    var reiniciar = document.createElement("button");
    var contenido = document.querySelector(".contenido");
    var contenedor = document.querySelector(".contenedor");
    reiniciar.classList.add("btn-reinicio");
    reiniciar.id = "btn-jugar";
    reiniciar.innerText = "Volver a jugar";
    contenido.appendChild(reiniciar);
    contadorCorrectas = 0;
    contadorIncorrectas = 0;
    contenedorCorrectas = "";
    contenedorErroneas = "";
    arregloLetrasPalabra = [];
    contenedor.classList.add("deshabilitarContenido");
    reiniciar.addEventListener("click",function(){
        if(continua){
            reiniciarPantalla(contenido,contenedor,reiniciar);
        }
        else{
            //if(verificador == false ){
                var respuesta = prompt("Quieres intentar todo denuevo? S/N");
        
                if (respuesta == "S"){
                    arregloIndicesAleatorios = [];
                    reiniciarPantalla(contenido,contenedor,reiniciar);
    
                }
                else if (respuesta == "N"){
                    window.open("./inicio.html","_self");
                }
            //}
        }
    });

}
function reiniciarPantalla(contenido,contenedor,reiniciar){
    dibujoenpantalla(0);
    eliminarCuadros();
    mostrarEnPantalla();
    contenido.removeChild(reiniciar);
    contenedor.classList.remove("deshabilitarContenido");
}
//Funcion que debe crear el conjunto de campos de texto para una palabra al azar
function mostrarEnPantalla(){
    
    if(localStorage.length == 0){
        var conjuntoDePalabras = ["ALURA","HOLA","MUNDO"];
    }
    else{
        var conjuntoDePalabras = localStorage.getItem("arregloPalabras");
        conjuntoDePalabras = JSON.parse(conjuntoDePalabras);
    }
    numeroPalabras = conjuntoDePalabras.length

    console.log(conjuntoDePalabras);

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
    
    console.log(indiceAleatorio);

    //crea el campo de texto en caso que no se utilizaran todas las palabras
    if(arregloIndicesAleatorios.length <= conjuntoDePalabras.length){
        palabraAleatoria = conjuntoDePalabras[indiceAleatorio-1];//Palabra que salio segun el numero aleatorio conseguido en "indiceAleatorio"
        crearCampoTexto(palabraAleatoria.length);
        if(arregloIndicesAleatorios.length == conjuntoDePalabras.length){
            console.log("Ultima palabra");
        }
    }


}

function crearCampoTexto(cantidad){ 
    var agregarPalabra = document.querySelector(".contenedorLetras");
    var objetoLetra;
    for (var i = 0; i < cantidad; i++){
        agregarPalabra.appendChild(crearCuadro(i+1));
        objetoLetra = {
            "letra" : palabraAleatoria[i],
            "indice" : i+1
        }
        arregloLetrasPalabra.push(objetoLetra);
    } 
    console.log(arregloLetrasPalabra);
}

function crearCuadro(indice){
    var cuadro = document.createElement("input");
    cuadro.classList.add("letra");
    cuadro.maxLength = 1;//Forma de asignar el atributo maxLength
    cuadro.id = indice;
    cuadro.disabled = true;

    return cuadro;
}

function validacion(){
    var agregarErrores = document.querySelector(".contenedorErrores");
    var letrasErroneas = document.createElement("span");
    var continua = true;
    window.addEventListener("keyup",function(event){
        var letraIngresada = event.key;
        var Caracteres = /[A-ZÑ]/g;

        if (letraIngresada.match(Caracteres) == null || letraIngresada.length > 1){//null significa que no encontro ninguna coincidencia Y se verifica el largo por los casos que no son letras como el "shif", etc.
            console.log("Sólo letras mayúsculas");
        }
        else{
            if (palabraAleatoria.indexOf(letraIngresada) == -1){//Se verifica que la letra no esta en la palabra elegida
                if(contenedorErroneas.indexOf(letraIngresada) == -1){//Revisa que la letra ingresa no este en el conjunto de letra erroneas y la agrega 
                    console.log("Letra Errónea");
                    contenedorErroneas += letraIngresada;
                    letrasErroneas.innerHTML = contenedorErroneas;
                    agregarErrores.appendChild(letrasErroneas);
                    contadorIncorrectas++;
                    dibujoenpantalla(contadorIncorrectas);
                }
                else{
                    alert("letra erronea repetida");
                }
            }
            else{
                if(contenedorCorrectas.indexOf(letraIngresada) == -1){
                    var coincidencias = arregloLetrasPalabra.filter(objetoLetra => objetoLetra.letra === letraIngresada);
    
                    for (var i = 0; i < coincidencias.length; i++ ){
                        document.getElementById(coincidencias[i].indice).value = coincidencias[i].letra;
                        contenedorCorrectas += letraIngresada
                        event.preventDefault();
                    }
                    contadorCorrectas += coincidencias.length;
                    console.log(contenedorCorrectas);
                    console.log(contadorCorrectas);
                    
                }
                else{
                    console.log ("Letra correcta repetida");
                }
            }   
        }
        if(contadorCorrectas == palabraAleatoria.length && contadorIncorrectas < 7){
            if(contadorCorrectas > 0){
                console.log("Felicidades! Ganaste");
                if(arregloIndicesAleatorios.length == numeroPalabras){
                    continua = false;
                    reiniciar(continua);
                }
                else{
                    continua = true;
                    reiniciar(continua);
                }
            }
        }
        else if(contadorIncorrectas == 7){
            console.log("Que mal, perdiste");
            if(arregloIndicesAleatorios.length == numeroPalabras){
                continua = false;
                reiniciar(continua);
            }
            else{
                continua = true;
                reiniciar(continua);
            }
        }

    });
    
}
mostrarEnPantalla();
validacion();