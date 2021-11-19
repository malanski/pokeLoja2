
let minhaImagem = document.querySelector('.loop');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
        if(meuSrc === 'images/ash-poke-pc2.png') {
    minhaImagem.setAttribute ('src','images/ash-poke-pc1.png');
        } else {
    minhaImagem.setAttribute ('src','images/ash-poke-pc2.png');
    }
}


let vaporWave = document.querySelector('.pikachuu');

vaporWave.onclick = function() {
    let mySrc = vaporWave.getAttribute('src');
        if(mySrc === 'images/tenor-pikachu.gif') {
    vaporWave.setAttribute ('src','images/pikachu-dance.gif');
        } else {
    vaporWave.setAttribute ('src','images/tenor-pikachu.gif');
    }
}
/*var audio = document.getElementsByTagName("audio")[0];
audio.play();*/
let myButton = document.querySelector('button.user-button');
let myAsideUser = document.querySelector('h4');

function defineNomeUsuario() {
  let meuNome = prompt('Type your name or type nickname please.');
  localStorage.setItem('nome', meuNome);
  myAsideUser.textContent = 'Welcome to the Pokéloja, ' + meuNome;
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
}
else {
  let nomeGuardado = localStorage.getItem('nome');
  myAsideUser.textContent = 'Welcome to the Pokéloja, ' + nomeGuardado;
}

function defineNomeUsuario() {
  let meuNome = prompt('Type your name or type nickname please.');
  if(!meuNome || meuNome ===null) {
    defineNomeUsuario();  
  }
  else {
    localStorage.setItem('nome',meuNome);
    myAsideUser.innerHTML = 'Welcome to the Pokéloja, ' + meuNome;
  }
}

myButton.onclick = function() {defineNomeUsuario();
}