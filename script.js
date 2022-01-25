const lampOn = document.getElementById('turnOn');
const lampOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function turnOn(){
    lamp.src = './img/ligada.jpg'
};

lampOn.addEventListener('click', turnOn);