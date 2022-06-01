
//Estos condicionales verifican si el ya hay palabras guardadas en localstorage

if(localStorage.length == 0){
    var conjuntoDePalabras = ["ALURA","HOLA","MUNDO"];
}
else{
    var conjuntoDePalabras = localStorage.getItem("arregloPalabras");
    conjuntoDePalabras = JSON.parse(conjuntoDePalabras);
}


console.log(conjuntoDePalabras);

function agregarPalabra(){
    let palabraNueva = document.getElementById("nuevaPalabra").value;
    var Caracteres = /[A-ZÑ]/g;
    var arregloCoincidencias = palabraNueva.match(Caracteres);

    const indice1 = palabraNueva.length;

    if(arregloCoincidencias == null || indice1 != arregloCoincidencias.length){
        alert("Palabra inválida, Favor utilizar mayúsculas y sin caracteres especiales");
    }

    else if (palabraNueva.length > 1 && indice1 == arregloCoincidencias.length){
        if (conjuntoDePalabras.indexOf(palabraNueva) == -1){
            conjuntoDePalabras.push(palabraNueva);
            conjuntoDePalabras = JSON.stringify(conjuntoDePalabras);
            localStorage.setItem("arregloPalabras",conjuntoDePalabras);

            conjuntoDePalabras = localStorage.getItem("arregloPalabras");
            conjuntoDePalabras = JSON.parse(conjuntoDePalabras);
            //console.log(conjuntoDePalabras);
            console.log(conjuntoDePalabras);

        }
        else{
            alert("Ésta palabra ya existe");
        }
    }
}

function borrarPalabras(){
    localStorage.clear();
    location.reload();
    alert("Palabras Borradas");
}


document.getElementById("btn-nuevaPalabra").onclick = agregarPalabra
document.getElementById("borrarPalabras").onclick = borrarPalabras;