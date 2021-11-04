
let minhaImagem = document.querySelector('.loop');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
        if(meuSrc === 'images/ash-poke-pc2.png') {
    minhaImagem.setAttribute ('src','images/ash-poke-pc1.png');
        } else {
    minhaImagem.setAttribute ('src','images/ash-poke-pc2.png');
    }
}