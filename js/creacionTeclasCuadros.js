
var contenedorErrores = document.querySelector(".contenedorErrores");
var arregloLetrasPalabra = [];

//Funcion que elimina los cuadros de las letras correctas y las incorrectas
function eliminarCuadros(){
    
    for (var i = 0; i < palabraAleatoria.length; i++){
        var cuadro = document.getElementById(i+1);
        document.querySelector(".contenedorLetras").removeChild(cuadro);
    }
    if(contenedorErrores.hasChildNodes()){
        contenedorErrores.removeChild(contenedorErrores.querySelector("span"));
    }
}

//Función que crea los cuadros de la palabra elegida aleatoriamente
function crearCuadro(indice){
    var cuadro = document.createElement("input");
    cuadro.classList.add("letra");
    cuadro.maxLength = 1;//Forma de asignar el atributo maxLength
    cuadro.id = indice;
    cuadro.disabled = true;

    return cuadro;
}

//Función encargada decrear el teclado virual para dispositivos moviles
function crearteclas(){
    var teclado1 = document.querySelector("#teclado1");
    var teclado2 = document.querySelector("#teclado2");
    var teclado3 = document.querySelector("#teclado3");
    
    var teclas = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];
    for (var i = 0;i < 27; i++){
        var tecla = document.createElement("button");
        tecla.innerHTML = teclas[i];
        tecla.classList.add("teclas");
        tecla.id = "tecla " + i;
        if(i < 10){
           teclado1.appendChild(tecla);
        }
        else if(i >= 10 && i < 20){
            teclado2.appendChild(tecla);
        }
        else{
            teclado3.appendChild(tecla);
        }
    }
}

//Función que agrega al contenedor los campos de cada letra en la palabra elegida 
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
}