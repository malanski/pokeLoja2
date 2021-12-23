
const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 500));
class Pokemon {
    constructor(nome, url){
        this.nome = nome;
        this.url = url;
        this.id = this.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/', '');
        this.imagem = `
            https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`;
        this.preco = Math.floor(Math.random() * 100);
    }
    html() {
        const pokeDiv = document.createElement('div');
        pokeDiv.className = 'poke';
        pokeDiv.innerHTML = `
            <a href="pokemon.html?id=${this.id}">
                <div class="card-feet">
                    <h2>${this.nome}</h2>
                    <img class="poke-pic" src="${this.imagem}" alt="${this.nome}">

                    <p class="old-price"><small>R$${this.preco}</small></p>
                    <p class="actual-price"><small>R$</small>${(this.preco * 0.8).toFixed(2)}</p>
                    <p class="parcela-price"><small>12x R$ </small>${(this.preco / 12).toFixed(2)}</p><br>
                    <div>
                        <button class="btn">
                        <img src="images/pokeball-color.png" title="Buy ${this.nome} Now">
                        <span class="buy">Buy</span>
                        </button>
                    </div>
                </div>
            </a>
        `;
        return pokeDiv;
    }
}

let page = 0;
async function getPokemons(page = 0) {
    const pokeList = document.querySelector('.poke-list');

    // Loading
    pokeList.innerHTML = `
    <div>
    <div class="loading">
        <p>Now Loading... please wait...</p>
        </div>
    </div>
    `;

    // Limita aquantidade de Pokémon por Página
    const limit = 20;

    // Faz pagina subir depois de clicar mudar pagina
    window.scrollTo({top: 0, behavior: 'smooth'})

    await fakePromise();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit * page}`);

    const json = await response.json();

    // Arredonda a quantidade de páginas
    const pages = Math.ceil(json.count / limit);

    // mostra numero de paginas atual e total: logger
    pageLogger((page + 1) + '/' + pages);

    return json;
}

function pageLogger(page) {
    const pageLogs = document.querySelector('.page-log');

    pageLogs.innerHTML = `${page}`;
}

function listaPokemons(pokemonsApi) {
    const pokeList = document.querySelector('.poke-list');

    pokeList.innerHTML = '';

    const pokemons = pokemonsApi.map((pokemon) => new Pokemon(pokemon.name, pokemon.url));


    pokemons.forEach((pokemon) => {
        const html = pokemon.html();
        pokeList.appendChild(html)
    });
    const buyButtons = document.querySelectorAll('.btn');
    // console.log(buyButtons);

    buyButtons.forEach((btn) => {
        btn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('comprar');
        });
    });
}

// Esconder Botão p/Primeira página na primeira página
function temPrimeiro(page) {
    const bntZero = document.querySelector('.btn-zero');

    if (page === 0) {
        bntZero.style.visibility = "hidden";
    } else {
        bntZero.style.visibility = "visible";
    }
}

// Esconder Botão p/Anterior na primeira página
function temAnterior(page) {
    const bntAnt = document.querySelector('.btn-ant');

    if (page === 0) {
        bntAnt.style.visibility = "hidden";
    } else {
        bntAnt.style.visibility = "visible";
    }
}

// Esconder botão p/Proximo na ultima pagina
function temProx(page) {
    const bntProx = document.querySelector('.btn-prox');

    if (page >= 55) {
        bntProx.style.visibility = "hidden";
    } else {
        bntProx.style.visibility = "visible";
    }
}

// Esconder Botão p/Ultima pagina na ultima pagina
function temEnd(page) {
    const btnEnd = document.querySelector('.btn-end');

    if (page === 55) {
        btnEnd.style.visibility = "hidden";
    } else {
        btnEnd.style.visibility = "visible";
    }
}

// função para troca de páginas
async function mudaPagina (newPage) {
    page = newPage;

    const pagination = await getPokemons(page);
    listaPokemons(pagination.results);

    temPrimeiro(page);
    temAnterior(page);
    temProx(page);
    temEnd(page);
}

// Evento Click p/Proxima página
function btnProx () {
    const btnProx = document.querySelector('.btn-prox');

    btnProx.onclick = () => mudaPagina(page + 1);
}

// Evento Click p/Ultima página
function btnEnd () {
    const btnEnd = document.querySelector('.btn-end');

    btnEnd.onclick = () => mudaPagina(page = 55);
}

// Evento Click p/Anterior página
function btnAnterior () {
    const btnAnterior = document.querySelector('.btn-ant');

    btnAnterior.onclick = () => mudaPagina(page - 1);
}

// Evento Click p/Primeira página
function btnPrimeiro () {
    const btnPrimeiro = document.querySelector('.btn-zero');

    btnPrimeiro.onclick = () => mudaPagina(page = 0);
}


// Execute when the page finish loading
window.onload = async () => {
    const response = await getPokemons(page);
    listaPokemons(response.results);

    // if (window.Carrinho) new Carrinho();



// chama as funções de paginação
    btnProx();
    btnEnd();
    btnPrimeiro();
    btnAnterior();

// chama as funções de esconder botões
    temPrimeiro(page)
    temAnterior(page);
    temProx(page);
    temEnd(page);

}