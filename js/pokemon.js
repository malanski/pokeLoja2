class PokemonSelected {
    constructor(options) {
        this.name = options.name;
        this.types = options.types.map(typeItem => typeItem.type.name);
        this.abilities = options.abilities.map(abilityType => abilityType.ability.name);
        this.id = options.id;
        this.imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`;   
        
    }
    html() {
        const pokeDiv = document.querySelector('.poke-data')
        pokeDiv.innerHTML =`
        <div class="pokemon">
            <div class="poke-img">
                <h1>${this.name}</h1>
                <img src="${this.imagem}" alt="${this.name}">
            </div>

            <div class="poke-status">
                <h2><small>Nome:</small> ${this.name}</h2>
                <hr>
                    <h2>Tipo</h2>
                    <ul>
                        <li>${this.types}</li>
                        <li>${this.types.type}</li>
                    </ul>
                </hr>
                <h2>Habilidades</h2>
                <ul>
                    <li>${this.abilities}</li>
                    <li>${this.abilities.ability}</li>
                    <li>Habilidade 3</li>
                </ul>
            </div>
        </div>`
    return pokeDiv;
    }
}

//  procura Url de cada pokemon na API
function getQueryparameters() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
}
async function getPokemonData(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const response = await fetch(url);
    const data = await response.json();


//  ProXimo Pokemon
function nextPoke(id) {
    const pokeNext = document.querySelector('.next-poke');
    pokeNext.innerHTML = `
        <a href="pokemon.html?id=${this.id + 1}">
            <button>NEXT-></button>
        </a>`
}
function backPoke() {
    const pokeBack = document.querySelector('.back-poke');
    pokeBack.innerHTML = `
        <a href="pokemon.html?id=${this.id - 1}">
            <button><-BACK</button>
        </a>`
}
 nextPoke();
    backPoke();

    return data;
};


const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 1000));

window.onload =  async function() {
    const { id } = getQueryparameters();
    const pokemonDiv = document.querySelector('.poke-data');
   

    if (window.Carrinho) Carrinho();

    try {
        await fakePromise();
        const data = await getPokemonData(id);
        const pokemon = new PokemonSelected(data);
        pokemon.html();
    } catch (error) {
        pokemonDiv.innerHTML = `<div class="error">Nenhum resultado Encontrado</div>`;
    };

    //  Gabeta para ver os dados todos do JSON
    // pokemonDiv.innerHTML = JSON.stringify(data);
};

