class PokemonSelected {
    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.height = options.height;
        this.weight = options.weight;
        this.base_experience = options.base_experience;
        // this.sprites = options.sprites.map(imageCheck => imageCheck.back_default.string);
        this.types = options.types.map(typeItem => typeItem.type.name);
        this.abilities = options.abilities.map(abilityType => abilityType.ability.name);
        this.imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`;   
        this.imageDrem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`;   
        this.imageArt = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;   
        this.gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${this.id}.gif`;   
        this.gif2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/${this.id}.gif`;   
        this.imageYel = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/${this.id}.png`;   
        this.imageCristal = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/${this.id}.png`;   
        this.imageRed = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${this.id}.png`;   
        this.imageOmega = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/${this.id}.png`;   
        this.imageXfem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/${this.id}.png`;   
        this.imageViFem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/female/${this.id}.png`;   
    }
    // https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/dream-world/25.svg
    // https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-i/yellow/transparent/25.png
    // https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-ii/crystal/transparent/25.png
    html() {
        const pokeDiv = document.querySelector('.poke-data')
        // console.log(this.abilities)
        pokeDiv.innerHTML =`
        <div class="pokemon">
            <div class="poke-img">
                <h1>${this.name}</h1>
                <img src="${this.imagem}" alt="${this.name}">
                <img src="${this.imageDrem}" alt="${this.name}">
            </div>

            <div class="poke-status">
                <img src="${this.imageArt}" alt="${this.name} original">
                
                <div class="name-animated">
                    <div class="poke-numbers">
                        <h3><small>Id number:</small> ${this.id}#</h3>
                        <h2><small>Name:</small> ${this.name}</h2>
                        <h3><small>Size:</small> ${(this.height * 0.1).toFixed(2)} meters</h3>
                        <h3><small>Weight:</small> ${(this.weight * 0.1).toFixed(2)} Kg</h3>
                        <h3><small>Experience:</small> ${this.base_experience}XP's</h3>

                    </div>

                    <div class="animated">
                        <img src="${this.gif}" alt="${this.name} animated">
                        <img src="${this.imageYel}" alt="${this.name} animated">
                        <img src="${this.imageRed}" alt="${this.name} animated">
                        <img src="${this.gif2}" alt="${this.name} animated">
                    </div>

                </div>

                <hr>
                    <h2>Tipo</h2>
                    <ul class="tipos">
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
                <ul class="tipos">
                    ${
                        this.abilities.map(habilidade => `<li>${habilidade}</li>`)
                        .join('')
                    }
                </ul>
                
            </div>
        </div>
        <div class="poke-info">

        <div class="info-head">
            <h5> ${this.name} History</h5>
            <img src="${this.imageRed}" alt="${this.name} red-blue">
        </div>

            <p>
                The pokémon ${this.name}, of the species ${this.name}lus pokémonae, ${this.types[0]} type
            </p>
                <p>
                Lorem Ipsum is ${this.name} simply dummy text of the printing and typesetting industry.  
                Lorem Ipsum ${this.name} has been the industry's ${this.types[0]} standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to ${this.abilities} make a type 
                specimen book. ${this.name} has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. ${this.name} was popularised in the 
                1960s with the release of ${this.name} Letraset sheets containing Lorem Ipsum passages, and more 
                recently with ${this.types[1]} desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <img src="${this.imageArt}" alt="${this.name} shiny image" title="${this.name} shiny">

            <div class="other-images">
                <img src="${this.gif2}" alt="${this.name} back" title="${this.name} back">

                <img src="${this.gif}" alt="${this.name} animated" title="${this.name} animated">

            </div>

            <table>
                <tr>
                    <th></th>
                    <th class="no-border">Other</th>
                    <th>Versions</th>
                    <th></th>
                </tr>
                <tr>
                    <th>Red - Blue</th>
                    <th>Shiny</th>
                    <th>Female</th>
                    <th>Icon</th>
                </tr>
                <tr>
                    <td><img src="${this.imageRed}" alt="${this.name} shiny image" title="${this.name} shiny"></td>
                    <td><img src="${this.imageOmega}" alt="${this.name} shiny " title="${this.name} shiny"></td>
                    <td><img src="${this.imageXfem}" alt="${this.name} Female " title="${this.name} Female"></td>
                    <td><img src="${this.imageViFem}" alt="${this.name} icon " title="${this.name} icon"></td>
                </tr>
            </table>

            
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
                <button>NEXT<i class="fas fa-arrow-right"></i></button>
            </a>`;
    }
    function backPoke() {
        const pokeBack = document.querySelector('.back-poke');
        pokeBack.innerHTML = `
            <a href="pokemon.html?id=${+id - 1}">
                <button><i class="fas fa-arrow-left"></i>BACK</button>
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

