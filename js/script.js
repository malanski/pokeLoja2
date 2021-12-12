const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 2500));

let page = 0;

async function getPokemons(page = 0) {
  const pokeList = document.querySelector('.poke-list');

  // inserir Aviso temporário de Loading + FakePromise
  pokeList.innerHTML = '<div class="loading">Now Loading... please wait...</div>';

  // Limita aquantidade de Pokémon por Página
  const limit = 20;

  // Faz pagina subir depois de clicar mudar pagina
  window.scrollTo({top: 0, behavior: 'smooth'})


  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit * page}`);

  const json = await response.json();

  // Arredonda a quantidade de páginas
  const pages = Math.ceil(json.count / limit);

  // mostra numero de paginas atual e total: logger
  pageLogger('Page ' + (page + 1) + ' of ' + pages);
  await fakePromise();

  return json;
}
function pageLogger(page) {
  const pageLogs = document.querySelector('.page-log');

  pageLogs.innerHTML = `${page}`;
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