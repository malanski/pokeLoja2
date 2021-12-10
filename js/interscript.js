const minhaImagem = document.querySelector('.loop');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/ash-poke-pc2.png') {
        minhaImagem.setAttribute ('src', 'images/ash-poke-pc1.png');
    } else {
        minhaImagem.setAttribute ('src', 'images/ash-poke-pc2.png')
    }
}

const vaporWave = document.querySelector('.pikachuu');

vaporWave.onclick = function() {
    let meuSrc2 = vaporWave.getAttribute('src')
    if(meuSrc2 === 'images/tenor-pikachu.gif') {
        vaporWave.setAttribute ('src', 'images/pikachu-dance.gif');
    } else {
        vaporWave.setAttribute ('src', 'images/tenor-pikachu.gif')
    }

}

let myAsideUser = document.querySelector('h4');
let myButton = document.querySelector('button.user-button');
myButton.onclick = function() {defineUserName();}

function defineUserName() {

    let userName = prompt('Please Type your name here:');
    localStorage.setItem('name', userName);
    myAsideUser.textContent = 'welcome to the pokéloja, ' + userName;
}

if(!localStorage.getItem('nome')){
    defineUserName();
}
else {
    let storedName = localStorage.getItem('nome');
    myAsideUser.textContent = 'welcome to the pokéloja, ' + storedName;
}


function defineUserName() {
    let userName = prompt('Please Type your name here:');
    if(!userName || userName === null) {
        defineUserName();
    } else {
        localStorage.setItem('nome',userName);
        myAsideUser.innerHTML = 'welcome to the pokéloja, ' + userName;
    }
}

