class PokemonSelected {
    constructor(options) {
        this.name = options.name;
        this.types = options.types.map(typeItem => typeItem.type.name);
        this.abilities = options.abilities.map(abilityType => abilityType.ability.name);
    }

    html() {
        // <div class="pokemon">
        //         <img src="" alt="">
        //         <h1>Nome do Pokémon</h1>
        //         <hr>
        //             <h2>Tipo</h2>
        //             <ul>
        //                 <li>Tipo 1</li>
        //                 <li>Tipo 2</li>
        //             </ul>
        //         </hr>
        //         <h2>Habilidades</h2>
        //         <ul>
        //             <li>Habilidade 1</li>
        //             <li>Habilidade 2</li>
        //             <li>Habilidade 3</li>
        //         </ul>
        //    </div>
    }
}

const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 3000));


//  procura Url de cada pokemon na API
function getQueryparameters() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    return params;
}

async function getPokemonData(id) {
    const url =  `https://pokeapi.co/api/v2/pokemon/${id}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
};


window.onload =  async function() {
    const { id } = getQueryparameters();

    const pokemonDiv = document.querySelector('.pokemon');

    try {
        await fakePromise();
        
        const data = await getPokemonData(id);

        const pokemon = new PokemonSelected(data);
    } catch (error) {
        pokemonDiv.innerHTML = `<div class="error">Nenhum resultado Encontrado</div>`;

    };
    Carrinho();

    //  Gabeta para ver os dados todos do JSON
    // pokemonDiv.innerHTML = JSON.stringify(data);
};

