var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

/*Funciones encargadas de mostrar el conenido del tablero*/

function dibujarSoporte(){
    pincel.beginPath();
    pincel.moveTo(400,0);
    pincel.lineTo(533,100);
    pincel.lineTo(666,100);
    pincel.lineTo(800,0);
    pincel.fill();
}
function dibujarcabeza(){
    pincel.beginPath();
    pincel.arc(599,150,50,0,2*Math.PI);
    pincel.fill();
}
function dibujarTronco(){
    pincel.fillStyle ="black";
    pincel.fillRect(595,200,10,300);
}
function dibujarPiernaIzquierda(){
    pincel.beginPath();
    pincel.moveTo(605,500);
    pincel.lineTo(525,680);
    pincel.lineTo(515,680);
    pincel.lineTo(595,500);
    pincel.fill();
}
function dibujarPiernaDerecha(){
    pincel.beginPath();
    pincel.moveTo(595,500);
    pincel.lineTo(685,680);
    pincel.lineTo(695,680);
    pincel.lineTo(605,500);
    pincel.fill();
}
function dibujarBrazoIzquierdo(){
    pincel.beginPath();
    pincel.moveTo(595,240);
    pincel.lineTo(415,200);
    pincel.lineTo(414,190);
    pincel.lineTo(595,230);
    pincel.fill();
}
function dibujarBrazoDerecho(){
    pincel.beginPath();
    pincel.moveTo(605,240);
    pincel.lineTo(785,200);
    pincel.lineTo(784,190);
    pincel.lineTo(605,230);
    pincel.fill();
}

function dibujoenpantalla(numeroError){
    if(numeroError == 0){
        pincel.clearRect(0,0,pantalla.width,pantalla.height);}
    else if(numeroError == 1){
        dibujarSoporte();}
    else if(numeroError == 2){
        dibujarcabeza();}
    else if(numeroError == 3){
        dibujarTronco();}
    else if(numeroError == 4){
        dibujarPiernaIzquierda();}
    else if(numeroError == 5){
        dibujarPiernaDerecha();}
    else if(numeroError == 6){
       dibujarBrazoIzquierdo();}
    else if(numeroError == 7){
        dibujarBrazoDerecho();}
}
