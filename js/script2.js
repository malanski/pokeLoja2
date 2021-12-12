const meuLink = document.querySelector('#meu-link');

const meuClique = function(event) {
    event.preventDefault();

    console.log(event);
}
meuLink.addEventListener('click', meuClique)
