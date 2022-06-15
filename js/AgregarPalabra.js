
//Estos condicionales verifican si el ya hay palabras guardadas en localstorage

if(localStorage.length == 0){
    var conjuntoDePalabras = ["ALURA","HOLA","MUNDO"];
}
else{
    var conjuntoDePalabras = localStorage.getItem("arregloPalabras");
    conjuntoDePalabras = JSON.parse(conjuntoDePalabras);
}

//Función encargada de verificar que el formato de la palabra nueva a ingresar sea correcto y agregarla al arreglo de palabras
function agregarPalabra(){
    let palabraNueva = document.getElementById("nuevaPalabra").value;
    var Caracteres = /[A-ZÑ]/g;
    var arregloCoincidencias = palabraNueva.match(Caracteres);

    const indice1 = palabraNueva.length;

    if(arregloCoincidencias == null || indice1 != arregloCoincidencias.length){
        mensajes(0);
    }

    else if (palabraNueva.length > 1 && indice1 == arregloCoincidencias.length){
        if (conjuntoDePalabras.indexOf(palabraNueva) == -1){
            conjuntoDePalabras.push(palabraNueva);
            conjuntoDePalabras = JSON.stringify(conjuntoDePalabras);
            localStorage.setItem("arregloPalabras",conjuntoDePalabras);

            conjuntoDePalabras = localStorage.getItem("arregloPalabras");
            conjuntoDePalabras = JSON.parse(conjuntoDePalabras);

        }
        else{
            mensajes(2);
        }
    }
}

//Función que elimina las palabras agregadas por el usuario
function borrarPalabras(){
    localStorage.clear();
}

document.getElementById("btn-nuevaPalabra").onclick = agregarPalabra
document.getElementById("borrarPalabras").onclick =
function(){
    borrarPalabras();
    mensajes(1);
} 