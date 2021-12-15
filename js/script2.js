//Seleciona o Elemento HTML
const loginForm = document.querySelector('#login-form');

//Evento Submit, com defaut
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    //  acessa dados do formulário, com new formData(variavelGlobal)
    //  q recebe Elemento do formulário, pra puchar as inf dos inputs
    //  Oblect.fromEntries transforma isso em Objeto

    const data = Object.fromEntries(new FormData(event.target));
    
    fetch('http://localhost:8080', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        // deu certo
        console.log(data);
    }).catch(function (error) {
        // não deu certo
        console.warn(error);
    });
});
