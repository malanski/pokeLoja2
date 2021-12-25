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
        // console.log(this.abilities)
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
                        ${
                            this.types.map(tipo => `<li>${tipo}</li>`)
                            .join('')
                        }

                        <!--
                        <li>${this.types[0]}</li>
                        <li>${this.types[1]}</li>
                        -->
                    </ul>
                </hr>
                <h2>Habilidades</h2>
                <ul>
                    ${
                        this.abilities.map(habilidade => `<li>${habilidade}</li>`)
                        .join('')
                    }
                </ul>
            </div>
        </div>
        <div class="poke-info">
        <h5> ${this.name} History</h5>
            <p>
                Lorem Ipsum is ${this.name} simply dummy text of the printing and typesetting industry.  
                Lorem Ipsum ${this.name} has been the industry's ${this.types[0]} standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to ${this.abilities} make a type 
                specimen book. ${this.name} has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. ${this.name} was popularised in the 
                1960s with the release of ${this.name} Letraset sheets containing Lorem Ipsum passages, and more 
                recently with ${this.types[1]} desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            
        </div>
        `
        return pokeDiv;
    }
    // html() {
    //     const pokeInfo = document.querySelector('.poke-info');
    //     pokeInfo.innerHTML = `
    //     `
    //     return pokeInfo;
    // }

}

//  procura Url de cada pokemon na API
function getQueryparameters() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
}


async function getPokemonData(id = 0) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const response = await fetch(url);
    const data = await response.json();


//  ProXimo Pokemon
    function nextPoke() {
        const pokeNext = document.querySelector('.next-poke');
        
        // pular id's de 899 até 10000
        // if (id === 898){
        //     pokeNext.innerHTML = `
        //     <a href="pokemon.html?id=${+id + 9103}">
        //         <button>NEXT-></button>
        //     </a>`
        // } else (id <= 897 || id >= 10001) {
        //     pokeNext.innerHTML = `
        //     <a href="pokemon.html?id=${+id + 1}">
        //         <button>NEXT-></button>
        //     </a>`
        //     console.lg(id);
        // }
        // else(id === 10220) {
        //     pokeNext.style.visibility = "hidden";
        // }

        // if (id <= 898 && id >= 10001){
        //     pokeNext.innerHTML = `
        //     <a href="pokemon.html?id=${+id + 1}">
        //         <button>NEXT-></button>
        //     </a>`;
        // } else if (id === 898) {
        //         pokeNext.innerHTML = `
        //         <a href="pokemon.html?id=${+id + 9103}">
        //             <button>NEXT-></button>
        //         </a>`;
        // } else if (id === 10220){
        //     pokeNext.style.visibility = "hidden";
        // } else {
        //     pokeNext.style.visibility = "visible";
        // }


        //o + antes do id converte String em Numeros positivos
        pokeNext.innerHTML = `
            <a href="pokemon.html?id=${+id + 1}">
                <button>NEXT-></button>
            </a>`;
    }
    function backPoke() {
        const pokeBack = document.querySelector('.back-poke');
        pokeBack.innerHTML = `
            <a href="pokemon.html?id=${+id - 1}">
                <button><-BACK</button>
            </a>`
            if (id === 1) {
                pokeNext.style.visibility = "hidden";
            }
    }
    nextPoke(1);
    backPoke(1);
    console.log(id);

    return data;
};


const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 1500));

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

        const pokeNext = document.querySelector('.next-poke');
        pokeNext.innerHTML = `
            <a href="pokemon.html?id=${+id + 1}">
                <button>NEXT-></button>
            </a>`;

        const pokeBack = document.querySelector('.back-poke');
        pokeBack.innerHTML = `
            <a href="pokemon.html?id=${+id - 1}">
                <button><-BACK</button>
            </a>`
    };
};

