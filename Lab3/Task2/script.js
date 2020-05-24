"use strict";

function composer() {    
    let textLine = prompt('Insert string', 'wasdq');

    if(textLine.length % 2 != 0){
        textLine = textLine.concat('_');
    };

    let chunks = textLine.match(/.{1,2}/g);
    
    let result = '<ul>';
    chunks.forEach((element) => {
        result += '<li>' + element + '</li>';
    });
    result += '</ul>';
    
    var div = document.createElement("div");
    div.innerHTML = result;
    document.body.appendChild(div);
}

document.addEventListener('DOMContentLoaded', composer);