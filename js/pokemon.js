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
        this.imageGold = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/${this.id}.png`;   
        this.imageSilver = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/${this.id}.png`;   
        this.imageRed = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${this.id}.png`;   
        this.imageOmega = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/${this.id}.png`;   
        this.imageX = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/${this.id}.png`;   
        this.imageXfem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/female/${this.id}.png`;   
        this.imageIcoFem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/female/${this.id}.png`;   
        this.imageIco = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${this.id}.png`;   
    }
    html() {
        
        const pokeDiv = document.querySelector('.poke-data');
        
        pokeDiv.innerHTML =`
            <div class="card-game">
                <div class="card-name">
                    <div class="name-icone">
                        <div class="poke-icone"><img src="${this.imagem}" alt="${this.name}"></div>
                        <p class="pokemon-name">${this.name}</p>
                    </div>

                    <p class="xp-hp">${this.base_experience}HP<i class="fas fa-fire-alt"></i></p>
                </div>

                <div class="img-principal">
                    <img class="imgcard" src="${this.imageArt}" alt="${this.name}">
                    <div class="info-principal">
                        NO.${this.id} ${this.types[0]} Pokémon HT: ${(this.height * 0.1).toFixed(2)}m WT: ${(this.weight * 0.1).toFixed(2)}kg
                    </div>
                </div>

                <div class="first-attack">
                    <i class="fas fa-sun"></i>
                    <p>${this.abilities[0]} Shove</p>
                    <p>${(this.base_experience / 2.5).toFixed(0)}</p>
                </div>

                <div class="second-attack">
                    <div>
                        <i class="fas fa-sun"></i>
                        <i class="fas fa-sun"></i>
                        <i class="fas fa-sun"></i>
                    </div>
                    <p>
                        ${
                            this.abilities.map(habilidade => `<small>${habilidade}</small>`)
                            .join(' ')
                        } slap
                    </p>
                    <p>
                        <big>${(this.base_experience / 1.7).toFixed(0)}</big>
                    </p>
                </div>
                <div class="card-footer">
                    
                    <div class="weakness">
                        <div class="weak-point">
                            <span>weakness <i class="fas fa-fire-alt elemental"></i> <small>x</small> ${(this.base_experience / 25).toFixed(0)}</span>
                            <span>resistence <i class="fas fa-fist-raised"></i>-${(this.base_experience / 20).toFixed(0)}</span>
                        </div>

                        <div class="weak-point">
                            <span> retreat <br> cost</span>
                            <span><i class="fas fa-sun"></i> <i class="fas fa-sun"></i></span>
                        </div>
                    </div>

                    <div class="information">
                        <p>
                            ${this.name}<small> a.k.a. </small><i>${this.name}nia ${this.name}lus pokémonae</i>, is a 
                            ${
                                this.types.map(tipo => `${tipo}`)
                                .join(' and ')
                            } type of pocket-monster.
                            In order to achieve ${this.name}'s Critical Hit attack, with 
                            ${
                                this.abilities.map(habilidade => `${habilidade}`)
                                .join(' or ')
                            }
                            ${this.name} needs to get under 
                            ${(this.base_experience / 3).toFixed(0)}HP.
                        </p>
                    </div>
                </div>

                <div class="card-bottom">
                    <h6>
                            <small>dev.</small>Ulisses Malanski
                    </h6>
                    <h6>
                            © 2022 Pokémon
                    </h6>
                    <h6>
                            ${(this.weight * this.height / this.base_experience).toFixed(0)}/
                            ${(this.weight * this.base_experience / this.height / 10).toFixed(0)}
                            <i class="fas fa-yin-yang"></i>
                    </h6>
                </div>
            </div>


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
                        <h3><small>Size:</small> ${(this.height * 0.1).toFixed(2)} m</h3>
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
                <img src="${this.imageYel}" alt="${this.name} animated">

                <h5> ${this.name} History</h5>
                <img src="${this.imageRed}" alt="${this.name} red-blue">
            </div>

            <p>
                ${this.id}# Pokémon: ${this.name} a.k.a. <i>${this.name}nia ${this.name}lus pokémonae</i>, is a 
                ${
                    this.types.map(tipo => `${tipo}`)
                    .join(' and ')
                } type of pocket-monster.
                In order to achieve ${this.name}'s first special attack, like 
                ${
                    this.abilities.map(habilidade => `${habilidade}`)
                    .join(' and ')
                }
                ${this.name} need to get over 
                ${this.base_experience} experience points. <br>
                Usually a adult ${this.name}'s seize is ${(this.weight * 0.1).toFixed(2)}kg and 
                ${(this.height * 0.1).toFixed(2)} meters,
                but in rare cases they reach the ${(this.weight * 0.1).toFixed(2) * 1.5} kg and ${(this.height * 0.1).toFixed(2) * 1.7} meters.
            </p>

            <img src="${this.imageArt}" alt="${this.name} shiny image" title="${this.name} shiny">

            <div class="other-images">
                <img src="${this.gif2}" alt="${this.name} back" title="hey, ${this.name} you are awesome">

                <img src="${this.gif}" alt="${this.name} animated" title="no no no, ${this.name}  you are awesome">

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
                    <td>
                        <i class="fas fa-venus"><img src="${this.imageXfem}" alt="${this.name} Female " title="${this.name} Female">
                        <img src="${this.imageX}" alt="${this.name}  " title="${this.name}"><i class="fas fa-mars"></i>
                    </td>
                    <td>
                        <i class="fas fa-venus"></i><img src="${this.imageIcoFem}" alt="${this.name} icon " title="${this.name} icon">
                        <img src="${this.imageIco}" alt="${this.name} icon " title="${this.name} icon"><i class="fas fa-mars"></i>
                    </td>
                </tr>
                <tr>
                    <th>Yellow</th>
                    <th>Cristal</th>
                    <th>Gold</th>
                    <th>Silver</th>
                </tr>
                <tr>
                    <td><img src="${this.imageYel}" alt="${this.name} shiny image" title="${this.name} shiny"></td>
                    <td><img src="${this.imageCristal}" alt="${this.name} shiny " title="${this.name} shiny"></td>
                    <td><img src="${this.imageGold}" alt="${this.name} Female " title="${this.name} Female"></td>
                    <td><img src="${this.imageSilver}" alt="${this.name} icon " title="${this.name} icon"></td>
                </tr>
            </table>
        </div>
        `

        // trocaImagem(pokeDiv);

        return pokeDiv;

    }
}


// Esta Giromba não funciona corretamente e nao consegue trocar o SRC da img usando as imagens dinamicas

// function trocaImagem(event) {
//     const cardImage = document.querySelector('.imgcard');
//     cardImage.onclick = function() {
//         let imageSrc = cardImage.getAttribute('src');
//         if(imageSrc === `${this.imageArt}`) {
//             cardImage.setAttribute ('src', `${this.imagem}`); //Como colocar interpolador aqui????
//         } else {
//             cardImage.setAttribute ('src', `${this.imageArt}`);
//         }
//     }
// }




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
        const pokeNext = document.querySelector(".next-poke");
        
        if (id == 898) {
            pokeNext.innerHTML = `
                <a href="pokemon.html?id=10001">
                    <button>NEXT<i class="fas fa-arrow-right"></i></button>
                </a>`;
        } else {
            pokeNext.innerHTML = `
            <a href="pokemon.html?id=${+id + 1}">
                <button>NEXT<i class="fas fa-arrow-right"></i></button>
            </a>`;
        }
        if ( id == 10220){
            pokeNext.style.visibility = "hidden";
         }
        const pokeNext2 = document.querySelector(".next-poke2");
        if (id == 898) {
            pokeNext2.innerHTML = `
                <a href="pokemon.html?id=10001">
                    <button>NEXT<i class="fas fa-arrow-right"></i></button>
                </a>`;
        } else {
            pokeNext2.innerHTML = `
            <a href="pokemon.html?id=${+id + 1}">
                <button>NEXT<i class="fas fa-arrow-right"></i></button>
            </a>`;
        }
        if ( id == 10220){
            pokeNext2.style.visibility = "hidden";
         }
    }

    function backPoke() {
        const pokeBack = document.querySelector('.back-poke');
    
            if (id == 1) {
                pokeBack.style.visibility = "hidden";
            }

            if(id == 10001) {
                pokeBack.innerHTML = `
            <a href="pokemon.html?id=898">
                <button><i class="fas fa-arrow-left"></i>BACK</button>
            </a>` 
            } else {
                pokeBack.innerHTML = `
            <a href="pokemon.html?id=${+id - 1}">
                <button><i class="fas fa-arrow-left"></i>BACK</button>
            </a>`
            }

        const pokeBack2 = document.querySelector('.back-poke2');
    
            if (id == 1) {
                pokeBack2.style.visibility = "hidden";
            }

            if(id == 10001) {
                pokeBack2.innerHTML = `
            <a href="pokemon.html?id=898">
                <button><i class="fas fa-arrow-left"></i>BACK</button>
            </a>` 
            } else {
                pokeBack2.innerHTML = `
            <a href="pokemon.html?id=${+id - 1}">
                <button><i class="fas fa-arrow-left"></i>BACK</button>
            </a>`
            }
    }
    nextPoke(1);
    backPoke(1);
    console.log(id);

    return data;
};


const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 500));

window.onload =  async function() {
    const { id } = getQueryparameters();
    // if (id > 898 && id < 10001) {
    //     // pokemon.html?id=10001

    //     window.location.href = window.location.href.split("?")[0] + "?id=10001"
    // }
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

