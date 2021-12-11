const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 2500));

let page = 0;

async function getPokemons(page = 0) {
  const pokeList = document.querySelector('.poke-list');
  pokeList.innerHTML = '<div class="loading">Now Loading... please wait...</div>';

  const limit = 20;

  window.scrollTo({top: 0, behavior: 'smooth'})

  await fakePromise();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit * page}`);

  const json = await response.json();

  const pages = Math.ceil(json.count / limit);
  console.log(pages - 1);

  // const pageTotal = ;

  pageLogger('Actual page is ' + (page + 1) + ' of ' + pages + ' pages.')


  return json;
}

async function mudaPagina (newPage) {
  page = newPage;

  const pagination = await getPokemons(page);

  listaPokemons(pagination.results);

  temPrimeiro(page);
  temAnterior(page);
  temProx(page);
  temEnd(page);
}

function temPrimeiro(page) {
  const bntZero = document.querySelector('.btn-zero');

  if (page === 0) {
    bntZero.style.visibility = "hidden";
  } else {
    bntZero.style.visibility = "visible";
  }
}
function temAnterior(page) {
  const bntAnt = document.querySelector('.btn-ant');

  if (page === 0) {
    bntAnt.style.visibility = "hidden";
  } else {
    bntAnt.style.visibility = "visible";
  }
}

function temProx(page) {
  const bntProx = document.querySelector('.btn-prox');
  // debugger;
  if (page >= 55) {
    bntProx.style.visibility = "hidden";
  } else {
    bntProx.style.visibility = "visible";
  }
}
function temEnd(page) {
  const btnEnd = document.querySelector('.btn-end');
  // debugger;
  if (page === 55) {
    btnEnd.style.visibility = "hidden";
  } else {
    btnEnd.style.visibility = "visible";
  }
}

function btnProx () {
  const btnProx = document.querySelector('.btn-prox');

  btnProx.onclick = () => mudaPagina(page + 1);
}

function btnEnd () {
  const btnEnd = document.querySelector('.btn-end');

  btnEnd.onclick = () => mudaPagina(page = 55);
}


function btnAnterior () {
  const btnAnterior = document.querySelector('.btn-ant');

  btnAnterior.onclick = () => mudaPagina(page - 1);
}

function btnPrimeiro () {
  const btnPrimeiro = document.querySelector('.btn-zero');

  btnPrimeiro.onclick = () => mudaPagina(page = 0);
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
}
// Execute when the page finish loading
window.onload = async () => {
    const response = await getPokemons(page);

    listaPokemons(response.results);
    // pageLogger('Actual page is ' + page + ' of ' + pageTotal.length + ' pages.')
    btnProx();
    btnEnd();
    btnPrimeiro();
    btnAnterior();

    temPrimeiro(page)
    temAnterior(page);
    temProx(page);
    temEnd(page);
}