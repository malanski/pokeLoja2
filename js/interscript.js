class TopPokes {
    constructor(options) {
        this.name = options.name;
        this.id = options.id;
        this.imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`;
    }
    html() {
        const asideTop = document.querySelector('.top-poke-img')
        asideTop.innerHTML =`
            <img src="${this.imagem}" alt="${this.name}">
        `
        return TopPokes
    }
}

// Giff Click interativo do Aside: Ash Computer
const minhaImagem = document.querySelector('.loop');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/ash-poke-pc2.png') {
        minhaImagem.setAttribute ('src', 'images/ash-poke-pc1.png');
    } else {
        minhaImagem.setAttribute ('src', 'images/ash-poke-pc2.png')
    }
}

// Giff Click interativo do Aside: Pikachuu
const vaporWave = document.querySelector('.pikachuu');

vaporWave.onclick = function() {
    let meuSrc2 = vaporWave.getAttribute('src')
    if(meuSrc2 === 'images/tenor-pikachu.gif') {
        vaporWave.setAttribute ('src', 'images/pikachu-dance.gif');
    } else {
        vaporWave.setAttribute ('src', 'images/tenor-pikachu.gif')
    }
}


// Define nome de usuario
let myUserName = document.querySelector('.welcome');

function defineUserName() {
    let userName = prompt('Please Type your name here:');

    localStorage.setItem('name', userName);

    myUserName.textContent = 'welcome to the pokéloja, ' + userName;
}

// USER BUTTON
// Botão de Troca de Usuário
let myButton = document.querySelector('button.user-button');
myButton.onclick = function() {defineUserName();}

// Verificação de Usuario + Pedido de Entrada de Nome
if(!localStorage.getItem('nome')){
    defineUserName();
} else {
    let storedName = localStorage.getItem('nome');

    myUserName.textContent = 'welcome to the pokéloja, ' + storedName;
}
// checador para nome vazio
function defineUserName() {
    let userName = prompt('Please Type your name here:');
    if(!userName || userName === null) {
        defineUserName();
    } else {
        localStorage.setItem('nome',userName);
        myUserName.innerHTML = 'welcome to the pokéloja, ' + userName;
    }
}



