var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

var botonJugar = document.querySelector("#btn-jugar");

function dibujarSoporte(){
    pincel.beginPath();
    pincel.moveTo(400,0);
    pincel.lineTo(533,100);
    pincel.lineTo(666,100);
    pincel.lineTo(800,0);
    pincel.fill();
}

dibujarSoporte();
var palabraAleatoria = "";
var arregloLetrasPalabra = [];
var contenedorErroneas = "";
var contenedorCorrectas = "";
var contadorCorrectas = 0;
var contadorIncorrectas = 0;
//Funcion que debe crear el conjunto de campos de texto para una palabra al azar
botonJugar.addEventListener("click",function(){
    var indiceAleatorio = Math.round(Math.random()*conjuntoDePalabras.length);
    palabraAleatoria = conjuntoDePalabras[indiceAleatorio-1];//Palabra que salio segun el numero aleatorio conseguido en "indiceAleatorio"
    crearCampoTexto(palabraAleatoria.length);
});

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
                    console.log(contenedorCorrectas)
                    console.log(contadorCorrectas);
                    
                }
                else{
                    console.log ("Letra correcta repetida");
                }
            }   
        }
        if(contadorCorrectas == palabraAleatoria.length && contadorIncorrectas < 6){
            if(contadorCorrectas > 0){
                console.log("Felicidades! Ganaste");
                contadorCorrectas = 0;
                contadorIncorrectas = 0;
                contenedorCorrectas = "";
                contenedorErroneas = "";
            }
        }
        else if(contadorIncorrectas == 6){
            console.log("Que mal, perdiste");
            contadorCorrectas = 0;
            contadorIncorrectas = 0;
            contenedorCorrectas = "";
            contenedorErroneas = "";
        }

    });
}

validacion();