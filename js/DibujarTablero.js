let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

var conjuntoDePalabras = ["ALURA","HOLA","MUNDO"];

function palabraSecreta(palabra){

}
function agregarPalabra(){

    let palabraNueva = document.getElementById("nuevaPalabra").value;
    var Caracteres = /[A-Z]/g;
    var arregloCoincidencias = palabraNueva.match(Caracteres);

    const indice1 = palabraNueva.length;
    const indice2 = arregloCoincidencias.length;

    if (palabraNueva.length > 1 && indice1 === indice2){
        if (conjuntoDePalabras.indexOf(palabraNueva) == -1){
            conjuntoDePalabras.push(palabraNueva);
            console.log(conjuntoDePalabras);
        }
        else{
            alert("Ésta palabra ya existe");
        }
    }
    else{   
        alert("Palabra inválida, Favor utilizar mayúsculas y sin caracteres especiales");
    }
}


document.getElementById("nuevaP").onclick = agregarPalabra;