class Pokemon {
  constructor (nome, url) {
    this.nome = nome;
    this.url = url;
    this.id = this.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    //
    this.imagem=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`;

    this.preco = Math.floor(Math.random() * 100);
  }

  html() {
    const pokeDiv = document.createElement('div');
    pokeDiv.className = "poke";
    pokeDiv.innerHTML = `
      <div class="card-head">
        <a class="poke-void" href="pages/product1.html">
            <img width="20px" src="images/pokeball-1.png" alt="pokeball icon">
        </a>
      </div>
      <img class="poke-pic" src="${this.imagem}" alt="${this.nome}">

      <div class="card-feet">
          <h2 class="poke-name">${this.nome}</h2>
          <p class="old-price"><small>R$${this.preco}</small></p><br>
          <p class="actual-price"><small>R$</small>${(this.preco * 0.8).toFixed(2)}</p>
          <button class="btn">
            <img src="images/pokeball-color.png"
                title="got a Code discount?">
            <span class="buy">Buy</span>
          </button>
      </div>
    `;
    return pokeDiv;
  }
};

let page = 0;

async function getPokemons(page = 0) {
  const pokeList = document.querySelector('.poke-list');
  pokeList.innerHTML = '<div>Loading Pokémons...</div>';

  const limit = 20;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit * page}`);

  const json = await response.json();

  const pages = Math.ceil(json.count  / limit);

  return json;
}

function temAnterior(page) {
  const bntAnt = document.querySelector('.btn-ant');

  if (page === 0) {
    bntAnt.style.visibility = "hidden";
  } else {
    bntAnt.style.visibility = "visible";
  }
}

<<<<<<< HEAD
function temProx(page) {
  const bntProx = document.querySelector('.btn-prox');
  debugger;
  if (page >= 2) {
    bntProx.style.visibility = "hidden";
  } else {
    bntProx.style.visibility = "visible";
  }
}

async function mudaPagina (newPage) {
  page = newPage;


  const pagination = await getPokemons(page);
  
  listaPokemons(pagination.results);

  temAnterior(page)
  temProx(page);
} 

function btnProx () {
  const btnProx = document.querySelector('.btn-prox');

  btnProx.onclick = () => mudaPagina(page + 1);
=======
function btnProx (page) {
  const btnProx = document.querySelector('.btn-prox');

  if (page === 56) bntAnt.style.visibility = "hidden";

  btnProx.onclick = async() => {
    const response = await getPokemons(page += 1);

    listaPokemons(response.results);
  }
>>>>>>> b0aff80ab51bd2ddf1913c297f5830c62acd837c
}

function listaPokemons(pokemonsApi) {
  const pokeList = document.querySelector('.poke-list');

  pokeList.innerHTML = '';

  const pokemons = pokemonsApi.map((pokemon) => new Pokemon(pokemon.name, pokemon.url));

  pokemons.forEach((pokemon) => {
    const html = pokemon.html();
    pokeList.appendChild(html)
  });
}

// Execute when the page finish loading
window.onload = async () => {
    const response = await getPokemons(page);

    listaPokemons(response.results);
    btnProx();
    temAnterior(page);
    temProx(page);
}