
let minhaImagem = document.querySelector('.loop');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
        if(meuSrc === '../images/ash-poke-pc2.png') {
    minhaImagem.setAttribute ('src','../images/ash-poke-pc1.png');
        } else {
    minhaImagem.setAttribute ('src','../images/ash-poke-pc2.png');
    }
}


let vaporWave = document.querySelector('.pikachuu');

vaporWave.onclick = function() {
    let mySrc = vaporWave.getAttribute('src');
        if(mySrc === '../images/tenor-pikachu.gif') {
    vaporWave.setAttribute ('src','../images/pikachu-dance.gif');
        } else {
    vaporWave.setAttribute ('src','../images/tenor-pikachu.gif');
    }
}
/*var audio = document.getElementsByTagName("audio")[0];
audio.play();*/
let myButton = document.querySelector('button.user-button');
let myAsideUser = document.querySelector('h4');

function defineNomeUsuario() {
  let meuNome = prompt('Say your name or type anything please.');
  localStorage.setItem('nome', meuNome);
  myAsideUser.textContent = 'and try me, ' + meuNome;
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  myAsideUser.textContent = 'and try me, ' + nomeGuardado;
}

function defineNomeUsuario() {
  let meuNome = prompt('Say your name or type anything please.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    myAsideUser.innerHTML = 'and try me, ' + meuNome;
  }
}

myButton.onclick = function() { defineNomeUsuario();
}