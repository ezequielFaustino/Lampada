const lampOn = document.getElementById('turnOn');
const lampOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function turnOn(){
    lamp.src = './img/ligada.jpg'
};

function turnOff(){
    lamp.src = './img/desligada.jpg'
};

lampOn.addEventListener('click', turnOn);
lampOff.addEventListener('click', turnOff);
lamp.addEventListener('mouseover', turnOn);
lamp.addEventListener('mouseleave', turnOff);
