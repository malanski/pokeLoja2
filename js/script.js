
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
    vaporWave.setAttribute ('src','images/imgur-pikachu.gif');
        } else {
    vaporWave.setAttribute ('src','images/tenor-pikachu.gif');
    }
}
var audio = document.getElementsByTagName("audio")[0];
audio.play();

