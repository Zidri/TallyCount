var tick = 0;

function displayTick() {
    document.getElementById("tickDisplay").innerHTML = tick;
}

function upTick() {
    tick++;
    displayTick();
}

function downTick() {
    tick--;
    displayTick();
}

function clearTick() {
    tick = 0;
    displayTick();
}