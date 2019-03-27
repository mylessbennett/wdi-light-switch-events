const lightSwitch = document.querySelector('.switch');
const body = document.querySelector('body');
const status = document.querySelector('.status');

//Turning switch on and off
lightSwitch.addEventListener('click', function() {
    if (lightSwitch.classList.contains('on')) {
        lightSwitch.classList.remove("on");
        lightSwitch.className += " off"; 
        body.className = "dark"; 
        status.innerText = "Hey, who turned off the lights?";
    } else if (lightSwitch.classList.contains('off')) {
        lightSwitch.classList.remove("off");
        lightSwitch.className += " on";
        body.className = "light";
        status.innerText = "It's so bright in here!"
    }
});
