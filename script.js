const lampOn = document.getElementById('turnOn'); //pega botao 'Ligar'
const lampOff = document.getElementById('turnOff'); //pega botao 'Desligar'
const lamp = document.getElementById('lamp'); //pega a img da lampada

//verificacao -> qdo lampada quebrada, nao liga nem desliga
function isBroken(){
    return lamp.src.indexOf('quebrada') > -1 //procurar dentro de 'src' -> str 'quebrada'
};

function turnOn(){ //'liga a lampada'
    if(!isBroken()){ //se nao tiver quebrada, liga lampada
    lamp.src = './img/ligada.jpg'
    }
};

function turnOff(){ //'desliga a lampada'
    if(!isBroken()){ //se nao tiver quebrada, desligada lampada
    lamp.src = './img/desligada.jpg'
    }
};

function breakLamp(){
    lamp.src = './img/quebrada.jpg'
};

lampOn.addEventListener('click', turnOn);
lampOff.addEventListener('click', turnOff);
lamp.addEventListener('mouseover', turnOn);
lamp.addEventListener('mouseleave', turnOff);
lamp.addEventListener('dblclick', breakLamp);
