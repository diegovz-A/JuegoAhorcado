var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

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
    pincel.arc(599,130,30,0,2*Math.PI);
    pincel.stroke();
    pincel.fill();
}
function dibujarTronco(){
    pincel.beginPath();
    pincel.moveTo(599,160);
    pincel.lineTo(599,260); 
    pincel.closePath();
    pincel.stroke();
}
function dibujarPiernaIzquierda(){
    pincel.beginPath();
    pincel.moveTo(599,260);
    pincel.lineTo(585,295);
    pincel.closePath();
    pincel.stroke();
}
function dibujarPiernaDerecha(){
    pincel.beginPath();
    pincel.moveTo(599,260);
    pincel.lineTo(614,295);
    pincel.closePath();
    pincel.stroke();
}
function dibujarBrazoIzquierdo(){
    pincel.beginPath();
    pincel.moveTo(599,190);
    pincel.lineTo(585,225);
    pincel.closePath();
    pincel.stroke();
}
function dibujarBrazoDerecho(){
    pincel.beginPath();
    pincel.moveTo(599,190);
    pincel.lineTo(614,225);
    pincel.closePath();
    pincel.stroke();
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
