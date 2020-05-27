"use strict";
  
var hovered = false;

function move() {
    setInterval(step, 1000);
}

function newHeight() {
    return Math.random() * document.body.clientHeight;
}


function newWidth() {
    return Math.random() * document.body.clientWidth;
}

function step() {

    if (!hovered) {
        var obj = document.getElementById("square");

        obj.style.left = newWidth();

        obj.style.top = newHeight();
    }
}

function swapValue(value) {
    hovered = value;
}